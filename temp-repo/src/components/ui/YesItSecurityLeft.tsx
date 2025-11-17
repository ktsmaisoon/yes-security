interface YesItSecurityLeftProps {
  className?: string
}

export default function YesItSecurityLeft({ className = "" }: YesItSecurityLeftProps) {
  return (
    <div
      className={`flex flex-col items-start justify-start w-full px-4 py-[50px] gap-8 lg:w-[400px] lg:px-6 lg:pt-0 lg:pb-[50px] lg:gap-8 lg:self-start ${className}`}
    >
      {/* Main Heading with Gradient */}
      <h1
        className="bg-clip-text bg-gradient-to-r from-[#3eff51] to-white to-[34%] font-['Wix_Madefor_Display',_sans-serif] font-medium text-[24px] leading-[32px] lg:text-[56px] lg:leading-[77px] lg:font-semibold w-full lg:flex lg:flex-col lg:justify-center lg:w-[397px] lg:h-[58px]"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        Yes it Security
      </h1>

      {/* Description Text - Mobile */}
      <div
        className="lg:hidden text-white font-['Wix_Madefor_Display',_sans-serif] text-[14px] leading-[16px] font-medium overflow-hidden text-ellipsis self-stretch"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical" as const,
          WebkitLineClamp: 5,
        }}
      >
        <p>
          Yes Cybersecurity delivers comprehensive services to help you prevent breaches, reduce risk, and meet regulatory requirements. Our certified specialists test, assess, and harden your systems using globally recognized frameworks.
        </p>
      </div>

      {/* Description Text - Desktop (hidden to avoid duplicate text on desktop) */}
      <div className="hidden">
        <p>
          Yes Cybersecurity delivers comprehensive services to help you prevent breaches, reduce risk, and meet regulatory requirements. Our certified specialists test, assess, and harden your systems using globally recognized frameworks.
        </p>
      </div>

      {/* CTA Button */}
      <button
        type="button"
        aria-label="Request a free cybersecurity consultation"
        className="w-[173px] h-[36px] bg-[#3eff51] text-[#000000] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base rounded-[41px] 
             border-2 border-transparent hover:bg-[#000000] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 
             focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-[#000000] inline-flex items-center justify-center text-center"
      >
        Free Consultation
      </button>
    </div>
  )
}
