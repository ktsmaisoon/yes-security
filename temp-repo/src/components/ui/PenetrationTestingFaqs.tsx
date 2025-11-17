export default function PenetrationTestingFaqs() {
  const faqs = [
    {
      q: "Do services disrupt operations during a Penetration Test?",
      a: "We plan tests to minimize impact and coordinate any intrusive steps with your team.",
    },
    {
      q: "How long does a typical engagement take?",
      a: "Most projects complete within 1–3 weeks, depending on scope and environment size.",
    },
    {
      q: "What information do you need to begin?",
      a: "A scoped asset list, test windows, and key contacts; we'll provide a checklist.",
    },
    {
      q: "Will you retest after fixes?",
      a: "Yes—retesting is included to confirm remediation.",
    },
    {
      q: "What's the difference between VA and Penetration Testing?",
      a: "VA identifies potential issues at scale; Pen Testing validates exploitability and impact.",
    },
    {
      q: "Can you test production systems?",
      a: "Yes, with safeguards and agreed maintenance windows.",
    },
    {
      q: "Do you provide proof of exploit?",
      a: "Where safe and appropriate, we demonstrate impact with controlled evidence.",
    },
    {
      q: "Will the report support audits and certifications?",
      a: "Yes—findings map to standards such as ISO 27001, NIST, PCI DSS, and OWASP.",
    },
    {
      q: "How often should we test?",
      a: "At least annually or after major changes, new deployments, or incidents.",
    },
    {
      q: "Is our data kept confidential?",
      a: "Absolutely. We follow strict data‑handling and destruction procedures.",
    },
  ]

  return (
    <section aria-labelledby="pt-faqs" className="text-white">
      <div className="container-site py-12 lg:py-16">
        <h2
          id="pt-faqs"
          className="text-center font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[28px] leading-[38px] sm:text-[32px] sm:leading-[42px] lg:text-[36px] lg:leading-[50px] mb-6"
        >
          FAQs
        </h2>

        {/* 2-column accordion grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-white/20 bg-black/30 backdrop-blur-[2px] px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
            >
              <summary className="flex items-center gap-3 cursor-pointer list-none">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/25 text-white/80 text-xs transition-transform group-open:rotate-180">⌄</span>
                <span className="text-sm sm:text-base lg:text-lg font-medium text-white/90">{item.q}</span>
              </summary>
              <div className="mt-3 pl-9 text-sm leading-6 text-white/80">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
