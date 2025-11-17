import Image from "next/image"
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export default function PenetrationTestingExpect() {
  const items = [
    "Executive summary for management",
    "Technical report detailing all verified vulnerabilities",
    "Remediation guidance based on best practices",
    "Test certification for internal reference and audit processes",
  ]

  return (
    <section aria-labelledby="pt-expect" className="text-white">
      <div className="container-site py-12 lg:py-16">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background image */}
          <div className="relative h-[420px] sm:h-[460px] lg:h-[520px]">
            <Image
              src={`${base}/assets/penetration-testing%20/penetrationtesting-bg4.png`}
              alt=""
              fill
              className="object-cover"
              priority
            />

            {/* Content overlay */}
            <div className="absolute inset-0 px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left heading */}
              <h2
                id="pt-expect"
                className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[28px] leading-[38px] sm:text-[32px] sm:leading-[42px] lg:text-[36px] lg:leading-[50px] max-w-[14ch]"
              >
                What You Can
                <br className="hidden sm:block" />
                Expect from
                <br className="hidden sm:block" />
                Partnering with Us
              </h2>

              {/* Right pills list */}
              <ul className="flex flex-col gap-4 lg:gap-5" role="list">
                {items.map((text, i) => (
                  <li key={i} className="">
                    <div className="rounded-full bg-black/55 backdrop-blur-[2px] border border-white/20 px-5 sm:px-6 lg:px-8 py-4 text-sm sm:text-base lg:text-lg leading-6 text-white shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
                      {text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
