import Image from 'next/image'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const visionImage = `${base}/assets/Mission-vision/vision.png`
const missionImage = `${base}/assets/Mission-vision/mission.png`
const visionImageMo = `${base}/assets/Mission-vision/vision-mo.png`
const missionImageMo = `${base}/assets/Mission-vision/mission-mo.png`

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
          <div className="relative w-[342px] h-[274px] lg:w-[600px] lg:h-[416px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              {/* Mobile background image */}
              <Image
                src={visionImageMo}
                alt=""
                fill
                className="object-cover block lg:hidden"
                aria-hidden="true"
              />
              {/* Desktop background image */}
              <Image
                src={visionImage}
                alt=""
                fill
                className="object-cover hidden lg:block"
                aria-hidden="true"
              />
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
          <div className="relative w-[342px] h-[274px] lg:w-[600px] lg:h-[416px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              {/* Mobile background image */}
              <Image
                src={missionImageMo}
                alt=""
                fill
                className="object-cover block lg:hidden"
                aria-hidden="true"
              />
              {/* Desktop background image */}
              <Image
                src={missionImage}
                alt=""
                fill
                className="object-cover hidden lg:block"
                aria-hidden="true"
              />
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