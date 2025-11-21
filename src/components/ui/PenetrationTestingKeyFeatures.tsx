import Image from "next/image"

export default function PenetrationTestingKeyFeatures() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  const items = [
    {
      icon: `${base}/assets/penetration/key-icon1.png`,
      title: "Certified experts",
      desc: "OSCP, CEH, CISSP-certified testers.",
    },
    {
      icon: `${base}/assets/penetration/key-icon2.png`,
      title: "Actionable reporting",
      desc: "Clear risk ratings, proof of exploit, and fix guidance.",
    },
    {
      icon: `${base}/assets/penetration/key-icon3.png`,
      title: "Retesting included",
      desc: "Verify vulnerabilities have been properly remediated.",
    },
    {
      icon: `${base}/assets/penetration/key-icon4.png`,
      title: "Confidential by design",
      desc: "Strict handling and secure evidence management.",
    },
    {
      icon: `${base}/assets/penetration/key-icon5.png`,
      title: "Consulting support",
      desc: "Advisory sessions for Dev, IT, and leadership.",
    },
    {
      icon: `${base}/assets/penetration/key-icon6.png`,
      title: "Audit-ready outputs",
      desc: "Documentation that maps to your control frameworks.",
    },
  ]

  return (
    <section aria-labelledby="pt-features" className="text-white">
      <div className="mx-auto w-full px-[24px] py-[50px] flex flex-col items-start gap-[40px] sm:w-[1440px] sm:px-[120px] sm:py-[100px]">
        <h2
          id="pt-features"
          className="font-['Wix_Madefor_Display',_sans-serif] not-italic text-white font-medium text-[24px] leading-[32px] sm:font-semibold sm:text-[32px] sm:leading-[42px] lg:text-[36px] lg:leading-[50px]"
        >
          Key Features of Our Services
        </h2>

        {/* Card grid 3x2 on desktop */}
        <div className="flex w-full flex-col items-start overflow-hidden ring-1 ring-[#E3CDCD] sm:w-[1200px]">
          <ul className="flex flex-col gap-[30px] w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-0" role="list">
            {items.map((it, idx) => (
              <li
                key={idx}
                className={`flex flex-col justify-center items-center text-center gap-[30px] sm:h-[266px] px-[27px] py-[33px] flex-[1_0_0] self-stretch border-t border-[#E3CDCD] first:border-t-0 ${idx < 3 ? 'sm:border-t-0' : ''} ${idx >= 3 ? 'sm:border-b-0' : ''} ${idx % 3 === 0 ? 'sm:border-l-0' : ''} ${idx % 3 === 2 ? 'sm:border-r-0' : ''} sm:border sm:border-[#E3CDCD]`}
              >
                <Image
                  src={it.icon}
                  alt=""
                  width={70}
                  height={70}
                  className="w-10 h-10 sm:w-[70px] sm:h-[70px]"
                />
                <div className="shrink-0 text-center flex flex-col items-center justify-center sm:h-[100px] sm:self-stretch">
                  <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[20px] leading-[26px] font-bold">{it.title}</p>
                  <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
