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
      className={`full-bleed relative bg-black py-16 lg:py-[100px] ${className}`}
      aria-label="Mission and Vision"
    >
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:h-auto">
          {/* Vision Card */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-[500px]">
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
            </div>
            
            {/* Border */}
            <div className="absolute inset-0 border border-[#434343] pointer-events-none" aria-hidden="true"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 lg:p-[60px] lg:pt-[200px] lg:pb-[60px]">
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-tight lg:leading-[58px]">
                  Vision
                </h2>
                
                <p className="text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px]">
                  Our vision is to build a trusted digital environment where organizations can operate with confidence. Cybersecurity should be a foundation for growth and trust, not a barrier to innovation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission Card */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-[500px]">
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
            </div>
            
            {/* Border */}
            <div className="absolute inset-0 border border-[#434343] pointer-events-none" aria-hidden="true"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 lg:p-[60px] lg:pt-[200px] lg:pb-[60px]">
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-tight lg:leading-[58px]">
                  Mission
                </h2>
                
                <p className="text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px]">
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