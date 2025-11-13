interface YesItSecurityLeftProps {
  className?: string
}

export default function YesItSecurityLeft({ className = "" }: YesItSecurityLeftProps) {
  return (
    <div className={`flex flex-col gap-6 lg:gap-8 items-start justify-start lg:self-start ${className}`}>
      {/* Main Heading with Gradient */}
      <h1
        className="bg-clip-text bg-gradient-to-r from-[#3eff51] to-white to-[34%] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[58px] w-full"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        Yes it Security
      </h1>

      {/* Description Text */}
      <div className="text-white font-['Wix_Madefor_Display',_sans-serif] text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px] max-w-full lg:max-w-[507px]">
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
