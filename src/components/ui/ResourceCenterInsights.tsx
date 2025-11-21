"use client";

import Image from "next/image";
import { useState, useRef } from "react";
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
  const tabsScrollRef = useRef<HTMLDivElement | null>(null);

  const scrollTabsRight = () => {
    if (tabsScrollRef.current) {
      tabsScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const pathname = usePathname();
  const isThaiRoute = pathname.startsWith('/th');
  const basePrefix = isThaiRoute ? '/th' : '';

  return (
    <section aria-labelledby="rc-insights" className="text-white">
      <div className="w-full flex justify-center">
        <div
          className="
          w-full max-w-[1440px]
          flex flex-col items-center gap-8
          px-6 pb-[100px]
          sm:px-[120px]
          lg:px-[40px]
        "
        >
          {/* Tabs */}
          <div className="w-full relative lg:w-[1200px] lg:flex lg:flex-col lg:items-center lg:gap-8 lg:pb-[42px]">
            <div
              ref={tabsScrollRef}
              className="w-full overflow-x-auto"
            >
              <div
                className="flex min-w-max w-[1200px] h-[95px] items-center bg-[#2F2F2F] border-b border-white/20 rounded-none px-2"
              >
                {TABS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActive(t)}
                    className={`
                      flex-1 flex-shrink-0 self-stretch
                      flex items-center justify-center gap-[27px]
                      px-[17px] py-[19px]
                      text-sm sm:text-base transition text-center lg:text-center h-full border-b
                      ${active === t
                        ? "text-white bg-[#343434] border-b-[1px] border-[#3EFF51]"
                        : "text-white/70 hover:text-white bg-transparent hover:bg-white/5 border-b-[1px] border-white"}
                    `}
                  >
                    <span className="w-full text-center">{t}</span>
                  </button>
                ))}
              </div>
              {/* Mobile scroll arrow */}
              <button
                type="button"
                onClick={scrollTabsRight}
                className="lg:hidden absolute right-1 top-[28px] flex h-[38px] w-[38px] items-center justify-center"
                aria-label="Scroll tabs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <circle cx="19" cy="19" r="19" fill="black" fillOpacity="0.82" />
                  <path
                    d="M12 9L26.2929 18.7634"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 29L26.1269 18.8182"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Grid */}
            <h2 id="rc-insights" className="sr-only">
              Resource Center Items
            </h2>
            <p className="mt-6 lg:mt-[74px] self-stretch text-[20px] leading-[26px] font-medium text-[#ABABAB] font-['Wix_Madefor_Display',_sans-serif]">
              All 50 of 100
            </p>
            <ul
              role="list"
              className="
            mt-6
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
            gap-4 sm:gap-5 lg:gap-8
            self-stretch
          "
            >
              {items.map((it) => (
                <li key={it.id}>
                  <FlipCard
                    title={it.title}
                    image={it.img}
                    href={`${basePrefix}/resource-center/${slugify(it.title)}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlipCard({ title, image, href }: { title: string; image: string; href: string }) {
  return (
    <div className="group perspective">
      {/* Mobile: static card layout */}
      <div className="block lg:hidden rounded-[18px] border border-white bg-black/70 overflow-hidden">
        {/* Header area */}
        <div className="flex flex-col justify-end items-start gap-[27px] px-[28px] py-[29px] self-stretch">
          <h3 className="w-[265px] self-stretch text-[20px] leading-[26px] font-medium text-white font-['Wix_Madefor_Display',_sans-serif]">
            {title}
          </h3>
        </div>
        {/* Image area */}
        <div className="flex h-[300px] flex-shrink-0 self-stretch pt-[216px] pr-[1px] pl-[156px] items-center justify-end relative overflow-hidden">
          <Image src={image} alt="" fill className="object-cover" />
          <div className="absolute bottom-4 right-4">
            <Link href={href} className="flex h-[36px] items-center justify-center gap-[10px] px-[18px] py-[14px] rounded-[41px] border border-white bg-black text-white text-xs font-['Wix_Madefor_Display',_sans-serif] font-medium shadow-md">
              Read more →
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: flip card layout (entire card clickable) */}
      <div className="hidden lg:block">
        <Link
          href={href}
          className="block"
        >
          {/* Outer card wrapper: border, radius, clipping */}
          <div className="relative w-[385px] h-[456px] rounded-[13px] border border-[#F0F0F0] bg-black/70 overflow-hidden">
            {/* Inner 3D container: handles flip */}
            <div className="relative w-full h-full flex flex-col items-center [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
              {/* Front: Image card */}
              <div
                className="absolute inset-0 rounded-[13px] bg-black [backface-visibility:hidden] flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 min-h-[56px] sm:min-h-[64px] px-5 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-4">
                  <h3 className="text-sm sm:text-base font-semibold leading-6 max-w-[28ch]">
                    {title}
                  </h3>
                  <span className="shrink-0 inline-flex w-[21px] h-[44px] items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="44"
                      viewBox="0 0 23 44"
                      fill="none"
                    >
                      <path
                        d="M6.5 12L20.7929 21.7634"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6.5 32L20.6269 21.8182"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="relative mt-[67px] h-[300px] flex-shrink-0 self-stretch overflow-hidden">
                  <Image src={image} alt="" fill className="object-cover" />
                </div>
              </div>

              {/* Back: Text card */}
              <div
                className="absolute inset-0 rounded-[18px] bg-black [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-sm sm:text-base font-semibold leading-6 max-w-[28ch]">
                    {title}
                  </h3>
                  <span className="shrink-0 inline-flex w-[21px] h-[44px] items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="44"
                      viewBox="0 0 23 44"
                      fill="none"
                    >
                      <path
                        d="M6.5 12L20.7929 21.7634"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6.5 32L20.6269 21.8182"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-white/80 leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <style jsx>{`
        .perspective { perspective: 1200px; }
      `}</style>
    </div>
  );
}
