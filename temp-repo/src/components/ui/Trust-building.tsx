import Image from 'next/image'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const visionBg = `${base}/assets/Trust-building/78c4ee0377a8c71ab100a462746ddb35d2e5261e.png`
const provenBg = `${base}/assets/Trust-building/56944ecc83a233d283032067f03a7350fdf1ef2a.png`
const confidentialBg = `${base}/assets/Trust-building/c4a7906dee95fd1d3ae812861ec13fe11cc06ff4.png`
const measurableBg = `${base}/assets/Trust-building/80d13805bbac2e781c934ee95a5f57935759ff5f.png`
const decorativeBg1 = `${base}/assets/Trust-building/bb02a87caeaa9a0e8823fa520daeae8de3378644.svg`
const decorativeBg2 = `${base}/assets/Trust-building/748203537e9e2d5d82f2867b6f14a358ad76f7f1.svg`
const secureIcon = `${base}/assets/Trust-building/06e45d7884594960dc26212be5ab182d62f1e2a0.svg`

interface TrustBuildingProps {
  className?: string
}

interface TrustCard {
  id: number
  title: string
  description: string
  backgroundImage: string
}

const trustCards: TrustCard[] = [
  {
    id: 1,
    title: "Certified Expertise",
    description: "Our professionals hold global certifications such as OSCP, CEH, and CISSP.",
    backgroundImage: visionBg
  },
  {
    id: 2,
    title: "Proven Methodologies",
    description: "We apply internationally recognized frameworks like OWASP, ISO 27001, and NIST.",
    backgroundImage: provenBg
  },
  {
    id: 3,
    title: "Confidential Handling",
    description: "All projects are conducted under strict security and data confidentiality protocols.",
    backgroundImage: confidentialBg
  },
  {
    id: 4,
    title: "Measurable Results",
    description: "We deliver clear reports, remediation guidance, and audit-ready documentation.",
    backgroundImage: measurableBg
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
              className="relative bg-black rounded-[12px] h-[307px] w-[320px] overflow-hidden border border-[#606060] flex flex-col justify-between items-start py-10 px-[38px] mx-auto lg:mx-0"
            >
              {/* Background Image with bottom-half dark gradient overlay */}
              <div className="absolute inset-0">
                <Image
                  src={card.backgroundImage}
                  alt=""
                  fill
                  className="object-cover opacity-70"
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
              <div className="relative z-10 h-full flex flex-col justify-between self-stretch px-0 py-0 lg:items-start lg:justify-center lg:gap-[20px] lg:pt-[38px] lg:pb-[38px] lg:px-0">
                {/* Icon and Title */}
                <div className="flex flex-col items-center gap-[20px] self-stretch justify-center flex-1 lg:items-start">
                  <div className="relative w-[36.606px] h-[41px] flex-shrink-0 lg:mx-auto">
                    <Image
                      src={secureIcon}
                      alt=""
                      fill
                      className="object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="self-stretch text-white font-['Wix_Madefor_Display',_sans-serif] font-[500] text-[20px] leading-[26px] text-center whitespace-nowrap lg:whitespace-normal lg:font-[600] lg:text-[32px] lg:leading-[40px] lg:text-left">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="mt-[30px] lg:mt-[26px]">
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