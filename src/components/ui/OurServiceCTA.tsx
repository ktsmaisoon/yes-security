import Image from 'next/image'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export default function OurServiceCTA() {
  return (
    <section
      className="full-bleed relative overflow-visible bg-[#00000000] pt-20 pb-[120px] sm:py-24 lg:py-28"
      aria-label="Call to action"
    >
      {/* Background image for CTA */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:flex items-center justify-center">
        <div className="relative w-[1440px] max-w-full h-[1045px]">
          <Image
            src={`${base}/assets/bg/ourservice-bg2.png`}
            alt="Our services CTA background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center center" }}
            className="opacity-100"
          />
        </div>
      </div>

      {/* Mobile CTA background shared with lower OurService */}
      <div className="pointer-events-none absolute inset-x-0 top-[-300px] h-[900px] z-0 flex md:hidden items-center justify-center">
        <div className="relative w-[390px] max-w-full h-full">
          <Image
            src={`${base}/assets/bg/OurServicesCTA-Mobile-bg.png`}
            alt="Our services CTA mobile background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "top center" }}
            className="opacity-100"
          />
        </div>
      </div>

      {/* Glow background ellipse */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[-1] flex items-center justify-center"
      >
        <div className="relative w-[1200px] max-w-[90vw] h-[420px] rounded-full">
          {/* Soft glow using layered radial gradients */}
          <div className="absolute inset-0 rounded-full opacity-80"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.14) 0%, rgba(0,0,0,0.0) 60%), radial-gradient(60% 55% at 50% 50%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.0) 100%)"
            }}
          />
          {/* Outer drop/particle edge */}
          <div className="absolute -inset-6 rounded-full blur-[12px] opacity-70"
            style={{
              boxShadow:
                "0 0 80px 20px rgba(0,0,0,0.9), 0 0 150px 60px rgba(0,0,0,0.7) inset"
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-tight">
            {/* Mobile: existing three-line layout */}
            <span className="block lg:hidden">Ready to take your</span>
            <span className="block lg:hidden">data security</span>
            <span className="block lg:hidden">to the next level?</span>

            {/* Desktop: two-line layout */}
            <span className="hidden lg:inline">Ready to take your data security</span>
            <br className="hidden lg:block" />
            <span className="hidden lg:inline">to the next level?</span>
          </h2>

          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
            <a
              href="/contact-us?topic=consultation"
              className="flex h-[36px] items-center justify-center gap-[10px] px-[18px] py-[14px] rounded-[41px] border border-white text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-[16px] leading-[22px] hover:bg-white hover:text-[#000648] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Free Consultation
            </a>
            <a
              href="/contact-us"
              className="flex h-[36px] items-center justify-center gap-[10px] px-[18px] py-[14px] rounded-[41px] bg-[#3eff51] text-black font-['Wix_Madefor_Display',_sans-serif] font-semibold text-[16px] leading-[22px] border-2 border-transparent hover:bg-black hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 focus:outline-none"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
