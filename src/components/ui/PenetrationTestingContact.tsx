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
      <div className="mx-auto w-[1440px] px-[120px] py-0">
        <div className="mx-auto w-[1200px] py-[80px] flex justify-between items-start">
          {/* Left intro */}
          <div className="flex flex-col items-start gap-[12px] flex-[1_0_0]">
            <h2
              id="pt-contact"
              className="text-[#3EFF51] text-center font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[48px] leading-[58px]"
            >
              Contact Form
            </h2>
            <p className="w-[494px] text-white font-['Wix_Madefor_Display',_sans-serif] text-[18px] font-normal">
              If you’re looking for a partner who understands your environment and can
              strengthen your defenses, Yes Cybersecurity is ready to help.
            </p>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full name / Company name (full width) */}
              <div className="sm:col-span-2 relative">
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder=" "
                  className="peer w-full h-[48px] rounded-full border border-[#D2D2D2] bg-[rgba(255,255,255,0.90)] px-[16px] pr-[16px] py-[10px] text-[#656565] placeholder-transparent font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal outline-none"
                />
                <span className="hidden peer-placeholder-shown:inline-flex items-center gap-1 pointer-events-none absolute left-[16px] top-1/2 -translate-y-1/2">
                  <span className="text-[#656565] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">Full name / Company name</span>
                  <span className="text-[#C70000] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">*</span>
                </span>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder=" "
                  className="peer w-full h-[48px] rounded-full border border-[#D2D2D2] bg-[rgba(255,255,255,0.90)] px-[16px] pr-[16px] py-[10px] text-[#656565] placeholder-transparent font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal outline-none"
                />
                <span className="hidden peer-placeholder-shown:inline-flex items-center gap-1 pointer-events-none absolute left-[16px] top-1/2 -translate-y-1/2">
                  <span className="text-[#656565] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">Email</span>
                  <span className="text-[#C70000] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">*</span>
                </span>
              </div>

              {/* Phone */}
              <div>
                <div className="relative flex items-center gap-[10px] h-[48px] rounded-full border border-[#D2D2D2] bg-[rgba(255,255,255,0.90)] pl-[12px] pr-[16px] py-[10px]">
                  {/* TH flag SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden>
                    <mask id="mask0_40443_2343" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19">
                      <path d="M18.7436 9.37549C18.7441 10.6065 18.5021 11.8256 18.0313 12.9631C17.5605 14.1005 16.8703 15.1341 16 16.0047C15.1297 16.8754 14.0964 17.566 12.9591 18.0372C11.8218 18.5085 10.6028 18.751 9.37182 18.751C8.14078 18.751 6.92181 18.5085 5.78453 18.0372C4.64725 17.566 3.61394 16.8754 2.74364 16.0047C1.87334 15.1341 1.1831 14.1005 0.712334 12.9631C0.241572 11.8256 -0.000481931 10.6065 7.20376e-07 9.37549C-0.000481931 8.14446 0.241572 6.92539 0.712334 5.78792C1.1831 4.65046 1.87334 3.61688 2.74364 2.74624C3.61394 1.8756 4.64725 1.18495 5.78453 0.713739C6.92181 0.242532 8.14078 0 9.37182 0C10.6028 0 11.8218 0.242532 12.9591 0.713739C14.0964 1.18495 15.1297 1.8756 16 2.74624C16.8703 3.61688 17.5605 4.65046 18.0313 5.78792C18.5021 6.92539 18.7441 8.14446 18.7436 9.37549Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_40443_2343)">
                      <path d="M17.668 18.9443C18.3642 18.9443 18.9243 18.383 18.9243 17.6867V1.11318C18.9243 0.416918 18.3642 -0.143166 17.668 -0.143166H1.0944C0.39814 -0.143166 -0.163185 0.416918 -0.163185 1.11318V17.6867C-0.163185 18.383 0.39814 18.9443 1.0944 18.9443H17.668Z" fill="white" />
                      <path d="M17.6743 18.9443C18.3706 18.9443 18.9307 18.5855 18.9307 18.1404V14.9678H-0.156837V18.1404C-0.156837 18.5855 0.404488 18.9443 1.10075 18.9443H17.6743Z" fill="#E74C3C" />
                      <path d="M1.05694 -0.194336C0.359266 -0.194336 -0.201956 0.164482 -0.201956 0.609556V3.78223H18.9243V0.609556C18.9243 0.164482 18.3619 -0.194336 17.6642 -0.194336H1.05694Z" fill="#E74C3C" />
                      <path d="M-0.209961 6.44629H18.9307V12.3057H-0.209961V6.44629Z" fill="#356BA0" />
                    </g>
                  </svg>
                  {/* Chevron down */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#656565" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {/* Divider */}
                  <span aria-hidden className="h-5 w-px bg-[#C7C7C7] mx-1" />

                  {/* Overlay label when empty */}
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent text-[#656565] placeholder-transparent font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal outline-none"
                  />
                  <span className="hidden peer-placeholder-shown:inline-flex items-center gap-1 pointer-events-none absolute left-[60px] top-1/2 -translate-y-1/2">
                    <span className="text-[#656565] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">Phone number</span>
                    <span className="text-[#C70000] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">*</span>
                  </span>
                </div>
              </div>

              {/* Type of system to be tested */}
              <div className="relative">
                <select
                  name="systemType"
                  required
                  defaultValue=""
                  className="w-full h-[48px] appearance-none rounded-full border border-[#D2D2D2] bg-[rgba(255,255,255,0.90)] pl-[16px] pr-[36px] py-[10px] text-[#656565] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal outline-none"
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
                <svg aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="#656565" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Budget */}
              <div className="relative">
                <select
                  name="budget"
                  required
                  defaultValue=""
                  className="w-full h-[48px] appearance-none rounded-full border border-[#D2D2D2] bg-[rgba(255,255,255,0.90)] pl-[16px] pr-[48px] py-[10px] text-[#656565] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal outline-none"
                >
                  <option value="" disabled className="text-black">
                    Budget
                  </option>
                  <option value="<5k">Under $5k</option>
                  <option value="5-15k">$5k – $15k</option>
                  <option value=">15k">Above $15k</option>
                </select>
                <span aria-hidden className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-[#C70000] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">*</span>
                <svg aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="#656565" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Message (full width) */}
              <div className="sm:col-span-2 relative">
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder=" "
                  className="peer w-full h-[140px] rounded-[20px] border border-[#D2D2D2] bg-[rgba(255,255,255,0.90)] px-[16px] py-[12px] text-[#656565] placeholder-transparent font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal outline-none"
                />
                <span className="hidden peer-placeholder-shown:inline-flex items-center gap-1 pointer-events-none absolute left-[16px] top-3">
                  <span className="text-[#656565] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">Your message</span>
                  <span className="text-[#C70000] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">*</span>
                </span>
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

