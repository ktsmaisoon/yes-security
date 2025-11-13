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
// Mobile-first background (as requested)
const bgHero = `${base}/assets/careers/careers-bg-mo.png`;
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
            <h1 className="text-center font-['Wix_Madefor_Display',_sans-serif] text-3xl font-semibold sm:text-5xl">
              Careers
            </h1>
            <p className="mt-3 text-center text-white/80 text-sm sm:text-base">
              Join the team shaping tomorrow's digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs list */}
      <main>
        <div className="container-site">
          <div className="mx-auto max-w-5xl space-y-3 py-6 sm:space-y-4 sm:py-10">
            {jobs.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}