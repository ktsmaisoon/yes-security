import Image from "next/image"

// Existing logo assets
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const logoSingha = `${base}/assets/Who-trusts-us/525c5603d27fe296e84e043d0f2cdfbfff2419c9.png`
const logoAgoda = `${base}/assets/Who-trusts-us/999c4b477e947c5e2701e31ec65610d12169d79b.png`
const logoLazada = `${base}/assets/Who-trusts-us/10de95f44cf42d5b0fa0e176262c04dbb608ba46.png`
const logoPTT = `${base}/assets/Who-trusts-us/299b8fc05496254cacd490d985d1b164f17b6dac.png`
const logoLandRover = `${base}/assets/Who-trusts-us/29b4d53bdb940a1c9139daad2369767217a29183.png`
const logoGaysorn = `${base}/assets/Who-trusts-us/b4fe507fe4fd448d5a5d5cbe84115ca4a683f93e.png`
const logoItaltai = `${base}/assets/Who-trusts-us/4dddf07aca6747c84a75d7994d39aeff424083f9.png`

export default function TrustedBy() {
  const logos = [
    logoSingha,
    logoAgoda,
    logoPTT,
    logoLazada,
    logoLandRover,
    logoGaysorn,
    logoItaltai,
  ]

  return (
    <section aria-labelledby="trusted-title" className="text-white">
      <div className="container-site pt-6 sm:pt-8 pb-10">
        <h2 id="trusted-title" className="text-left font-semibold text-xl sm:text-2xl lg:text-[28px] mb-8">
          Trusted by customers worldwide
        </h2>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-12 items-center">
          {logos.map((src, i) => (
            <li key={i} className="relative h-8 sm:h-10 lg:h-12 grayscale opacity-80">
              <Image src={src} alt="" fill className="object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
