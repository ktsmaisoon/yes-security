import Image from "next/image"

// Assets (exported from Figma)

// Service type cards (use placeholders from Figma export if needed)
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const card01 = `${base}/assets/Penetration-Testing/78c4ee0377a8c71ab100a462746ddb35d2e5261e.png`
const card02 = `${base}/assets/Penetration-Testing/b9852d3e4aec4e7271743a01f78d07d5254b166d.png`
const card03 = `${base}/assets/Penetration-Testing/97c5791955bd412df42bed43fde18361480ce56e.png`
const card04 = `${base}/assets/Penetration-Testing/a64150711082b0dd4cacab9d8013544098fd4dba.png`

// Feature icons (sample subset)
const icNetwork = `${base}/assets/Penetration-Testing/8eb6be81896f9957ad1905119f35740df7d4d77c.svg`
const icPhishing = `${base}/assets/Penetration-Testing/2bcfea0b811cba1080bdb3f4e38624e345e2c15f.svg`
const icDatabase = `${base}/assets/Penetration-Testing/73c6b384cb6d1dcb29f02a8de4c150041cebe9c4.svg`
const icShield = `${base}/assets/Penetration-Testing/558166a68a991b05965a05fdbe814dfce59c6939.svg`

export default function PenetrationTesting() {
  return (
    <div className="bg-black text-white">

      

      {/* Why conduct */}
      <section className="container-site py-10 sm:py-12" aria-labelledby="why-pen-test">
        <h2 id="why-pen-test" className="font-semibold text-2xl sm:text-3xl mb-4">Why should your organization conduct Penetration Testing?</h2>
        <ul className="grid gap-4 sm:grid-cols-2" role="list">
          {[
            "Identify exploitable vulnerabilities before attackers do",
            "Validate effectiveness of security controls",
            "Meet compliance requirements and audit readiness",
            "Receive prioritized remediation guidance",
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-[#3eff51]" aria-hidden/>
              <p className="text-gray-300">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Types of services */}
      <section className="container-site py-10 sm:py-12 lg:py-16" aria-labelledby="types-title">
        <h2 id="types-title" className="font-semibold text-2xl sm:text-3xl mb-6">What types of Penetration Testing services we offer?</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[card01, card02, card03, card04].map((src, i) => (
            <article key={i} className="relative rounded-lg overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] relative">
                <Image src={src} alt="Service card" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">Service {i + 1}</h3>
                <p className="text-gray-400 text-sm">Short description of this penetration test offering.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Key features grid */}
      <section className="container-site py-10 sm:py-12" aria-labelledby="features-title">
        <h2 id="features-title" className="font-semibold text-2xl sm:text-3xl mb-6">Key Features of Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { title: "Expert testers", icon: icShield },
            { title: "Clear reporting", icon: icDatabase },
            { title: "Actionable guidance", icon: icPhishing },
            { title: "Continuous support", icon: icNetwork },
            { title: "Compliance ready", icon: icShield },
            { title: "Scalable scope", icon: icDatabase },
            { title: "Modern techniques", icon: icPhishing },
            { title: "Real-world scenarios", icon: icNetwork },
          ].map((f, i) => (
            <div key={i} className="rounded-lg border border-white/10 p-4 bg-white/5">
              <div className="relative h-10 w-10 mb-3">
                <Image src={f.icon} alt="" fill className="object-contain" />
              </div>
              <h3 className="font-medium">{f.title}</h3>
              <p className="text-gray-400 text-sm">Brief explanation for the feature.</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect panel */}
      <section className="container-site py-10 sm:py-12" aria-labelledby="expect-title">
        <h2 id="expect-title" className="font-semibold text-2xl sm:text-3xl mb-4">What You Can Expect from Partnering with Us</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Rapid engagement & transparent scope",
            "Non-intrusive testing with continuous updates",
            "Remediation guidance & retesting support",
            "Board-ready deliverables & audit alignment",
          ].map((text, i) => (
            <div key={i} className="rounded-[14px] border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="container-site py-10 sm:py-12" aria-labelledby="faq-title">
        <h2 id="faq-title" className="font-semibold text-2xl sm:text-3xl mb-6">FAQs</h2>
        <div className="space-y-3">
          {[
            { q: "How long does a typical engagement take?", a: "Most projects take 1–3 weeks depending on scope." },
            { q: "Do you provide remediation guidance?", a: "Yes, we provide clear, prioritized recommendations and optional retesting." },
            { q: "Can you meet compliance requirements?", a: "We align with recognized frameworks and help you demonstrate audit readiness." },
          ].map((item, i) => (
            <details key={i} className="group rounded-[14px] border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer list-none font-medium">
                {item.q}
              </summary>
              <p className="mt-2 text-gray-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact form (static UI) */}
      <section id="contact" className="container-site py-12 sm:py-16 lg:py-20" aria-labelledby="contact-title">
        <h2 id="contact-title" className="font-semibold text-2xl sm:text-3xl mb-6">Contact Form</h2>
        <form className="grid gap-4 sm:grid-cols-2" aria-label="Contact form">
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Name" className="bg-white/90 text-black rounded-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3eff51]" />
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" className="bg-white/90 text-black rounded-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3eff51]" />
          <label className="sr-only" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" placeholder="Phone" className="bg-white/90 text-black rounded-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3eff51]" />
          <label className="sr-only" htmlFor="system">Type of system</label>
          <input id="system" name="system" placeholder="Type of system to be tested" className="bg-white/90 text-black rounded-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3eff51]" />
          <div className="sm:col-span-2">
            <label className="sr-only" htmlFor="message">Your message</label>
            <textarea id="message" name="message" placeholder="Your message" className="bg-white/90 text-black rounded-2xl px-4 py-3 border border-gray-300 w-full h-32 focus:outline-none focus:ring-2 focus:ring-[#3eff51]" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="bg-[#3eff51] text-black font-medium rounded-full px-6 py-3 w-full sm:w-auto">
              Submit your request
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
