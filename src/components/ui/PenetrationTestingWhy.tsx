export default function PenetrationTestingWhy() {
  const points = [
    "Identify vulnerabilities before hackers do",
    "Reduce potential business disruption and financial loss",
    "Build confidence with management, customers, and partners",
    "Demonstrate compliance with ISO/IEC 27001, PDPA, NIST, PCI DSS, and OWASP",
  ]

  return (
    <section aria-labelledby="pt-why" className="text-white mt-[40px] sm:mt-0">
      <div className="mx-auto w-full px-[24px] py-[56px] flex flex-col items-start gap-[40px] sm:w-[1440px] sm:px-[120px] sm:py-[56px] sm:flex-row sm:gap-[42px]">
        <div className="flex flex-col items-start gap-[40px] flex-1 sm:flex-row sm:gap-[42px]">
          {/* Left: Heading + Paragraph */}
          <div className="flex flex-col items-start gap-[32px] flex-[1_0_0] self-stretch">
            <h2
              id="pt-why"
              className="font-['Wix_Madefor_Display',_sans-serif] not-italic text-white font-medium text-[24px] leading-[32px] sm:font-semibold sm:text-[36px] sm:leading-[50px]"
            >
              Why should your organization
              <br />
              conduct Penetration Testing?
            </h2>
            <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[14px] leading-[16px] font-medium sm:text-gray-300 sm:leading-relaxed sm:font-normal sm:max-w-xl">
              Penetration testing is more than just a “test”—it provides your organization with deep insights into your security posture and delivers tactical data essential for strengthening your IT infrastructure.
            </p>
          </div>

          {/* Right: Points with green bars */}
          <ul className="flex flex-col items-start gap-[30px] flex-[1_0_0] self-stretch sm:w-[570px] sm:gap-[26px] sm:mt-[8px]" role="list">
            {points.map((text, i) => (
              <li key={i} className="flex items-center">
                <div className="flex h-[69px] px-[21px] py-0 flex-col justify-center items-start self-stretch border-l-[9px] border-[#00FF59] bg-[#000000] sm:justify-center">
                  <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal sm:text-white/90 sm:leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
