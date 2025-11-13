import Link from "next/link"

export default function PenetrationTestingIntro() {
  return (
    <section aria-labelledby="pt-intro" className="text-white">
      <div className="container-site py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: Headline + CTA */}
          <div>
            <h2
              id="pt-intro"
              className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[36px] leading-[50px] mb-6"
            >
              Penetration Testing services
              <br />
              by cybersecurity experts.
            </h2>
            <Link
              href="#contact"
              className="inline-flex items-center bg-[#3eff51] text-black font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base px-6 py-3 rounded-[41px] hover:bg-[#35e047] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Right: Description */}
          <div className="text-gray-300 max-w-xl">
            <p className="leading-relaxed">
              Our penetration testing engagements provide clear, prioritized findings and remediation steps. We focus on real business risk, what can be exploited, what the impact would be, and how to close the gap efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
