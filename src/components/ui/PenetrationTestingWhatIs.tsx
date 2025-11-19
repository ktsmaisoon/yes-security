import Image from "next/image"

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const networkIcon = `${base}/assets/penetration/network.png`
const webIcon = `${base}/assets/penetration/web.png`
const infraIcon = `${base}/assets/penetration/infra.png`
const rightImage = `${base}/assets/penetration/what-is.png`

export default function PenetrationTestingWhatIs() {
    const items = [
        { title: "Network", icon: networkIcon },
        { title: "Web Application", icon: webIcon },
        { title: "Infrastructure", icon: infraIcon },
    ]

    return (
        <section aria-labelledby="pt-what" className="text-white">
            <div className="mx-auto w-full sm:w-[1440px] px-[24px] pt-[56px] pb-0 sm:px-[120px] sm:py-[56px] flex flex-col sm:flex-row items-start gap-[42px]">
                {/* Left: Title / Description / Icons */}
                <div className="flex-1">
                    <h2 id="pt-what" className="font-['Wix_Madefor_Display',_sans-serif] text-white font-medium text-[24px] leading-[32px] sm:font-semibold sm:text-[36px] sm:leading-[50px] mb-4">
                        What is Penetration Testing?
                    </h2>
                    <p className="text-white sm:text-gray-300 font-['Wix_Madefor_Display',_sans-serif] text-[14px] leading-[16px] font-medium sm:text-[16px] sm:leading-relaxed sm:font-normal mb-8 max-w-[641px] sm:max-w-[780px]">
                        {/* Desktop: exactly 2 lines */}
                        <span className="hidden sm:block">A controlled security assessment that simulates attacks against your network, web</span>
                        <span className="hidden sm:block">applications, and infrastructure to identify vulnerabilities before they are used against you.</span>
                        {/* Mobile: exactly 4 lines */}
                        <span className="block sm:hidden whitespace-nowrap">A controlled security assessment that simulates</span>
                        <span className="block sm:hidden whitespace-nowrap">attacks against your network, web applications, and</span>
                        <span className="block sm:hidden whitespace-nowrap">infrastructure to identify vulnerabilities before they</span>
                        <span className="block sm:hidden whitespace-nowrap">are used against you.</span>
                    </p>
                    <ul className="flex py-[18px] items-center gap-[50px] flex-[1_0_0] self-stretch" role="list">
                        {items.map((it, i) => (
                            <li key={i} className="group flex flex-col items-center text-center gap-2 cursor-pointer">
                                <span className="relative h-10 w-10 sm:h-12 sm:w-12">
                                    <Image
                                        src={it.icon}
                                        alt=""
                                        fill
                                        className="object-contain transition-opacity duration-200 z-0 group-hover:opacity-0"
                                    />
                                    <div
                                        className="absolute inset-0 z-10 bg-[#00FF59] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                        style={{
                                            WebkitMaskImage: `url(${it.icon})`,
                                            maskImage: `url(${it.icon})`,
                                            WebkitMaskRepeat: 'no-repeat',
                                            maskRepeat: 'no-repeat',
                                            WebkitMaskSize: 'contain',
                                            maskSize: 'contain',
                                            WebkitMaskPosition: 'center',
                                            maskPosition: 'center',
                                        }}
                                    />
                                </span>
                                <span className="text-sm text-white/90 transition-colors duration-200 group-hover:text-[#00FF59]">{it.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Right: Illustration on black background (centered) */}
                <div className="relative w-full h-[257px] sm:w-[467px] sm:h-[360px] flex-shrink-0 bg-black flex items-center justify-center self-stretch sm:self-auto">
                    <Image
                        src={rightImage}
                        alt="Penetration testing illustration"
                        width={517}
                        height={410}
                        className="object-contain relative top-[50px]"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
