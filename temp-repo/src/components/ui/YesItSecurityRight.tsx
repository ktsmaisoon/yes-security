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
      className={`flex flex-col items-start justify-start w-[390px] px-6 pt-[60px] pb-[56px] gap-8 lg:w-auto lg:px-0 lg:pt-0 lg:pb-0 ${className}`}
    >
      {/* Section Title */}
      <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] w-full">
        <span>Professional Cybersecurity</span>
        <br />
        <span>Service Provider</span>
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
