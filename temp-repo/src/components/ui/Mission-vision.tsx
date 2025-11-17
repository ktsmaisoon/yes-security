import Image from 'next/image'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const visionImage = `${base}/assets/Mission-vision/78c4ee0377a8c71ab100a462746ddb35d2e5261e.png`
const missionImage = `${base}/assets/Mission-vision/80d13805bbac2e781c934ee95a5f57935759ff5f.png`

interface MissionVisionProps {
  className?: string
}

export default function MissionVision({ className = "" }: MissionVisionProps) {
  return (
    <section
      className={`full-bleed relative bg-black sm:bg-transparent ${className}`}
      aria-label="Mission and Vision"
    >
      <div className="container-site">
        <div
          className="
            flex flex-col justify-center items-start self-stretch
            px-[24px] py-[50px]
            lg:flex-row lg:items-center lg:justify-center lg:h-auto
            lg:max-w-[1440px] lg:px-[120px] lg:py-[100px] lg:mx-auto
          "
        >
          {/* Vision Card */}
          <div className="flex-1 relative h-[272px] lg:h-auto lg:min-h-[500px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={visionImage}
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/85 to-black"></div>
            </div>

            {/* Border */}
            <div className="absolute inset-0 border border-[#434343] pointer-events-none" aria-hidden="true"></div>

            {/* Content */}
            <div
              className="
                relative z-10 h-full flex flex-col items-start justify-end
                px-[30px] pt-[100px] pb-[30px]
                gap-8
                lg:px-[60px] lg:pt-[200px] lg:pb-[60px] lg:gap-8
              "
            >
              <div className="flex flex-col gap-6 lg:gap-8">
                <h2
                  className="
                    text-white font-['Wix_Madefor_Display',_sans-serif]
                    font-[500] text-[24px] leading-[32px]
                    lg:font-[600] lg:text-[36px] lg:leading-[58px]
                  "
                >
                  Vision
                </h2>

                <p
                  className="
                    text-white font-['Wix_Madefor_Display',_sans-serif]
                    font-[500] text-[14px] leading-[16px]
                    lg:font-normal lg:text-[16px] lg:leading-[22px]
                  "
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 5,
                    overflow: 'hidden',
                  }}
                >
                  Our vision is to build a trusted digital environment where organizations can operate with confidence. Cybersecurity should be a foundation for growth and trust, not a barrier to innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="flex-1 relative h-[272px] lg:h-auto lg:min-h-[500px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={missionImage}
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/85 to-black"></div>
            </div>

            {/* Border */}
            <div className="absolute inset-0 border border-[#434343] pointer-events-none" aria-hidden="true"></div>

            {/* Content */}
            <div
              className="
                relative z-10 h-full flex flex-col items-start justify-end
                px-[30px] pt-[100px] pb-[30px]
                gap-8
                lg:px-[60px] lg:pt-[200px] lg:pb-[60px] lg:gap-8
              "
            >
              <div className="flex flex-col gap-6 lg:gap-8">
                <h2
                  className="
                    text-white font-['Wix_Madefor_Display',_sans-serif]
                    font-[500] text-[24px] leading-[32px]
                    lg:font-[600] lg:text-[36px] lg:leading-[58px]
                  "
                >
                  Mission
                </h2>

                <p
                  className="
                    text-white font-['Wix_Madefor_Display',_sans-serif]
                    font-[500] text-[14px] leading-[16px]
                    lg:font-normal lg:text-[16px] lg:leading-[22px]
                  "
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 5,
                    overflow: 'hidden',
                  }}
                >
                  Our mission is to help organizations identify and reduce risks before they become threats. We deliver certified expertise aligned with ISO/IEC 27001, NIST, PCI DSS, PDPA, and GDPR, providing clear reporting and practical guidance to strengthen security and ensure compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}