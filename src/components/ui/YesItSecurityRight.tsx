interface YesItSecurityRightProps {
  className?: string
}

const statsData = [
  {
    percentage: "100%",
    description: "Projects delivered with strict confidentiality",
    gradientFrom: "#f087ff",
    gradientTo: "#8834d8"
  },
  {
    percentage: "69%",
    description: "Average risk reduction after remediation programs",
    gradientFrom: "#20dbff",
    gradientTo: "#225cbd"
  },
  {
    percentage: "74%",
    description: "Clients who expand scope after initial engagement",
    gradientFrom: "#3eff51",
    gradientTo: "#20dbff"
  }
]

export default function YesItSecurityRight({ className = "" }: YesItSecurityRightProps) {
  return (
    <div
      className={`flex flex-col items-start w-[390px] px-6 pt-[60px] pb-[56px] gap-[32px]
      lg:flex lg:flex-col lg:items-start lg:gap-[32px] lg:flex-[1_0_0]
      lg:px-0 lg:pt-[100px] lg:pb-[56px]
      ${className}`}
    >
      {/* Section Title */}
      <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] w-full">
        {/* Mobile: 2 lines - "Professional Cybersecurity" / "Service Provider" */}
        <span className="block lg:hidden">Professional Cybersecurity</span>
        <span className="block lg:hidden">Service Provider</span>

        {/* Desktop: keep existing layout */}
        <span className="hidden lg:inline">Professional Cybersecurity Service</span>
        <br className="hidden lg:block" />
        <span className="hidden lg:inline">Provider</span>
      </h2>

      {/* Statistics List */}
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[60px] items-start justify-start w-full">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-2 sm:gap-[23px] lg:gap-[23px] items-start sm:items-center justify-start w-full"
          >
            {/* Percentage with Gradient */}
            <div
              className="bg-clip-text font-['Kumbh Sans',_sans-serif] font-medium text-[80px] leading-[1.01] shrink-0 text-left whitespace-nowrap overflow-visible w-auto lg:w-[210px]"
              style={{
                WebkitTextFillColor: "transparent",
                backgroundImage: `linear-gradient(to right, ${stat.gradientFrom}, ${stat.gradientTo})`,
              }}
            >
              {stat.percentage}
            </div>

            {/* Description */}
            <div className="text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-[16px] leading-[22px] w-[208px]">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
