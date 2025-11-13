import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { ZodError } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  systemType: z.enum(["web", "mobile", "network", "cloud", "other"]),
  budget: z.enum(["<5k", "5-15k", ">15k"]),
  message: z.string().min(1),
  hp: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = schema.parse(json);

    // honeypot: ถ้าถูกกรอกให้ผ่านเฉย ๆ (ไม่ส่งเมล)
    if (data.hp && data.hp.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: String(process.env.SMTP_SECURE) === "true",
      auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
    });

    const lines = [
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `System Type: ${data.systemType}`,
      `Budget: ${data.budget}`,
      ``,
      data.message,
    ];

    await transporter.sendMail({
      from: process.env.CONTACT_FROM!,
      to: process.env.CONTACT_TO!,
      replyTo: data.email,
      subject: `PenTest inquiry from ${data.fullName}`,
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
    console.error("penetration-contact error:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
