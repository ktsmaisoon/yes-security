import Image from "next/image"
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export default function PenetrationTestingBanner() {
  return (
    <section
      className="full-bleed relative overflow-visible bg-[#00000000] py-20 sm:py-24 lg:py-28"
      aria-label="Penetration Testing banner"
    >
      {/* Background image anchored to the right, do not squeeze; keep inside section bounds */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src={`${base}/assets/bg/penetrationtesting-bg1.png`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-right select-none"
        />
      </div>

      {/* Optional left gradient to improve text contrast */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]"
      />

      {/* Content */}
      <div className="container-site relative z-[2]">
        <div className="max-w-2xl">
          <p className="mb-3 text-[#3eff51] font-['Wix_Madefor_Display',_sans-serif] text-sm sm:text-base tracking-wide">
            Lorem Ipsum is simply dummy
          </p>
          <h1 className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-tight lg:leading-[64px]">
            Penetration Testing
          </h1>
          <p className="mt-6 text-gray-100/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-['Wix_Madefor_Display',_sans-serif] text-base sm:text-lg lg:text-[20px] leading-relaxed">
            Independent testing designed to reveal how attackers could exploit your systems and how to stop them.
          </p>
        </div>
      </div>
    </section>
  )
}
