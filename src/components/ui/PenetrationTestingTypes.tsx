"use client";

import { useRef, MouseEvent } from "react";
import Image from "next/image";

export default function PenetrationTestingTypes() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const sectionBg = `${base}/assets/bg/penetrationtesting-bg2.png`;
  const items = [
    { title: "Web Application\nPenetration Testing", bg: `${base}/assets/penetration/type-card1.png`, ico: `${base}/assets/penetration/type1.png` },
    { title: "Network & Infrastructure\nPenetration Testing", bg: `${base}/assets/penetration/type-card2.png`, ico: `${base}/assets/penetration/type2.png` },
    { title: "Mobile Application Testing", bg: `${base}/assets/penetration/type-card3.png`, ico: `${base}/assets/penetration/type3.png` },
    { title: "Social Engineering &\nRed Teaming", bg: `${base}/assets/penetration/type-card4.png`, ico: `${base}/assets/penetration/type4.png` },
    { title: "Wireless & IoT\nDevice Testing", bg: `${base}/assets/penetration/type-card5.png`, ico: `${base}/assets/penetration/type5.png` },
    { title: "Cloud Security Assessment", bg: `${base}/assets/penetration/type-card6.png`, ico: `${base}/assets/penetration/type6.png` },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = false;
    scrollContainerRef.current.style.cursor = 'grab';
    scrollContainerRef.current.style.userSelect = 'auto';
  };

  const handleMouseUp = () => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = false;
    scrollContainerRef.current.style.cursor = 'grab';
    scrollContainerRef.current.style.userSelect = 'auto';
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Multiply for faster scroll
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <section aria-labelledby="pt-types" className="relative text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[calc(100%+400px)] hidden sm:block">
        <Image src={sectionBg} alt="" fill className="object-cover object-[center_100%] -translate-y-4 md:-translate-y-8" />
      </div>
      <div className="mx-auto w-full px-[24px] pt-0 pb-[50px] flex flex-col items-start gap-[40px] sm:w-[1440px] sm:px-[120px] sm:py-[100px]">
        <h2
          id="pt-types"
          className="font-['Wix_Madefor_Display',_sans-serif] not-italic text-white font-medium text-[24px] leading-[32px] sm:font-semibold sm:text-[32px] sm:leading-[42px] lg:text-[36px] lg:leading-[50px] mb-6"
        >
          <span className="hidden sm:inline">What types of Penetration<br />Testing services do we offer?</span>
          <span className="block sm:hidden">What types of Penetration</span>
          <span className="block sm:hidden">Testing services do we offer?</span>
        </h2>

        {/* Draggable scrollable cards */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto h-[210px] sm:h-[280px] lg:h-[300px] scrollbar-hide cursor-grab active:cursor-grabbing w-screen relative left-0 right-0 -mr-[24px] sm:-mr-[calc(100vw-100%)]"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-4 sm:gap-6 h-full pr-[24px] sm:pr-[120px]">
            {items.map((it, i) => (
              <div key={i} className="shrink-0 w-[342px] sm:w-[400px] lg:w-[420px] pointer-events-none">
                <Card title={it.title} bg={it.bg} icon={it.ico} />
              </div>
            ))}
            {/* Spacer div to allow last card to scroll fully into view */}
            <div className="shrink-0 w-[24px] sm:w-[120px] lg:w-[170px]"></div>
          </div>
        </div>
      </div>
    </section>
  );

  function Card({ title, bg, icon }: { title: string; bg: string; icon: string }) {
    return (
      <div className="relative h-[193px] sm:h-[280px] lg:h-[300px] rounded-2xl border border-white/20 overflow-hidden bg-black/40 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        {/* Background */}
        <Image src={bg} alt="" fill className="object-cover opacity-100" />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.85)_100%)]" />

        {/* Content */}
        <div className="relative h-full w-full px-[38px] py-[40px] flex flex-col items-center justify-center text-center gap-[44px] sm:gap-[37px] sm:px-6 sm:py-8">
          <Image src={icon} alt="" width={80} height={80} className="opacity-100 shrink-0 block" />
          <p className="text-base sm:text-lg lg:text-xl font-medium text-white tracking-[0.2px] whitespace-pre-line leading-tight text-center flex justify-center items-start h-[52px] sm:h-[60px] lg:h-[68px]">
            {title}
          </p>
        </div>
      </div>
    );
  }
}
