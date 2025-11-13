"use client";
  
  import Image from "next/image";
  import { useState } from "react";
  import { getImage } from '@/utils/get-image';
  import Link from "next/link";
  import { slugify } from "@/utils/slugify";
  import { usePathname } from "next/navigation";

const TABS = ["Insights", "Guides", "Reports", "Training", "Workshops"] as const;

type Tab = typeof TABS[number];

const items = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: [
    "The Top 10 Cybersecurity Threats to Watch in 2025",
    "What Is Zero Trust Security? A Beginner's Guide",
    "How to Secure Your Business from Ransomware Attacks",
    "Understanding Phishing Attacks and How to Prevent Them",
    "Cyber Hygiene 101: Simple Steps for a Safer Digital Life",
    "Why Your Small Business Needs a Cybersecurity Plan",
    "Insider Threats: The Dangers Lurking Within Your Organization",
    "Multi-Factor Authentication: Is It Enough?",
    "Red Team vs Blue Team: Understanding the Battle for Security",
    "The Role of AI in Modern Cybersecurity Defense",
    "Top 5 Security Misconfigurations That Hackers Exploit",
    "Penetration Testing Explained: What, Why, and How",
  ][i],
  img: getImage(`/assets/resource-center/insight-bg${i + 1}.png`),
}));

export default function ResourceCenterInsights() {
  const [active, setActive] = useState<Tab>("Insights");
  const pathname = usePathname();
  const isThaiRoute = pathname.startsWith('/th');
  const basePrefix = isThaiRoute ? '/th' : '';

  return (
    <section aria-labelledby="rc-insights" className="text-white">
      <div className="container-site py-10 lg:py-14">
        {/* Tabs */}
        <div className="w-full overflow-x-auto">
          <div className="inline-flex gap-2 rounded-xl border border-white/15 bg-white/5 px-2 py-2 min-w-max">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`relative rounded-lg px-4 py-2 text-sm sm:text-base transition ${
                  active === t ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {t}
                {active === t && (
                  <span className="absolute left-2 right-2 -bottom-[6px] h-[2px] bg-[#35EF5B]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <h2 id="rc-insights" className="sr-only">Resource Center Items</h2>
        <ul
          role="list"
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {items.map((it) => (
            <li key={it.id}>
              <Link href={`${basePrefix}/resource-center/${slugify(it.title)}`}>
                <FlipCard title={it.title} image={it.img} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FlipCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="group perspective">
      <div
        className="relative h-[260px] sm:h-[280px] rounded-xl border border-white/20 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden rounded-xl [backface-visibility:hidden]">
          <Image src={image} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_55%,rgba(0,0,0,0.6)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between gap-3">
            <p className="text-sm sm:text-base font-medium max-w-[30ch]">{title}</p>
            <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 border border-white/20">›</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl bg-[radial-gradient(90%_120%_at_0%_0%,#0B1328_0%,#020410_50%,#020410_100%)] p-4 sm:p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm sm:text-base font-semibold pr-6">{title}</h3>
              <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 border border-white/20">›</span>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .perspective { perspective: 1200px; }
      `}</style>
    </div>
  );
}
