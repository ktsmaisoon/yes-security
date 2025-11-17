"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const SERVICES = [
  "Penetration Testing",
  "Vulnerability Assessment",
  "Red Team Assessment",
  "Source Code Review",
  "Attack Surface Analysis",
  "VA Clinic",
  "Cyber Drill",
];

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  function toggleService(s: string) {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);

    const f = e.currentTarget;
    const body = {
      // ดึงค่าจากฟอร์ม (ต้องมี name ตรงกับ input)
      fullName: (f.elements.namedItem("fullName") as HTMLInputElement).value.trim(),
      email: (f.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (f.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      company: (f.elements.namedItem("company") as HTMLInputElement).value.trim(),
      website: (f.elements.namedItem("website") as HTMLInputElement).value.trim(),
      budget: (f.elements.namedItem("budget") as HTMLInputElement).value.trim(),
      message: (f.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      services: selected,
      // honeypot ป้องกันบอท
      hp: (f.elements.namedItem("hp") as HTMLInputElement)?.value ?? "",
    };

    const r = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    setOk(r.ok);
    setLoading(false);
    if (r.ok) {
      f.reset();
      setSelected([]);
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content with continuous background */}
      <main className="flex-1 full-bleed bg-[#000c39] text-white bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${base}/assets/bg/contactus-bg.png)` }}>
        {/* Hero Section */}
        <section className="relative py-20 min-h-[320px] md:min-h-[420px]">
          <div className="container-site text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Wix_Madefor_Display',_sans-serif] mb-6">
              Contact <span className="text-[#3eff51]">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-['Wix_Madefor_Display',_sans-serif] max-w-3xl mx-auto">
              Get in touch with our cybersecurity experts. We&rsquo;re here to help protect your digital assets.
            </p>
          </div>
        </section>




        {/* Contact Form & Info Section (Design-matched) */}
        <section className="py-16 lg:py-24">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
              {/* Left: Offices & contacts */}
              <aside aria-labelledby="offices-title" className="space-y-10">
                <h2 id="offices-title" className="sr-only">Offices and contacts</h2>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#3eff51] text-black">•</span>
                      <p className="font-semibold tracking-wide">BANGKOK</p>
                    </div>
                    <p className="text-white/80">17th Floor, Wittayakit Building, Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330<br/>(BTS SIAM STATION)</p>
                    <div className="mt-4 space-y-2">
                      <a href="#" className="text-[#3eff51] hover:underline">Google Maps</a>
                      <p>LINE ID: <a className="hover:underline" href="#">@yeswebdesign</a></p>
                      <p>Tel: 096-879-5445</p>
                      <p>Email: <a className="hover:underline" href="mailto:info@yeswebdesignstudio.com">info@yeswebdesignstudio.com</a></p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#3eff51] text-black">•</span>
                      <p className="font-semibold tracking-wide">CHIANGMAI</p>
                    </div>
                    <p className="text-white/80">17th Floor, Wittayakit Building, Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330<br/>(BTS SIAM STATION)</p>
                    <div className="mt-4 space-y-2">
                      <a href="#" className="text-[#3eff51] hover:underline">Google Maps</a>
                      <p>LINE ID: <a className="hover:underline" href="#">@yeswebdesign</a></p>
                      <p>Tel: 096-879-5445</p>
                      <p>Email: <a className="hover:underline" href="mailto:info@yeswebdesignstudio.com">info@yeswebdesignstudio.com</a></p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="mb-3">Follow us</p>
                  <div className="flex items-center gap-4 text-white/80">
                    <span aria-hidden></span>
                    <span aria-hidden></span>
                    <span aria-hidden></span>
                    <span aria-hidden></span>
                    <span aria-hidden></span>
                  </div>
                </div>
              </aside>






              {/* Right: White form card */}
              <div className="bg-white text-black rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200">
                <h2 className="text-xl sm:text-2xl font-medium mb-6">Please enter your details</h2>

                {/* chips: กดเลือก service แล้วเก็บใน state */}
                <div className="mb-4 text-sm text-neutral-700">Service of interest:</div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {SERVICES.map((chip) => {
                    const active = selected.includes(chip);
                    return (
                      <button
                        key={chip}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggleService(chip)}
                        className={[
                          "px-3.5 py-2 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-black/20",
                          active
                            ? "bg-black text-white border-black"
                            : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50",
                        ].join(" ")}
                      >
                        {chip}
                      </button>
                    );
                  })}
                </div>

                <form className="space-y-4" aria-label="Contact details form" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="fullName" aria-label="Your full name" placeholder="Your Full Name*" required className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20"/>
                    <input name="email" aria-label="Your email" type="email" placeholder="Your Email*" required className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20"/>
                    <input name="phone" aria-label="Phone" placeholder="+66" className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20"/>
                    <input name="company" aria-label="Company name" placeholder="Company Name*" required className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20"/>
                    <input name="website" aria-label="Website" placeholder="Website" className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20"/>
                    <input name="budget" aria-label="Budget" placeholder="Budget*" required className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20"/>
                  </div>

                  <textarea name="message" aria-label="Message" placeholder="Tell us what you&rsquo;re looking to achieve*" required className="mt-2 h-32 w-full rounded-2xl border border-neutral-300 p-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20"/>

                  {/* honeypot: ซ่อนไว้ ถ้ามีค่าถือว่าเป็นบอท */}
                  <div aria-hidden className="hidden">
                    <input name="hp" autoComplete="off" tabIndex={-1} />
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={loading} className="w-full rounded-full bg-black text-white py-3.5 text-sm font-medium hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30 disabled:opacity-50">
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </div>

                  {ok === true && (
  <p className="text-green-600 text-sm pt-2">
    Sent successfully. We&rsquo;ll get back to you soon.
  </p>
)}
{ok === false && (
  <p className="text-red-600 text-sm pt-2">
    Couldn&apos;t send your message. Please try again.
  </p>
)}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}