"use client";

import { FormEvent, useState } from "react";

export default function PenetrationTestingContact() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setOk(null);

    const f = e.currentTarget;
    const body = {
      fullName: (f.elements.namedItem("fullName") as HTMLInputElement).value.trim(),
      email: (f.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (f.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      systemType: (f.elements.namedItem("systemType") as HTMLSelectElement).value,
      budget: (f.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (f.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      hp: (f.elements.namedItem("hp") as HTMLInputElement)?.value ?? "",
    };

    const res = await fetch("/api/penetration-contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    setOk(res.ok);
    setLoading(false);
    if (res.ok) f.reset();
  };

  return (
    <section aria-labelledby="pt-contact" className="text-white">
      <div className="container-site py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left intro */}
          <div>
            <h2
              id="pt-contact"
              className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[28px] sm:text-[32px] lg:text-[36px] text-[#35EF5B]"
            >
              Contact Form
            </h2>
            <p className="mt-4 text-white/80 max-w-[46ch]">
              If you’re looking for a partner who understands your environment and can
              strengthen your defenses, Yes Cybersecurity is ready to help.
            </p>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full name / Company name (full width) */}
              <div className="sm:col-span-2">
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Full name / Company name*"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder-white/70 outline-none focus:border-white/40"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email*"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder-white/70 outline-none focus:border-white/40"
                />
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3.5 focus-within:border-white/40">
                  <span className="text-xl">🇹🇭</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone number*"
                    className="w-full bg-transparent text-white placeholder-white/70 outline-none"
                  />
                </div>
              </div>

              {/* Type of system to be tested */}
              <div>
                <select
                  name="systemType"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white outline-none focus:border-white/40"
                >
                  <option value="" disabled className="text-black">
                    Type of system to be tested
                  </option>
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile Application</option>
                  <option value="network">Network / Infrastructure</option>
                  <option value="cloud">Cloud</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <select
                  name="budget"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white outline-none focus:border-white/40"
                >
                  <option value="" disabled className="text-black">
                    Budget*
                  </option>
                  <option value="<5k">Under $5k</option>
                  <option value="5-15k">$5k – $15k</option>
                  <option value=">15k">Above $15k</option>
                </select>
              </div>

              {/* Message (full width) */}
              <div className="sm:col-span-2">
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message*"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/70 outline-none focus:border-white/40"
                />
              </div>

              {/* honeypot (ซ่อน) */}
              <div aria-hidden className="hidden">
                <input name="hp" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#35EF5B] text-black font-medium py-3.5 hover:brightness-95 transition disabled:opacity-50"
                >
                  {loading ? "Sending…" : "Submit your request"}
                </button>

                {ok === true && <p className="mt-2 text-green-500 text-sm">Sent successfully ✅</p>}
                {ok === false && <p className="mt-2 text-red-500 text-sm">Failed to send ❌</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

