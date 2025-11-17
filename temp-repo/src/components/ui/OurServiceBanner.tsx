

export default function OurServiceBanner() {
  return (
    <section
      className="full-bleed relative overflow-visible bg-[#00000000] py-24 lg:py-32"
      aria-label="Our Services banner"
    >
      <div className="container-site relative z-[10]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-tight lg:leading-[64px]">
            Our Services
          </h1>
          <p className="mt-6 text-gray-200 font-['Wix_Madefor_Display',_sans-serif] text-base sm:text-lg lg:text-[20px] leading-relaxed">
            From penetration testing to incident-readiness exercises, our services are delivered by certified
            professionals and tailored to your business context.
          </p>
        </div>
      </div>
    </section>
  )
}
