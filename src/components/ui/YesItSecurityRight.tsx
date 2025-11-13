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
    <div className={`flex flex-col gap-6 lg:gap-8 items-start justify-start ${className}`}>
      {/* Section Title */}
      <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium text-xl sm:text-2xl lg:text-[32px] leading-tight lg:leading-[40px] w-full">
        Professional Cybersecurity Service Provider
      </h2>

      {/* Statistics List */}
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[60px] items-start justify-start w-full">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 sm:gap-6 lg:gap-[23px] items-center justify-start w-full"
          >
            {/* Percentage with Gradient */}
            <div
              className="bg-clip-text font-['Kumbh_Sans',_sans-serif] font-medium text-4xl sm:text-5xl lg:text-[80px] leading-none shrink-0 text-left tabular-nums w-[160px] sm:w-[180px] lg:w-[200px]"
              style={{
                WebkitTextFillColor: "transparent",
                backgroundImage: `linear-gradient(to right, ${stat.gradientFrom}, ${stat.gradientTo})`,
                fontVariationSettings: "'YOPQ' 300",
              }}
            >
              {stat.percentage}
            </div>

            {/* Description */}
            <div className="text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px] max-w-xs sm:max-w-sm lg:max-w-[245px]">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
