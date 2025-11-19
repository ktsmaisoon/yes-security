"use client";

import { useEffect, useRef, useState } from "react";
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

  // refs สำหรับเลื่อน
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);

  // สถานะ pause เมื่อโฮเวอร์
  const [paused, setPaused] = useState(false);

  // Auto-scroll แบบต่อเนื่องตลอดเวลา (marquee)
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let pos = container.clientWidth; // เริ่มนอกจอด้านขวา
    posRef.current = pos;
    let rafId = 0;
    const speed = 1.5; // เร็วขึ้น (px/เฟรม)

    // ตั้งค่าเริ่มต้น เพื่อไม่ให้แทร็กอยู่ที่ตำแหน่ง 0 ชั่วคราว
    track.style.transform = `translateX(${pos}px)`;

    const tick = () => {
      if (!pausedRef.current) {
        pos -= speed;
        const loopWidth = track.scrollWidth / 2; // เนื่องจากเรา duplicate items 2 เท่า
        if (pos <= -loopWidth) {
          // วนกลับไปจุดเริ่มเพื่อให้ต่อเนื่อง
          pos += loopWidth;
        }
        posRef.current = pos;
        track.style.transform = `translateX(${pos}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Sync paused state to ref (เพื่อไม่ให้รีสตาร์ท loop เมื่อ hover)
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // ปรับตำแหน่งเมื่อรีไซส์ โดยคงตำแหน่งเดิมไว้ (ถ้าเกินความกว้างใหม่ค่อย clamp)
  useEffect(() => {
    const onResize = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      const maxStart = container.clientWidth;
      const nextPos = Math.min(posRef.current, maxStart);
      posRef.current = nextPos;
      track.style.transform = `translateX(${nextPos}px)`;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section aria-labelledby="pt-types" className="relative text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[calc(100%+400px)]">
        <Image src={sectionBg} alt="" fill className="object-cover object-[center_100%] -translate-y-4 md:-translate-y-8" />
      </div>
      <div className="mx-auto w-[1440px] px-[120px] py-[100px] flex flex-col items-start gap-[40px]">
        <h2
          id="pt-types"
          className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[28px] leading-[38px] sm:text-[32px] sm:leading-[42px] lg:text-[36px] lg:leading-[50px] mb-6"
        >
          What types of Penetration
          <br className="hidden sm:block" />
          Testing services do we offer?
        </h2>

        {/* Slider - continuous marquee */}
        <div
          ref={containerRef}
          className="relative w-screen -mx-[calc(50vw-50%)] overflow-hidden h-[260px] sm:h-[280px] lg:h-[300px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={trackRef} className="absolute left-0 top-0 flex gap-4 sm:gap-6 will-change-transform">
            {[...items, ...items].map((it, i) => (
              <div key={i} className="shrink-0 w-[80%] sm:w-[48%] lg:w-[360px]">
                <Card title={it.title} bg={it.bg} icon={it.ico} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  function Card({ title, bg, icon }: { title: string; bg: string; icon: string }) {
    return (
      <div className="relative h-[260px] sm:h-[280px] lg:h-[300px] rounded-2xl border border-white/20 overflow-hidden bg-black/40 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        {/* Background */}
        <Image src={bg} alt="" fill className="object-cover opacity-100" />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.85)_100%)]" />

        {/* Content */}
        <div className="relative h-full w-full px-6 py-8 flex flex-col items-center justify-center text-center gap-[37px]">
          <Image src={icon} alt="" width={80} height={80} className="opacity-100 shrink-0 block" />
          <p className="text-base sm:text-lg lg:text-xl font-medium text-white tracking-[0.2px] whitespace-pre-line leading-tight text-center flex justify-center items-start h-[52px] sm:h-[60px] lg:h-[68px]">
            {title}
          </p>
        </div>
      </div>
    );
  }
}
