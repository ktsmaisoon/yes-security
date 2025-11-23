import Image from 'next/image'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const visionBg = `${base}/assets/Trust-building/trust1.png`
const provenBg = `${base}/assets/Trust-building/trust2.png`
const confidentialBg = `${base}/assets/Trust-building/trust3.png`
const measurableBg = `${base}/assets/Trust-building/trust4.png`
const visionBgMo = `${base}/assets/Trust-building/trust-mo1.png`
const provenBgMo = `${base}/assets/Trust-building/trust-mo2.png`
const confidentialBgMo = `${base}/assets/Trust-building/trust-mo3.png`
const measurableBgMo = `${base}/assets/Trust-building/trust-mo4.png`
const decorativeBg1 = `${base}/assets/Trust-building/bb02a87caeaa9a0e8823fa520daeae8de3378644.svg`
const decorativeBg2 = `${base}/assets/Trust-building/748203537e9e2d5d82f2867b6f14a358ad76f7f1.svg`

interface TrustBuildingProps {
  className?: string
}

interface TrustCard {
  id: number
  title: string
  description: string
  backgroundImage: string
  mobileBackgroundImage: string
}

const trustCards: TrustCard[] = [
  {
    id: 1,
    title: "Certified Expertise",
    description: "Our professionals hold global certifications such as OSCP, CEH, and CISSP.",
    backgroundImage: visionBg,
    mobileBackgroundImage: visionBgMo
  },
  {
    id: 2,
    title: "Proven Methodologies",
    description: "We apply internationally recognized frameworks like OWASP, ISO 27001, and NIST.",
    backgroundImage: provenBg,
    mobileBackgroundImage: provenBgMo
  },
  {
    id: 3,
    title: "Confidential Handling",
    description: "All projects are conducted under strict security and data confidentiality protocols.",
    backgroundImage: confidentialBg,
    mobileBackgroundImage: confidentialBgMo
  },
  {
    id: 4,
    title: "Measurable Results",
    description: "We deliver clear reports, remediation guidance, and audit-ready documentation.",
    backgroundImage: measurableBg,
    mobileBackgroundImage: measurableBgMo
  }
]

export default function TrustBuilding({ className = "" }: TrustBuildingProps) {
  return (
    <section
      className={`full-bleed relative bg-black sm:bg-transparent py-16 lg:py-[120px] ${className}`}
      aria-label="Trust Building"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
          <h2 className="self-stretch text-[#3eff51] font-['Wix_Madefor_Display',_sans-serif] font-[500] text-[24px] leading-[32px] text-center sm:text-4xl sm:leading-tight lg:text-[48px] lg:leading-[58px] mb-6 lg:mb-8">
            Trust Building
          </h2>
          <p className="self-stretch text-white font-['Wix_Madefor_Display',_sans-serif] font-[500] text-[14px] leading-[16px] text-center mb-[40px] lg:text-[20px] lg:leading-[26px]">
            Our certified team follows global standards like OWASP, ISO, and NIST, delivering every project with confidentiality, clear results, and stronger security outcomes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card) => (
            <article
              key={card.id}
              className="relative bg-black rounded-[12px] h-[263px] lg:h-[307px] w-[320px] overflow-hidden border border-[#606060] flex flex-col items-start py-10 px-[38px] mx-auto lg:mx-0"
            >
              {/* Background Image with bottom-half dark gradient overlay */}
              <div className="absolute inset-0">
                {/* Mobile background image */}
                <Image
                  src={card.mobileBackgroundImage}
                  alt=""
                  fill
                  className="object-cover opacity-70 block lg:hidden"
                  aria-hidden="true"
                />
                {/* Desktop background image */}
                <Image
                  src={card.backgroundImage}
                  alt=""
                  fill
                  className="object-cover opacity-70 hidden lg:block"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/70 to-transparent" aria-hidden="true" />
              </div>

              {/* Decorative SVG Overlays */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute h-[479px] left-[-161px] top-[45px] w-[503px] opacity-20">
                  <Image
                    src={decorativeBg1}
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <div className="absolute h-[339px] left-[179px] top-[141px] w-[390px] opacity-20">
                  <Image
                    src={decorativeBg2}
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-start gap-[30px] self-stretch px-0 py-0 lg:items-start lg:gap-[26px] lg:pt-0 lg:pb-0 lg:justify-center lg:px-0">

                {/* Icon and Title */}
                <div className="flex flex-col items-start gap-[20px] self-stretch flex-1 lg:items-start">

                  <div className="relative w-[36.606px] h-[41px] flex-shrink-0 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="41" viewBox="0 0 37 41" fill="none" aria-hidden="true">
                      <path d="M36.109 5.73812C36.0354 5.2095 35.6551 4.77467 35.1409 4.63175L18.6623 0.0490392C18.4274 -0.0163464 18.1793 -0.0163464 17.9442 0.0490392L1.46556 4.63175C0.951407 4.77467 0.571063 5.20932 0.497459 5.73812C0.401882 6.42539 -1.77853 22.6639 3.81408 30.742C9.40009 38.8106 17.6406 40.8782 17.9886 40.9624C18.0921 40.9874 18.1975 40.9997 18.3032 40.9997C18.409 40.9997 18.5144 40.9872 18.6179 40.9624C18.966 40.8782 27.2066 38.8106 32.7924 30.742C38.385 22.6641 36.2046 6.42557 36.109 5.73812ZM28.9298 15.2183L17.6898 26.4584C17.4282 26.7199 17.0852 26.8509 16.7424 26.8509C16.3996 26.8509 16.0566 26.7201 15.795 26.4584L8.84538 19.5088C8.59402 19.2576 8.45289 18.9167 8.45289 18.5614C8.45289 18.2061 8.5942 17.8652 8.84538 17.614L10.2253 16.2341C10.7485 15.711 11.5969 15.7109 12.12 16.2341L16.7424 20.8565L25.6552 11.9435C25.9064 11.6921 26.2472 11.551 26.6026 11.551C26.9579 11.551 27.2988 11.6921 27.55 11.9435L28.9298 13.3234C29.4531 13.8467 29.4531 14.6951 28.9298 15.2183Z" fill="white" />
                    </svg>
                  </div>

                  <h3 className="self-stretch text-white font-['Wix_Madefor_Display',_sans-serif] font-[500] text-[20px] leading-[26px] text-center whitespace-nowrap lg:whitespace-normal lg:font-[600] lg:text-[32px] lg:leading-[40px] lg:text-left">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="">
                  <p
                    className="self-stretch text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-[16px] leading-[22px] overflow-hidden text-ellipsis text-left"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 4,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}