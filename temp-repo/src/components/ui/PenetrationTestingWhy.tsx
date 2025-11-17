export default function PenetrationTestingWhy() {
  const points = [
    "Identify vulnerabilities before hackers do",
    "Reduce potential business disruption and financial loss",
    "Build confidence with management, customers, and partners",
    "Demonstrate compliance with ISO/IEC 27001, PDPA, NIST, PCI DSS, and OWASP",
  ]

  return (
    <section aria-labelledby="pt-why" className="text-white">
      <div className="container-site py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: Heading + Paragraph */}
          <div>
            <h2
              id="pt-why"
              className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[36px] leading-[50px] mb-4"
            >
              Why should your organization
              <br />
              conduct Penetration Testing?
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-xl">
              Penetration testing is more than just a “test”—it provides your organization with deep insights into your security posture and delivers tactical data essential for strengthening your IT infrastructure.
            </p>
          </div>

          {/* Right: Points with green bars */}
          <ul className="flex flex-col gap-6" role="list">
            {points.map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 inline-block w-[6px] h-8 sm:h-10 lg:h-12 bg-[#3eff51] rounded-full" aria-hidden="true" />
                <p className="leading-relaxed text-white/90">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
