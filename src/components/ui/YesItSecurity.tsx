import YesItSecurityLeft from "./YesItSecurityLeft"
import YesItSecurityRight from "./YesItSecurityRight"

interface YesItSecurityProps {
  className?: string
}

export default function YesItSecurity({ className = "" }: YesItSecurityProps) {
  return (
    <section
      className={`full-bleed relative overflow-visible bg-transparent py-16 ${className}`}
      aria-label="Yes it Security - Professional Cybersecurity Services"
    >
      <div className="container-site relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="flex items-center lg:pl-[120px] lg:pr-[200px] lg:pt-[100px] lg:pb-[100px]">
            <YesItSecurityLeft />
          </div>

          {/* Right Column */}
          <div className="flex items-start lg:pt-[100px] lg:pb-[56px] lg:pr-[120px] lg:pl-0">
            <YesItSecurityRight />
          </div>
        </div>
      </div>
    </section>
  )
}