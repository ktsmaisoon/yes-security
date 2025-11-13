import Image from "next/image"

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const icon = `${base}/assets/penetration-testing%20/ico1.svg`
const rightImage = `${base}/assets/penetration-testing%20/section3img.png`

export default function PenetrationTestingWhatIs() {
  const items = [
    { title: "Network", icon },
    { title: "Web Application", icon },
    { title: "Infrastructure", icon },
  ]

  return (
    <section aria-labelledby="pt-what" className="text-white">
      <div className="container-site py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Title / Description / Icons */}
          <div>
            <h2 id="pt-what" className="font-['Wix_Madefor_Display',_sans-serif] font-semibold text-[32px] leading-[42px] sm:text-[36px] sm:leading-[50px] mb-4">
              What is Penetration Testing?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
              A controlled security assessment that simulates attacks against your network, web applications, and infrastructure to identify vulnerabilities before they are used against you.
            </p>
            <ul className="grid grid-cols-3 gap-6 max-w-xl" role="list">
              {items.map((it, i) => (
                <li key={i} className="flex flex-col items-center text-center gap-2">
                  <span className="relative h-10 w-10 sm:h-12 sm:w-12">
                    <Image src={it.icon} alt="" fill className="object-contain" />
                  </span>
                  <span className="text-sm text-white/90">{it.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Illustration */}
          <div className="relative w-full aspect-[16/11]">
            <Image src={rightImage} alt="Penetration testing illustration" fill className="object-contain" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
