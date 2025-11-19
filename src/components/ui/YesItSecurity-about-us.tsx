interface YesItSecurityAboutUsProps {
  className?: string
}

export default function YesItSecurityAboutUs({ className = "" }: YesItSecurityAboutUsProps) {
  return (
    <section
      className={`full-bleed relative py-16 ${className}`}
      aria-label="Yes Cybersecurity About Us"
    >


      <div className="relative z-10 container-site">
        <div
          className="
    bg-transparent border border-white/30
    flex flex-col items-start gap-[28px] flex-[1_0_0]
    px-[18px] py-[52px]
    rounded-[50px]
    sm:px-8
    lg:flex-none lg:rounded-[200px] lg:px-[142px] lg:py-[52px]
  "
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start gap-8 lg:gap-[177px]">
            {/* Left Column - Title */}
            <div className="flex-shrink-0">
              <h2
                className="
    font-['Wix_Madefor_Display',_sans-serif]
    font-[500]
    text-[24px]
    leading-[32px]
    lg:font-[600]
    lg:text-[36px]
    lg:leading-[38px]
    bg-gradient-to-r from-[#3EFF51] to-white
    bg-clip-text text-transparent
    whitespace-nowrap
  "
              >
                Yes Cybersecurity
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="flex-1 max-w-full lg:max-w-[583px]">
              <p
                className="
    text-white
    font-['Wix_Madefor_Display',_sans-serif]
    font-[500]
    text-[14px]
    leading-[16px]
    lg:font-normal
    lg:text-[16px]
    lg:leading-[22px]
  "
              >
                Yes Cybersecurity protects businesses across Thailand and the region with professional testing,
                advisory, and response readiness. Our approach follows recognized frameworks and emphasizes
                measurable outcomes: fewer vulnerabilities, stronger controls, and clearer accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}