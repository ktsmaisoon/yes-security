import Image from "next/image";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import Link from "next/link";

export default function ResourceCenterCTA() {
  return (
    <section aria-labelledby="rc-cta" className="text-white">
      <div className="container-site py-10 lg:py-14">
        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
          {/* Background */}
          <div className="relative h-[420px] sm:h-[480px] lg:h-[520px]">
            <Image
              src={`${base}/assets/resource-center/resource-center-bg3.png`}
              alt="Protect your data"
              fill
              className="object-cover"
              priority
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 text-center">
                <h2
                  id="rc-cta"
                  className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[28px] leading-[38px] sm:text-[36px] sm:leading-[46px] lg:text-[44px] lg:leading-[54px] drop-shadow-[0_6px_28px_rgba(0,0,0,0.6)]"
                >
                  Protect your invaluable data here
                </h2>
                <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
                  <Link
                    href="#contact"
                    className="rounded-full border border-white/30 bg-black/40 px-4 sm:px-5 py-2 text-sm sm:text-base hover:bg-black/55 transition"
                  >
                    Free Consultation
                  </Link>
                  <Link
                    href="#contact"
                    className="rounded-full bg-[#35EF5B] text-black font-medium px-4 sm:px-5 py-2 text-sm sm:text-base hover:brightness-95 transition"
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
    </section>
  );
}
