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
      <div className="mx-auto w-full px-[24px] py-[50px] flex flex-col items-center gap-[40px] sm:w-[1440px] sm:px-0 sm:py-[100px]">
        <div
          className="mx-auto w-full px-[24px] py-0 flex flex-col justify-center items-start gap-[15px] rounded-[20px] border border-[#393939] overflow-hidden sm:w-[1200px] sm:px-[60px] sm:flex-row sm:items-center"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 2.4%, rgba(0, 0, 0, 0.60) 32.9%), url(${base}/assets/penetration/PenetrationTestingWhy-bg.png) lightgray 50% / cover no-repeat`,
          }}
        >
          {/* Content */}
          <div className="w-full py-[42px] flex flex-col justify-center items-start gap-[15px] sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12 sm:items-start">
            {/* Left heading */}
            <div className="self-stretch">
              <h2
                id="pt-expect"
                className="font-['Wix_Madefor_Display',_sans-serif] not-italic text-white font-medium text-[24px] leading-[32px] sm:font-semibold sm:text-[48px] sm:leading-[58px] sm:max-w-[14ch]"
              >
                What You Can
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Expect{" "}
                <br className="sm:hidden" />
                from{" "}
                <br className="hidden sm:block" />
                Partnering with Us
              </h2>
            </div>

            {/* Right pills list */}
            <div className="justify-self-center self-start flex w-full max-w-[607px] flex-col items-center gap-[15px] flex-shrink-0">
              <ul className="flex flex-col gap-[15px] self-stretch" role="list">
                {items.map((text, i) => (
                  <li key={i}>
                    <div className="flex h-[100px] px-12 justify-start items-center gap-[10px] w-full self-stretch rounded-[96px] border border-[#5E5E5E] bg-[rgba(0,0,0,0.90)] text-white text-left sm:h-[104px] sm:justify-start sm:text-left">
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
