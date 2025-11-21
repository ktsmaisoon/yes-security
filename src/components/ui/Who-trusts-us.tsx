import Image from 'next/image'

// Asset imports
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const singhaLogo = `${base}/assets/Who-trusts-us/525c5603d27fe296e84e043d0f2cdfbfff2419c9.png`
const agodaLogo = `${base}/assets/Who-trusts-us/999c4b477e947c5e2701e31ec65610d12169d79b.png`
const lazadaLogo = `${base}/assets/Who-trusts-us/10de95f44cf42d5b0fa0e176262c04dbb608ba46.png`
const pttLogo = `${base}/assets/Who-trusts-us/299b8fc05496254cacd490d985d1b164f17b6dac.png`
const landroverLogo = `${base}/assets/Who-trusts-us/29b4d53bdb940a1c9139daad2369767217a29183.png`
const gaysornLogo = `${base}/assets/Who-trusts-us/b4fe507fe4fd448d5a5d5cbe84115ca4a683f93e.png`
const italtaiLogo = `${base}/assets/Who-trusts-us/4dddf07aca6747c84a75d7994d39aeff424083f9.png`
const bgDecoration = `${base}/assets/Who-trusts-us/182c6834ca9ac4db50b2c5c479a5716f8df759a4.svg`
const jaguarLogo = `${base}/assets/Who-trusts-us/30560bb687d0a101417492dd506cef67fba28b5e.svg`

interface WhoTrustsUsProps {
  className?: string
}

interface LogoItem {
  name: string
  src: string
  alt: string
  className?: string
}

const logoData: LogoItem[] = [
  { name: "Singha", src: singhaLogo, alt: "Singha Corporation logo" },
  { name: "Jaguar", src: jaguarLogo, alt: "Jaguar logo" },
  {
    name: "Agoda",
    src: agodaLogo,
    alt: "Agoda logo",
    className: "lg:w-[135px]",
  },
  { name: "Lazada", src: lazadaLogo, alt: "Lazada logo" },
  { name: "PTT", src: pttLogo, alt: "PTT logo" },
  { name: "Land Rover", src: landroverLogo, alt: "Land Rover logo" },
  { name: "Gaysorn", src: gaysornLogo, alt: "Gaysorn Village logo" },
  { name: "Italtai", src: italtaiLogo, alt: "Italtai logo" }
]

export default function WhoTrustsUs({ className = "" }: WhoTrustsUsProps) {
  return (
    <section
      className={`full-bleed relative pt-6 pb-16 md:py-20 bg-transparent md:bg-black overflow-hidden ${className}`}
      aria-label="Client testimonials and trusted companies"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-3 w-full max-w-7xl h-[770px]">
          <Image
            src={bgDecoration}
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        className="container-site relative z-10 flex flex-col items-center justify-center gap-[28px] text-center
        px-[24px] pt-[40px] pb-[50px]
        lg:w-[1440px] lg:px-[120px] lg:pt-[80px] lg:pb-[100px]"
      >
        {/* Heading */}
        <h2 className="text-[#e7e7f1] font-['Wix_Madefor_Display',_sans-serif] font-medium text-lg sm:text-xl lg:text-[20px] leading-relaxed lg:leading-[26px] mb-8 sm:mb-12 lg:mb-7">
          <span>They said Yes! to IT Security.</span>
          <br className="block sm:hidden" />
          <span className="hidden sm:inline"> </span>
          <span>Here&apos;s who trusts us.</span>
        </h2>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-8">
          {logoData.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className={`flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-[115px] lg:h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 ${logo.className ?? ""}`}
              role="img"
              aria-label={`${logo.name} company logo`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain filter brightness-0 invert"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 121px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Screen Reader Text */}
        <div className="sr-only">
          <p>Our trusted clients include major corporations such as:</p>
          <ul>
            {logoData.map((logo) => (
              <li key={logo.name}>{logo.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}