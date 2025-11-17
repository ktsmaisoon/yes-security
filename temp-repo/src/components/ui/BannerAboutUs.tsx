import { getImage } from '@/utils/get-image'

interface BannerAboutUsProps {
  className?: string
}

export default function BannerAboutUs({ className = "" }: BannerAboutUsProps) {
  return (
    <section
      className={`full-bleed relative text-white overflow-hidden min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] ${className}`}
      aria-label="About us banner"
    >


      <div className="container-site relative z-10 py-20 flex items-center min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-[500] text-[32px] leading-[40px] mb-8 lg:text-[64px] lg:leading-[77px] lg:font-[600]">
            About us
          </h1>

          <p className="text-white/90 font-['Wix_Madefor_Display',_sans-serif] font-normal text-[16px] leading-[22px] max-w-3xl mx-auto lg:text-[20px] lg:leading-[26px] lg:font-[500]">
            {/* Mobile: 3 lines */}
            <span className="block lg:hidden">
              We safeguard organizations <br />
              by identifying risk early <br />
              and building security that lasts.
            </span>
            {/* Desktop: 2 lines */}
            <span className="hidden lg:block">
              We safeguard organizations by identifying risk early <br />
              and building security that lasts.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}