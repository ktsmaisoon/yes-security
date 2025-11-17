import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { ZodError } from "zod";


export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  fullName: z.string().min(1).max(200),
  email: z.string().email().max(320),
  phone: z.string().max(100).optional().nullable(),
  company: z.string().min(1).max(200),
  website: z.string().max(300).optional().nullable(),
  budget: z.string().min(1).max(100),
  message: z.string().min(1).max(5000),
  services: z.array(z.string()).max(20).optional().default([]),
  hp: z.string().optional(), // honeypot
});

// rate limit แบบง่าย (in-memory)
const hits = new Map<string, { c: number; t: number }>();
const WINDOW_MS = 15_000; // 15s
const LIMIT = 3;
function rateLimit(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.t > WINDOW_MS) {
    hits.set(ip, { c: 1, t: now });
    return false;
  }
  rec.c++;
  return rec.c > LIMIT;
}

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0] || "unknown";
    if (rateLimit(ip)) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const json = await req.json();
    const data = schema.parse(json);

    // honeypot: ถ้าช่องซ่อนถูกกรอก → บอท
    if (data.hp && data.hp.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: String(process.env.SMTP_SECURE ?? "false") === "true", // true ถ้าใช้ 465
      auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
      // tls: { rejectUnauthorized: false }, // เปิดเฉพาะกรณี cert แปลก
    });

    // ตรวจการเชื่อมต่อ (ช่วยตอนดีบัก)
    await transporter.verify();

    const lines = [
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone ?? "-"}`,
      `Company: ${data.company}`,
      `Website: ${data.website ?? "-"}`,
      `Budget: ${data.budget}`,
      `Services: ${data.services?.join(", ") || "-"}`,
      ``,
      `${data.message}`,
    ];

    await transporter.sendMail({
      from: process.env.CONTACT_FROM!, // "Web Contact <noreply@yourdomain.com>"
      to: process.env.CONTACT_TO!,     // อีเมลทีมของคุณ
      replyTo: data.email,
      subject: `New inquiry from ${data.fullName} (${data.company})`,
      text: lines.join("\n"),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { ok: false, error: "invalid_input", issues: err.issues },
        { status: 400 }
      );
    }
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}