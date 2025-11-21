import Link from "next/link"

export default function PenetrationTestingIntro() {
  return (
    <section aria-labelledby="pt-intro" className="text-white">
      <div className="mx-auto w-full sm:w-[1440px] sm:h-[368px] px-[24px] py-[50px] sm:px-[120px] sm:py-[100px] grid grid-cols-1 sm:grid-cols-2 items-start justify-between gap-[32px] sm:gap-[42px]">
        {/* Heading */}
        <div className="flex flex-col items-start gap-6 order-1 sm:order-none sm:col-start-1 sm:row-start-1">
          <h2
            id="pt-intro"
            className="font-['Wix_Madefor_Display',_sans-serif] not-italic text-white font-medium text-[24px] leading-[32px] sm:font-semibold sm:text-[36px] sm:leading-[50px]"
          >
            Penetration Testing services
            <br />
            by cybersecurity experts.
          </h2>
        </div>

        {/* Paragraph */}
        <div className="w-full sm:w-[538px] text-white mt-0 sm:mt-[8px] order-2 sm:order-none sm:col-start-2 sm:row-start-1">
          <p className="font-['Wix_Madefor_Display',_sans-serif] text-[14px] leading-[16px] font-medium sm:text-[16px] sm:leading-[22px] sm:font-normal">
            Our penetration testing engagements provide clear, prioritized findings and remediation steps. We focus on real business risk: what can be exploited, what the impact would be, and how to close the gap efficiently.
          </p>
        </div>

        {/* CTA button (bottom on mobile, below heading on desktop) */}
        <div className="order-3 sm:order-none sm:col-start-1 sm:row-start-2">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-[10px] px-[18px] py-[7px] bg-[#3eff51] text-[#000000] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base rounded-[41px]
             border-2 border-transparent hover:bg-[#000000] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300
             focus:outline-none"
            aria-label="Contact us"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
