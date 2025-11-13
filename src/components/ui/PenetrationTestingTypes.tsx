"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PenetrationTestingTypes() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const items = [
    { title: "Web Application Penetration Testing", bg: `${base}/assets/penetration-testing%20/type-bg1.png`, ico: `${base}/assets/penetration-testing%20/type-ico1.svg` },
    { title: "Network & Infrastructure Penetration Testing", bg: `${base}/assets/penetration-testing%20/type-bg2.png`, ico: `${base}/assets/penetration-testing%20/type-ico2.svg` },
    { title: "Mobile Application Testing", bg: `${base}/assets/penetration-testing%20/type-bg3.png`, ico: `${base}/assets/penetration-testing%20/type-ico3.svg` },
    { title: "Social Engineering & Red Teaming", bg: `${base}/assets/penetration-testing%20/type-bg4.png`, ico: `${base}/assets/penetration-testing%20/type-ico4.svg` },
    { title: "Wireless & IoT Device Testing", bg: `${base}/assets/penetration-testing%20/type-bg5.png`, ico: `${base}/assets/penetration-testing%20/type-ico5.svg` },
    { title: "Cloud Security Assessmentz", bg: `${base}/assets/penetration-testing%20/type-bg6.png`, ico: `${base}/assets/penetration-testing%20/type-ico6.svg` },
  ];

  // refs สำหรับเลื่อน
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // ควบคุม index ปัจจุบัน + สถานะ pause เมื่อโฮเวอร์
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto slide ทุก 4 วิ
  useEffect(() => {
    if (paused) return;
    const el = containerRef.current;
    const list = listRef.current;
    if (!el || !list) return;

    const id = setInterval(() => {
      const children = Array.from(list.children) as HTMLElement[];
      if (children.length === 0) return;

      const next = (index + 1) % children.length;
      const target = children[next];
      // ระยะที่จะเลื่อนไป คือ offsetLeft ของ li เป้าหมาย
      el.scrollTo({ left: target.offsetLeft - (list.offsetLeft || 0), behavior: "smooth" });
      setIndex(next);
    }, 4000);

    return () => clearInterval(id);
  }, [index, paused]);

  // รีคัลิบรต index เมื่อรีไซส์ (กัน snap เพี้ยน)
  useEffect(() => {
    const onResize = () => {
      // หลังรีไซส์ ให้เลื่อนไปยังไอเท็ม index ปัจจุบันอีกรอบ
      const el = containerRef.current;
      const list = listRef.current;
      if (!el || !list) return;
      const children = Array.from(list.children) as HTMLElement[];
      const target = children[index];
      if (target) el.scrollTo({ left: target.offsetLeft - (list.offsetLeft || 0) });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  return (
    <section aria-labelledby="pt-types" className="text-white">
      <div className="container-site py-12 lg:py-16">
        <h2
          id="pt-types"
          className="font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[28px] leading-[38px] sm:text-[32px] sm:leading-[42px] lg:text-[36px] lg:leading-[50px] mb-6"
        >
          What types of Penetration
          <br className="hidden sm:block" />
          Testing services do we offer?
        </h2>

        {/* Slider */}
        <div className="relative -mx-4 sm:mx-0">
          <div
            ref={containerRef}
            className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-4 sm:px-0 no-scrollbar scroll-smooth"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <ul
              ref={listRef}
              className="grid auto-cols-[80%] sm:auto-cols-[48%] lg:auto-cols-[360px] grid-flow-col gap-4 sm:gap-6"
              role="list"
              // อัปเดต index เมื่อผู้ใช้สกรอลล์เอง (ให้ autoslide ต่อจากตำแหน่งที่อยู่)
              onScroll={() => {
                const el = containerRef.current;
                const list = listRef.current;
                if (!el || !list) return;
                const children = Array.from(list.children) as HTMLElement[];
                // หาไอเท็มที่อยู่ใกล้ซ้ายสุดที่สุด
                let nearest = 0;
                let min = Infinity;
                children.forEach((child, i) => {
                  const dist = Math.abs(child.offsetLeft - (list.offsetLeft || 0) - el.scrollLeft);
                  if (dist < min) { min = dist; nearest = i; }
                });
                setIndex(nearest);
              }}
            >
              {items.map((it, i) => (
                <li key={i} className="snap-start">
                  <Card title={it.title} bg={it.bg} icon={it.ico} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  function Card({ title, bg, icon }: { title: string; bg: string; icon: string }) {
    return (
      <div className="relative h-[260px] sm:h-[280px] lg:h-[300px] rounded-2xl border border-white/20 overflow-hidden bg-black/40 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        {/* Background */}
        <Image src={bg} alt="" fill className="object-cover" />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.85)_100%)]" />

        {/* Content */}
        <div className="relative h-full w-full px-6 py-8 flex flex-col items-center justify-center text-center gap-[37px]">
          <Image src={icon} alt="" width={80} height={80} />
          <p className="text-base sm:text-lg lg:text-xl font-medium text-white tracking-[0.2px]">
            {title}
          </p>
        </div>
      </div>
    );
  }
}
