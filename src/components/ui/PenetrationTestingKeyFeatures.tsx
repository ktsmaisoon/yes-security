import Image from "next/image"

export default function PenetrationTestingKeyFeatures() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  const items = [
    {
      icon: `${base}/assets/penetration-testing%20/key-ico1.svg`,
      title: "Certified experts",
      desc: "OSCP, CEH, CISSP-certified testers.",
    },
    {
      icon: `${base}/assets/penetration-testing%20/key-ico2.svg`,
      title: "Actionable reporting",
      desc: "Clear risk ratings, proof of exploit, and fix guidance.",
    },
    {
      icon: `${base}/assets/penetration-testing%20/key-ico3.svg`,
      title: "Retesting included",
      desc: "Verify vulnerabilities have been properly remediated.",
    },
    {
      icon: `${base}/assets/penetration-testing%20/key-ico4.svg`,
      title: "Confidential by design",
      desc: "Strict handling and secure evidence management.",
    },
    {
      icon: `${base}/assets/penetration-testing%20/key-ico5.svg`,
      title: "Consulting support",
      desc: "Advisory sessions for Dev, IT, and leadership.",
    },
    {
      icon: `${base}/assets/penetration-testing%20/key-ico6.svg`,
      title: "Audit-ready outputs",
      desc: "Documentation that maps to your control frameworks.",
    },
  ]

  return (
    <section aria-labelledby="pt-features" className="text-white">
      <div className="container-site py-12 lg:py-16">
        <h2
          id="pt-features"
          className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[28px] leading-[38px] sm:text-[32px] sm:leading-[42px] lg:text-[36px] lg:leading-[50px] mb-6"
        >
          Key Features of Our Services
        </h2>

        {/* Card grid 3x2 on desktop */}
        <div className="rounded-xl border border-white/25 overflow-hidden">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x lg:divide-y lg:divide-x border-white/25" role="list">
            {items.map((it, idx) => (
              <li key={idx} className="p-6 lg:p-10 min-h-[220px] flex flex-col items-center text-center gap-4">
                <Image src={it.icon} alt="" width={56} height={56} />
                <div>
                  <p className="text-white font-semibold">{it.title}</p>
                  <p className="text-white/80 mt-1 text-sm leading-6 max-w-[28ch] mx-auto">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
