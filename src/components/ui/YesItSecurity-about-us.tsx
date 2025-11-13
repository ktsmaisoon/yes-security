interface YesItSecurityAboutUsProps {
  className?: string
}

export default function YesItSecurityAboutUs({ className = "" }: YesItSecurityAboutUsProps) {
  return (
    <section 
      className={`full-bleed relative bg-black py-16 ${className}`}
      aria-label="Yes Cybersecurity About Us"
    >
      

      <div className="relative z-10 container-site">
        <div className="bg-transparent rounded-[200px] border border-white/15 px-4 sm:px-8 lg:px-[142px] py-10 lg:py-[40px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start gap-8 lg:gap-[177px]">
            {/* Left Column - Title */}
            <div className="flex-shrink-0">
              <h2 className="font-['Wix_Madefor_Display',_sans-serif] font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-tight lg:leading-[58px] whitespace-nowrap">
                <span className="text-[#3eff51]">Yes</span> <span className="text-white">Cybersecurity</span>
              </h2>
            </div>
            
            {/* Right Column - Description */}
            <div className="flex-1 max-w-full lg:max-w-[583px]">
              <p className="text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px]">
                Yes Cybersecurity protects businesses across Thailand and the region with professional testing, advisory, and response readiness. Our approach follows recognized frameworks and emphasizes measurable outcomes: fewer vulnerabilities, stronger controls, and clearer accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}