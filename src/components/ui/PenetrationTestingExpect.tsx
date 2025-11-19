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
      <div className="mx-auto w-[1440px] px-0 py-[100px] flex flex-col items-center gap-[40px]">
        <div
          className="mx-auto w-[1200px] px-[60px] py-0 flex items-center gap-[15px] rounded-[20px] border border-[#393939] overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 2.4%, rgba(0, 0, 0, 0.60) 32.9%), url(${base}/assets/penetration/PenetrationTestingWhy-bg.png)`,
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Content */}
          <div className="w-full py-[42px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left heading */}
            <div className="self-stretch">
              <h2
                id="pt-expect"
                className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[48px] leading-[58px] max-w-[14ch] text-white"
              >
                What You Can
                <br className="hidden sm:block" />
                Expect from
                <br className="hidden sm:block" />
                Partnering with Us
              </h2>
            </div>

            {/* Right pills list */}
            <div className="justify-self-center self-start flex w-full max-w-[607px] flex-col items-center gap-[15px] flex-shrink-0">
              <ul className="flex flex-col gap-[15px] self-stretch" role="list">
                {items.map((text, i) => (
                  <li key={i}>
                    <div className="flex h-[104px] px-12 justify-start items-center gap-[10px] w-full rounded-[96px] border border-[#5E5E5E] bg-[rgba(0,0,0,0.90)] text-white text-left">
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
