export default function ResourceCenterBanner() {
  return (
    <section aria-labelledby="rc-banner" className="text-white full-bleed">
      <div className="relative w-full">
        {/* Height of banner */}
        <div className="relative h-[360px] sm:h-[420px] lg:h-[500px]">
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container-site">
              <div className="max-w-xl">
                <h1
                  id="rc-banner"
                  className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[34px] leading-[44px] sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px]"
                >
                  Resource Center
                </h1>
                <p className="mt-4 text-white/90 text-base sm:text-lg max-w-[40ch]">
                  Practical insights to reduce risk, strengthen security, and meet compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
