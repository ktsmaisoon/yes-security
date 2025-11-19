
'use client'

export default function PenetrationTestingFaqs() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
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
    <section
      aria-labelledby="pt-faqs"
      className="text-white"
      style={{
        backgroundImage: `url(${base}/assets/bg/penetrationtesting-bg3.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="mx-auto w-[1440px] px-[120px] py-[100px] flex flex-col items-center gap-[40px]">
        <h2
          id="pt-faqs"
          className="text-white text-center font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[56px] leading-[77px]"
        >
          FAQs
        </h2>

        {/* Flex accordion layout */}
        <div className="flex items-start flex-wrap gap-[20px] w-full">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group flex flex-col w-[568px] px-[30px] py-[10px] justify-center group-open:justify-start items-start gap-3 group-open:gap-6 rounded-[10px] border border-[#6B6B6B] bg-black"
              onMouseEnter={(e) => {
                if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                  const el = e.currentTarget as HTMLDetailsElement & { dataset: { prevOpen?: string } }
                  el.dataset.prevOpen = el.hasAttribute('open') ? '1' : '0'
                  el.setAttribute('open', '')
                }
              }}
              onMouseLeave={(e) => {
                if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                  const el = e.currentTarget as HTMLDetailsElement & { dataset: { prevOpen?: string } }
                  if (el.dataset.prevOpen === '0') {
                    el.removeAttribute('open')
                  }
                  delete el.dataset.prevOpen
                }
              }}
            >
              <summary className="flex items-center gap-3 cursor-pointer list-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  className="h-3 w-3 rotate-0 transition-transform group-open:rotate-180"
                  fill="none"
                >
                  <g clipPath="url(#clip0_42005_2123)">
                    <path d="M6.47006 9.33423L11.8102 3.99395C11.9339 3.87044 12.002 3.70556 12.002 3.52975C12.002 3.35394 11.9339 3.18906 11.8102 3.06555L11.4171 2.67227C11.1609 2.41637 10.7445 2.41637 10.4887 2.67227L6.0043 7.15664L1.51496 2.6673C1.39135 2.54378 1.22657 2.47559 1.05085 2.47559C0.874949 2.47559 0.710167 2.54378 0.586457 2.6673L0.193378 3.06057C0.069766 3.18418 0.00166794 3.34897 0.00166793 3.52477C0.00166792 3.70058 0.069766 3.86546 0.193378 3.98898L5.53844 9.33423C5.66244 9.45804 5.828 9.52604 6.00401 9.52565C6.18069 9.52604 6.34616 9.45804 6.47006 9.33423Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_42005_2123">
                      <rect width="12.0003" height="12.0003" fill="white" transform="translate(12.0005) rotate(90)" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">{item.q}</span>
              </summary>
              <div className="w-full grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-700 ease-out">
                <div className="min-h-0 text-white font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">
                  {item.a}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
