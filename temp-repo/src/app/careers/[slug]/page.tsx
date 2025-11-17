import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { positions } from "../positions";

export function generateStaticParams() {
  return positions.map((p) => ({ slug: p.slug }));
}

export default function SiteCareer({ params }: { params: { slug: string } }) {
  const pos = positions.find((p) => p.slug === params.slug);

  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const bgHero = `${base}/assets/careers/sitecareers-bg.png`;
  const icoLocation = `${base}/assets/careers/location-ico.png`;
  const icoClock = `${base}/assets/careers/clock-ico.png`;
  const icoWork = `${base}/assets/careers/work-ico.png`;
  const icoFolder = `${base}/assets/careers/Black-folder.png`;

  if (!pos) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="container-site py-16">
          <h1 className="text-2xl">Position not found</h1>
          <p className="mt-4">
            The requested position is unavailable. Go back to {" "}
            <Link href="/careers" className="text-[#3eff51] underline">Careers</Link>.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  function Badge({ src, alt, label }: { src: string; alt: string; label: string }) {
    return (
      <span className="inline-flex items-center gap-2 text-sm text-white/80">
        <span className="relative h-4 w-4">
          <Image src={src} alt={alt} fill className="object-contain" />
        </span>
        {label}
      </span>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section
        className="full-bleed"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-site">
          <div className="py-16 sm:py-24 lg:py-32">
            <h1 className="text-center font-['Wix_Madefor_Display',_sans-serif] text-3xl sm:text-5xl font-semibold">
              {pos.title}
            </h1>
            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
              <Badge src={icoLocation} alt="Location" label={pos.location} />
              <Badge src={icoClock} alt="Type" label={pos.type} />
              <Badge src={icoWork} alt="Team" label={pos.team} />
            </div>

            {/* Breadcrumb */}
            <nav className="mt-8 text-sm text-white/70" aria-label="Breadcrumb">
              <div className="flex items-center gap-2 justify-center">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>»</span>
                <Link href="/careers" className="hover:text-white">Careers</Link>
                <span>»</span>
                <span className="text-white">{pos.title}</span>
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* Content */}
      <main>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 lg:py-14 max-w-6xl mx-auto">
            {/* Left: description */}
            <div className="lg:col-span-7 space-y-8">
              <section>
                <h2 className="text-xl font-semibold">Job Summary</h2>
                <p className="mt-3 text-white/80 leading-relaxed">{pos.summary}</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">Responsibilities</h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-white/80">
                  {pos.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold">Skill Requirements</h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-white/80">
                  {pos.skills.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-white p-5 text-slate-900 shadow-md">
                <h3 className="text-lg font-semibold">Take the next step in your career</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Fill out the application form below to apply for exciting opportunities. We’re thrilled to learn more about you and your qualifications.
                </p>
                <form className="mt-5 space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name *"
                    className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-slate-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-slate-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number *"
                    className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-slate-400"
                  />
                  <input
                    type="text"
                    name="salary"
                    placeholder="Expect Salary *"
                    className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-slate-400"
                  />

                  {/* File upload */}
                  <label className="flex items-center justify-between gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm cursor-pointer">
                    <div className="flex items-center gap-3 text-slate-600">
                      <span className="relative h-6 w-6">
                        <Image src={icoFolder} alt="Upload" fill className="object-contain" />
                      </span>
                      <span>Drag and Drop or Choose File</span>
                    </div>
                    <input type="file" name="resume" className="hidden" />
                  </label>

                  <button
                    type="button"
                    className="mt-2 w-full rounded-full bg-slate-900 px-5 py-2 text-white hover:bg-slate-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
