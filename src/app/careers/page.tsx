import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { positions } from "./positions";

type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  team: string;
};

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const bgHeroDesktop = `${base}/assets/careers/careers-bg.png`;
const bgHeroMobile = `${base}/assets/careers/careers-bg-mo.png`;
const icoLocation = `${base}/assets/careers/location-ico.png`;
const icoClock = `${base}/assets/careers/clock-ico.png`;
const icoWork = `${base}/assets/careers/work-ico.png`;

const jobs: Job[] = positions.map((p) => ({
  slug: p.slug,
  title: p.title,
  location: p.location,
  type: p.type,
  team: p.team,
}));

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

function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className="block rounded-lg sm:rounded-xl border border-white/15 bg-black/40 px-4 py-4 sm:px-5 sm:py-5 transition-colors hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3eff51]"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate font-['Wix_Madefor_Display',_sans-serif] text-lg sm:text-xl text-white">{job.title}</h3>
          <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-x-6">
            <Badge src={icoLocation} alt="Location" label={job.location} />
            <Badge src={icoClock} alt="Type" label={job.type} />
            <Badge src={icoWork} alt="Team" label={job.team} />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-white/80"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

export default function Careers() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero + Jobs with shared background */}
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
          <div
            className="flex h-[524px] flex-shrink-0 flex-col items-center justify-center gap-10 px-6 self-stretch"
          >
            <div className="flex w-full max-w-[390px] flex-col items-center justify-center gap-10">
              <h1 className="text-center font-['Wix_Madefor_Display',_sans-serif] text-[32px] leading-[40px] font-semibold sm:text-5xl sm:leading-[56px]">
                Careers
              </h1>
              <p className="text-center text-white/80 text-[16px] leading-[22px] font-['Wix_Madefor_Display',_sans-serif] font-normal sm:text-base sm:leading-6">
                <span className="block sm:inline">
                  Join&nbsp;the&nbsp;team&nbsp;shaping
                </span>
                <span className="block sm:inline">
                  {" "}tomorrow's&nbsp;digital&nbsp;world.
                </span>
              </p>
            </div>
          </div>

          {/* Jobs list */}
          <main>
            <div className="flex flex-col items-center self-stretch gap-5 px-5 pt-[50px] pb-[100px]">
              <div className="w-full max-w-5xl">
                {jobs.map((job) => (
                  <JobCard key={job.title} job={job} />
                ))}
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
          <div className="flex h-[524px] flex-shrink-0 flex-col items-center justify-center gap-10 px-[120px]">
            <div className="flex w-[1200px] max-w-full flex-col items-center justify-center gap-10">
              <h1 className="text-center font-['Wix_Madefor_Display',_sans-serif] text-[32px] leading-[40px] font-semibold sm:text-5xl sm:leading-[56px]">
                Careers
              </h1>
              <p className="text-center text-white/80 text-[16px] leading-[22px] font-['Wix_Madefor_Display',_sans-serif] font-normal sm:text-base sm:leading-6">
                <span className="block sm:inline">
                  Join&nbsp;the&nbsp;team&nbsp;shaping
                </span>
                <span className="block sm:inline">
                  {" "}tomorrow's&nbsp;digital&nbsp;world.
                </span>
              </p>
            </div>
          </div>

          {/* Jobs list */}
          <main>
            <div className="mx-auto max-w-5xl space-y-3 pb-10 sm:space-y-4 sm:pb-14">
              {jobs.map((job) => (
                <JobCard key={job.title} job={job} />
              ))}
            </div>
          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
}