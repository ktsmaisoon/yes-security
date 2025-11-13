export default function OurServiceCTA() {
  return (
    <section
      className="full-bleed relative overflow-visible bg-[#00000000] py-20 sm:py-24 lg:py-28"
      aria-label="Call to action"
    >
      {/* Glow background ellipse */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
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
            Ready to take your data security to the next level?
          </h2>

          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
            <a
              href="/contact-us?topic=consultation"
              className="inline-flex items-center rounded-full border border-white/40 bg-transparent px-4 py-2.5 text-sm text-white hover:border-white hover:bg-white/5 transition-colors"
            >
              Free Consultation
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center rounded-full bg-[#3eff51] px-4 py-2.5 text-sm font-semibold text-black hover:bg-[#35e047] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
