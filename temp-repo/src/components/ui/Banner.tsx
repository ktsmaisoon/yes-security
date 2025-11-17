import Image from 'next/image'

// Asset imports (prefix with basePath for GitHub Pages)
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const backgroundImage1 = `${base}/assets/Banner/01b1e850982e29cd57a459f8b18cbc9652b8f927.png`
const backgroundImage2 = `${base}/assets/Banner/9229f0566310ebeb7f006af38f88e68696cd2f52.png`
const vectorBg = `${base}/assets/Banner/aba8a6a03178162fb09947a4fb6e223afdbd131a.svg`
const decorativeGroup1 = `${base}/assets/Banner/3e0acaea366a59431a467ef40965d0c35976425d.svg`
const decorativeGroup2 = `${base}/assets/Banner/ccfaba2ef6c19a5de8668a6d75d411b6aaed9088.svg`
const circleDecor1 = `${base}/assets/Banner/b8dbc65ae577f3d5947d01a69cf5e42e568c5abb.svg`
const circleDecor2 = `${base}/assets/Banner/5f315adbe1bbde3e240d4790b52f60667eb4ea82.svg`

interface BannerProps {
  className?: string
}

export default function Banner({ className = "" }: BannerProps) {
  return (
    <section
      className={`full-bleed relative min-h-screen bg-gradient-to-b from-[#000c39] via-[#000648] to-gray-900 overflow-hidden ${className}`}
      aria-label="Hero section"
    >
      {/* Background Image Layer (desktop only) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${base}/assets/hero/banner-bg.png)`,
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      />
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Background */}
        <div
          className="absolute left-0 top-0 w-[348px] h-[801px] opacity-100 md:opacity-40 transform -translate-y-4"
          style={{
            backgroundImage: `url(${backgroundImage1})`,
            backgroundSize: '344.84% 100%',
            backgroundPosition: '0.03% 0%',
            backgroundRepeat: 'no-repeat'
          }}
          aria-hidden="true"
        />

        {/* Right Background (hidden on mobile) */}
        <div
          className="hidden md:block absolute right-0 top-0 w-[300px] h-[797px] opacity-40 transform rotate-[-16.17deg] translate-x-64 -translate-y-24"
          style={{
            backgroundImage: `url(${circleDecor1})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right top',
            backgroundRepeat: 'no-repeat'
          }}
          aria-hidden="true"
        />

        {/* Vector Background (hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[994px] h-[675px] opacity-20">
          <Image
            src={vectorBg}
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        {/* Decorative Groups - Hidden on smaller screens */}
        <div className="hidden xl:block absolute right-0 top-0 w-[579px] h-[714px] transform rotate-[12.711deg] translate-x-32 -translate-y-96 opacity-30">
          <Image
            src={decorativeGroup1}
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        <div className="hidden xl:block absolute left-0 top-0 w-[635px] h-[839px] transform rotate-[7.58deg] -translate-x-16 -translate-y-[1100px] opacity-30">
          <Image
            src={decorativeGroup2}
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        {/* Bottom Decorative Image (hidden on mobile) */}
        <div
          className="hidden md:block absolute bottom-0 left-0 right-0 h-[296px] opacity-60"
          style={{
            backgroundImage: `url(${backgroundImage2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          aria-hidden="true"
        />

        <div className="hidden lg:block absolute top-1/2 left-4 w-[351px] h-[351px] transform -translate-y-1/2 opacity-20">
          <Image
            src={circleDecor2}
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container-site relative z-10 flex flex-col items-center justify-center min-h-screen py-16 lg:py-[120px] lg:px-[120px]">
        {/* Main Content */}
        <div className="text-center max-w-6xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold mb-6">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight lg:leading-[77px]">
              Yes Cybersecurity
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight lg:leading-[77px]">
              Protect your business, end to end.
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium mb-12 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-[20px] leading-relaxed lg:leading-[26px] mb-2">
              A Professional Cybersecurity Agency
            </p>
            <p className="text-lg sm:text-xl lg:text-[20px] leading-relaxed lg:leading-[26px]">
              Precision-driven solutions you can trust every step of the way.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
            {/* Free Consultation Button */}
            <button
              className="w-[173px] h-[36px] border border-white text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base rounded-[41px] hover:bg-white hover:text-[#000648] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#000648] flex items-center justify-center"
              aria-label="Get free consultation"
            >
              Free Consultation
            </button>

            {/* Contact Us Button */}
            <a
              href="/contact-us"
              className="w-[122px] h-[36px] bg-[#3eff51] text-[#000000] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base rounded-[41px] 
             border-2 border-transparent hover:bg-[#000000] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 
             focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-[#000000] inline-flex items-center justify-center text-center"
              aria-label="Contact us"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}