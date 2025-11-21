import Image from "next/image";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import Link from "next/link";

export default function ResourceCenterCTA() {
  return (
    <section aria-labelledby="rc-cta" className="text-white pb-[-20] sm:pb-16 lg:pb-12">
      {/* Mobile CTA with dedicated background image */}
      <div className="block sm:hidden w-full flex justify-center relative">
        <div className="relative w-full max-w-[390px] h-[600px] z-10 top-[-500px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={`${base}/assets/resource-center/resource-center-bg5.png`}
              alt="Resource Center CTA Mobile BG"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content: เลื่อนขึ้นด้วย absolute */}
          <div className="absolute top-[200px] left-0 w-full px-6 flex flex-col items-center justify-start text-center z-20">
            <h2
              id="rc-cta"
              className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-medium text-[32px] leading-[40px] drop-shadow-[0_6px_28px_rgba(0,0,0,0.6)]"
            >
              Protect your
              <br />
              <span className="inline-block whitespace-nowrap">
                invaluable data here
              </span>
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] border border-white text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-sm px-[18px] py-[14px] hover:bg-white hover:text-[#000648] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#000648]"
              >
                Free Consultation
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] bg-[#3eff51] text-[#000000] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-sm px-[18px] py-[14px] border-2 border-transparent hover:bg-[#000000] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 focus:outline-none"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop / tablet CTA (unchanged layout) */}
      <div className="hidden sm:flex w-full justify-center">
        <div className="w-full max-w-[390px] px-6 pt-[60px] pb-[120px] sm:max-w-none sm:px-[120px] sm:pt-10 sm:pb-16 lg:px-0 lg:pt-0 lg:pb-0 flex flex-col items-center gap-10">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
            {/* Background */}
            <div className="relative h-[420px] sm:h-[480px] lg:min-h-[150px] lg:h-auto">
              <Image
                src={`${base}/assets/resource-center/resource-center-bg6.png`}
                alt="Protect your data"
                fill
                className="object-cover lg:object-[center_60%]"
                priority
              />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 text-center">
                  <h2
                    id="rc-cta"
                    className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-medium text-[32px] leading-[40px] sm:text-[36px] sm:leading-[46px] lg:text-[44px] lg:leading-[54px] drop-shadow-[0_6px_28px_rgba(0,0,0,0.6)]"
                  >
                    Protect your
                    <br className="block sm:hidden" />
                    <span className="hidden sm:inline"> </span>
                    <span className="inline-block whitespace-nowrap sm:whitespace-normal">
                      invaluable data here
                    </span>
                  </h2>
                  <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] border border-white text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-sm px-[18px] py-[14px] hover:bg-white hover:text-[#000648] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#000648]"
                    >
                      Free Consultation
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] bg-[#3eff51] text-[#000000] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-sm px-[18px] py-[14px]
             border-2 border-transparent hover:bg-[#000000] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 focus:outline-none"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* soft vignette edges */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
