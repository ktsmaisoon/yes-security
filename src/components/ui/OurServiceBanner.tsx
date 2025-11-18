export default function OurServiceBanner() {
  return (
    <section
      className="full-bleed relative overflow-visible bg-[#00000000] pt-24 pb-[60px] lg:py-32"
      aria-label="Our Services banner"
    >
      <div className="container-site relative z-[10]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-white text-center font-['Wix_Madefor_Display',_sans-serif] font-medium text-[32px] leading-[40px] lg:font-semibold lg:text-[64px] lg:leading-[77px]">
            Our Services
          </h1>
          <p
            className="mt-4 text-white text-center font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal lg:text-[20px] lg:leading-[26px] lg:font-medium"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical" as const,
              WebkitLineClamp: 4,
            }}
          >
            {/* Mobile: keep 4 lines */}
            <span className="inline lg:hidden">
              From penetration testing to incident-<br />
              readiness exercises, our services are <br />
              delivered by certified professionals and <br />
              tailored to your business context.
            </span>
            {/* Desktop: 2 lines */}
            <span className="hidden lg:inline">
              From penetration testing to incident-readiness exercises, our services are delivered by certified professionals and tailored to your business context.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
