import Image from "next/image"
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export default function PenetrationTestingBanner() {
  return (
    <section
      className="full-bleed relative overflow-hidden bg-transparent pt-[120px] pb-[60px] sm:py-24 lg:py-28"
      aria-label="Penetration Testing banner"
    >
      {/* Optional left gradient to improve text contrast */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]"
      />

      {/* Content */}
      <div className="relative z-[2] mx-auto w-full sm:w-[1440px] px-6 sm:px-[120px] flex flex-col items-start sm:items-center gap-[40px]">
        <div className="w-full text-left">
          <p className="text-[#00FF59] font-['Wix_Madefor_Display',_sans-serif] font-normal text-[16px] leading-[22px] sm:font-medium sm:text-[32px] sm:leading-[40px]">
            Lorem Ipsum is simply dummy
          </p>
          <h1 className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] font-['Wix_Madefor_Display',_sans-serif] font-medium text-[32px] leading-[40px] sm:font-semibold sm:text-[64px] sm:leading-[77px]">
            Penetration Testing
          </h1>
          <p className="mt-[32px] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal sm:text-lg lg:text-[20px] sm:leading-relaxed">
            Independent testing designed to reveal how attackers could exploit
            <br />
            your systems and how to stop them.
          </p>
        </div>
      </div>
    </section>
  )
}
