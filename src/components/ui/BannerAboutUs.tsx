import { getImage } from '@/utils/get-image'

interface BannerAboutUsProps {
  className?: string
}

export default function BannerAboutUs({ className = "" }: BannerAboutUsProps) {
  return (
    <section 
      className={`full-bleed relative text-white overflow-hidden min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] ${className}`}
      style={{ backgroundImage: `url(${getImage('/assets/bg/aboutus-bg1.png')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      aria-label="About us banner"
    >
      

      <div className="container-site relative z-10 py-20 flex items-center min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
            About us
          </h1>
          
          <p className="text-white/90 font-['Wix_Madefor_Display',_sans-serif] font-normal text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
            We safeguard organizations by identifying risk early and building security that lasts.
          </p>
        </div>
      </div>
    </section>
  )
}