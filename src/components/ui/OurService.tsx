import Image from 'next/image'
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// Assets from public/assets/ourservice/
// Icons: service-ico{1..7}.svg
// Hover BGs: service-hover{1..7}.png
const serviceIcons = {
  1: `${base}/assets/ourservice/service-ico1.svg`,
  2: `${base}/assets/ourservice/service-ico2.svg`,
  3: `${base}/assets/ourservice/service-ico3.svg`,
  4: `${base}/assets/ourservice/service-ico4.svg`,
  5: `${base}/assets/ourservice/service-ico5.svg`,
  6: `${base}/assets/ourservice/service-ico6.svg`,
  7: `${base}/assets/ourservice/service-ico7.svg`,
} as const

const serviceHovers = {
  1: `${base}/assets/ourservice/service-hover1.png`,
  2: `${base}/assets/ourservice/service-hover2.png`,
  3: `${base}/assets/ourservice/service-hover3.png`,
  4: `${base}/assets/ourservice/service-hover4.png`,
  5: `${base}/assets/ourservice/service-hover5.png`,
  6: `${base}/assets/ourservice/service-hover6.png`,
  7: `${base}/assets/ourservice/service-hover7.png`,
} as const


interface OurServiceProps {
  className?: string
  hideHeader?: boolean
}

interface ServiceCard {
  id: number
  title: string
  description: string
  icon: string
  hover: string
  link: string
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Penetration Testing",
    description: "Simulated real world attacks to reveal exploitable weaknesses across apps, networks, and infrastructure.",
    icon: serviceIcons[1],
    hover: serviceHovers[1],
    link: "/services/penetration-testing"
  },
  {
    id: 2,
    title: "Vulnerability Assessment",
    description: "Comprehensive scanning and analysis to identify security weaknesses before they can be exploited.",
    icon: serviceIcons[2],
    hover: serviceHovers[2],
    link: "/services/vulnerability-assessment"
  },
  {
    id: 3,
    title: "Red Team Assessment",
    description: "Advanced adversarial simulation testing your organization's detection and response capabilities.",
    icon: serviceIcons[3],
    hover: serviceHovers[3],
    link: "/services/red-team"
  },
  {
    id: 4,
    title: "Source Code Review",
    description: "In-depth analysis of application source code to identify security flaws and vulnerabilities.",
    icon: serviceIcons[4],
    hover: serviceHovers[4],
    link: "/services/source-code-review"
  },
  {
    id: 5,
    title: "Attack Surface Analysis",
    description: "Continuous monitoring and assessment of external-facing assets to minimize attack vectors.",
    icon: serviceIcons[5],
    hover: serviceHovers[5],
    link: "/services/attack-surface"
  },
  {
    id: 6,
    title: "VA Clinic",
    description: "Regular vulnerability assessment sessions with expert consultation to maintain security posture.",
    icon: serviceIcons[6],
    hover: serviceHovers[6],
    link: "/services/va-clinic"
  },
  {
    id: 7,
    title: "Cyber Drill",
    description: "Tabletop and live exercises to test incident response readiness and reduce time to contain.",
    icon: serviceIcons[7],
    hover: serviceHovers[7],
    link: "/services/cyber-drill"
  }
]

export default function OurService({ className = "", hideHeader = false }: OurServiceProps) {
  return (
    <section
      className={`relative overflow-visible bg-black py-16 ${className}`}
      aria-label="Our cybersecurity services"
    >
      {/* Background image */}
      <div className="absolute top-[-370px] left-[-50px] h-[1200px] w-[1500px] z-0">
        <Image
          src="/assets/bg/mainpage-bg.png"
          alt="Main page background"
          width={2000}
          height={1700}
          style={{ objectFit: "cover", objectPosition: "top left" }}
          className="opacity-100"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-[1] mx-auto w-full max-w-[1440px] px-4 sm:px-4 lg:px-6">
        {!hideHeader && (
          <div className="mb-10 space-y-4">
            <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[58px]">
              Our Services
            </h2>
            <p className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] text-lg sm:text-xl lg:text-[20px] leading-relaxed max-w-2xl">
              We cover your entire security lifecycle, from discovery and testing to remediation support and audit readiness.
            </p>
            <button
              type="button"
              aria-label="View all services"
              className="w-[97px] h-[36px] bg-[#3eff51] text-black font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base rounded-[41px] flex items-center justify-center
        border-2 border-transparent hover:bg-black hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 
        focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-black whitespace-nowrap"
            >
              View All
            </button>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-[25px] justify-between justify-items-start mx-auto">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-[16px] p-6 border border-[#333333] transition-all duration-300 bg-black w-[384px] h-[276px] flex flex-col"
            >
              {/* Hover background image */}
              <Image
                src={service.hover}
                alt=""
                fill
                priority={false}
                className="pointer-events-none object-cover opacity-0 group-hover:opacity-100 group-hover:contrast-[1.2] transition-all duration-500 ease-out"
                aria-hidden="true"
              />

              {/* Header with Icon and Title */}
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt=""
                    fill
                    className="object-contain filter brightness-0 invert"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-2xl leading-[1.15] max-w-[240px]">
                  {service.title}
                </h3>
              </div>
              <p className="relative z-10 text-gray-200 font-['Wix_Madefor_Display',_sans-serif] font-normal text-base leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href={service.link}
                className="relative z-10 mt-auto inline-flex items-center font-['Wix_Madefor_Display',_sans-serif] font-normal text-sm"
                aria-label={`Read more about ${service.title}`}
              >
                <span className="relative text-gray-300 hover:text-[#3eff51] transition-colors duration-200 after:block after:h-[2px] after:w-0 after:bg-[#3eff51] after:mt-1 after:transition-all hover:after:w-full">
                  Read more&nbsp;&nbsp;&nbsp;→
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
