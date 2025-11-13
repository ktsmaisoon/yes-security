import YesItSecurityLeft from "./YesItSecurityLeft"
import YesItSecurityRight from "./YesItSecurityRight"

interface YesItSecurityProps {
  className?: string
}

export default function YesItSecurity({ className = "" }: YesItSecurityProps) {
  return (
    <section 
      className={`full-bleed relative overflow-visible bg-black py-16 ${className}`}
      aria-label="Yes it Security - Professional Cybersecurity Services"
    >
      <div className="container-site relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="flex items-center">
            <YesItSecurityLeft />
          </div>

          {/* Right Column */}
          <div className="flex items-start">
            <YesItSecurityRight />
          </div>
        </div>
      </div>
    </section>
  )
}