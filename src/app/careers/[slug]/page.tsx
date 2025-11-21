import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { positions } from "../positions";

export function generateStaticParams() {
  return positions.map((p) => ({ slug: p.slug }));
}

export default async function SiteCareer({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pos = positions.find((p) => p.slug === slug);

  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const bgHeroDesktop = `${base}/assets/careers/careers-bg.png`;
  const bgHeroMobile = `${base}/assets/careers/careers-bg-mo.png`;
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
      <span className="inline-flex items-center gap-2 text-[13px] leading-[16px] sm:text-[14px] text-white font-medium font-['Wix_Madefor_Display',_sans-serif]">
        <span className="relative h-4 w-4 sm:h-5 sm:w-5">
          <Image src={src} alt={alt} fill className="object-contain" />
        </span>
        {label}
      </span>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero + Content with shared background */}
      {/* Mobile version with mobile background */}
      <section
        className="full-bleed sm:hidden"
        style={{
          backgroundImage: `url(${bgHeroMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-site">
          {/* Hero */}
          <div
            className="flex h-[524px] flex-shrink-0 flex-col justify-center items-center gap-10 px-6 self-stretch"
          >
            <div className="flex w-full max-w-[390px] flex-col items-center justify-center gap-10">
              <h1 className="text-center font-['Wix_Madefor_Display',_sans-serif] text-[32px] leading-[40px] sm:text-5xl sm:leading-[56px] font-semibold">
                {pos.title}
              </h1>
              <div className="flex flex-row items-center justify-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <Badge src={icoLocation} alt="Location" label={pos.location} />
                <Badge src={icoClock} alt="Type" label={pos.type} />
                <Badge src={icoWork} alt="Team" label={pos.team} />
              </div>
            </div>
          </div>

          {/* Content */}
          <main>
            <div className="flex flex-col items-center gap-10 self-stretch px-5 py-[50px]">
              {/* Left: description */}
              <div className="max-w-3xl flex-1 space-y-8">
                <nav className="text-sm text-white/70" aria-label="Breadcrumb">
                  <div className="flex items-center gap-2">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <span>»</span>
                    <Link href="/careers" className="hover:text-white">Careers</Link>
                    <span>»</span>
                    <span className="text-white">{pos.title}</span>
                  </div>
                </nav>

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
              <div className="w-full max-w-md">
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
          </main>
        </div>
      </section>

      {/* Desktop version with original background */}
      <section
        className="full-bleed hidden sm:block"
        style={{
          backgroundImage: `url(${bgHeroDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-site">
          {/* Hero */}
          <div className="flex h-[524px] flex-shrink-0 flex-col items-center justify-center gap-5 px-4 self-stretch sm:px-[120px]">
            <div className="flex w-[1200px] max-w-full flex-col items-center justify-center gap-4">
              <h1 className="text-center font-['Wix_Madefor_Display',_sans-serif] text-[32px] leading-[40px] sm:text-5xl sm:leading-[56px] font-semibold">
                {pos.title}
              </h1>
              <div className="flex flex-row items-center justify-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <Badge src={icoLocation} alt="Location" label={pos.location} />
                <Badge src={icoClock} alt="Type" label={pos.type} />
                <Badge src={icoWork} alt="Team" label={pos.team} />
              </div>
            </div>
          </div>

          {/* Content */}
          <main>
            <div className="flex flex-col items-center gap-10 self-stretch px-5 py-[50px] sm:flex-row sm:items-start sm:justify-center sm:gap-[70px] sm:px-[120px]">
              {/* Left: description */}
              <div className="max-w-3xl flex-1 space-y-8">
                <nav className="text-sm text-white/70" aria-label="Breadcrumb">
                  <div className="flex items-center gap-2">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <span>»</span>
                    <Link href="/careers" className="hover:text-white">Careers</Link>
                    <span>»</span>
                    <span className="text-white">{pos.title}</span>
                  </div>
                </nav>

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
              <div className="w-full max-w-md">
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
          </main>
        </div>
      </section>
      <Footer />
    </div>
  );
}