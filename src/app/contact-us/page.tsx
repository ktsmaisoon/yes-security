
"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const SERVICES = [
  "Penetration Testing",
  "Vulnerability Assessment",
  "Red Team Assessment",
  "Source Code Review",
  "Attack Surface Analysis",
  "VA Clinic",
  "Cyber Drill",
];

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  function toggleService(s: string) {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);

    const f = e.currentTarget;
    const body = {
      // ดึงค่าจากฟอร์ม (ต้องมี name ตรงกับ input)
      fullName: (f.elements.namedItem("fullName") as HTMLInputElement).value.trim(),
      email: (f.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (f.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      company: (f.elements.namedItem("company") as HTMLInputElement).value.trim(),
      website: (f.elements.namedItem("website") as HTMLInputElement).value.trim(),
      budget: (f.elements.namedItem("budget") as HTMLInputElement).value.trim(),
      message: (f.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      services: selected,
      // honeypot ป้องกันบอท
      hp: (f.elements.namedItem("hp") as HTMLInputElement)?.value ?? "",
    };

    const r = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    setOk(r.ok);
    setLoading(false);
    if (r.ok) {
      f.reset();
      setSelected([]);
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content with continuous background */}
      <main
        className="flex-1 full-bleed bg-[#000c39] text-white bg-no-repeat bg-contain bg-left-top bg-[url('/assets/bg/Contact-us-mobile-bg.png')] md:bg-cover md:bg-center md:bg-[url('/assets/bg/contactus-bg.png')]"

      >
        {/* Hero Section */}
        <section className="relative flex h-[524px] px-3 sm:px-6 flex-col justify-center items-center gap-[40px] flex-shrink-0 self-stretch md:min-h-[420px] md:px-[120px]">
          <div className="container-site text-center relative z-10 mx-auto flex flex-col items-center">
            <h1 className="text-[32px] leading-[40px] md:text-[64px] md:leading-[77px] font-semibold font-['Wix_Madefor_Display',_sans-serif] text-white text-center mb-[20px] md:mb-[40px]">
              Contact <span className="text-white">Us</span>
            </h1>
            <p className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] font-normal md:font-medium text-white text-center font-['Wix_Madefor_Display',_sans-serif] max-w-3xl mx-auto">
              Get in touch with our cybersecurity experts.
              <br className="block" />
              <span className="hidden">&nbsp;</span>
              We’re here to help protect your digital assets.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section (Design-matched) */}
        <section className="relative overflow-hidden py-16 lg:py-24 isolate">
          <div aria-hidden className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0,transparent_64px,#000_64px,#000_100%)]" />
          <div className="container-site relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[115.85px] lg:gap-14 items-start">
              {/* Left: Offices & contacts */}
              <aside aria-labelledby="offices-title" className="space-y-10">
                <h2 id="offices-title" className="sr-only">Offices and contacts</h2>
                <div className="flex flex-col items-start gap-[32.088px]">
                  {/* Bangkok office */}
                  <div className="flex w-[350.467px] flex-col items-start gap-[32.088px]">
                    <div className="flex flex-col items-start gap-[16.669px] self-stretch">
                      <div className="flex items-center gap-3">
                        {/* Location Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          aria-hidden="true"
                          className="shrink-0"
                        >
                          <g clipPath="url(#clip0_bkk)">
                            <path
                              d="M14 0C9.08004 0 4.97656 3.9632 4.97656 9.02344C4.97656 10.9485 5.55505 12.6652 6.66526 14.2738L13.3095 24.6414C13.6318 25.1454 14.3689 25.1444 14.6905 24.6414L21.3636 14.2385C22.4499 12.7028 23.0234 10.8996 23.0234 9.02344C23.0234 4.04791 18.9755 0 14 0ZM14 13.125C11.7385 13.125 9.89844 11.2849 9.89844 9.02344C9.89844 6.76195 11.7385 4.92188 14 4.92188C16.2615 4.92188 18.1016 6.76195 18.1016 9.02344C18.1016 11.2849 16.2615 13.125 14 13.125Z"
                              fill="white"
                            />
                            <path
                              d="M20.4129 18.8506L16.2823 25.3085C15.2131 26.9755 12.781 26.97 11.7169 25.3101L7.57958 18.8523C3.93936 19.6939 1.69531 21.2357 1.69531 23.0782C1.69531 26.2753 8.03513 28.0001 14 28.0001C19.9649 28.0001 26.3047 26.2753 26.3047 23.0782C26.3047 21.2344 24.0575 19.6918 20.4129 18.8506Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_bkk">
                              <rect width="28" height="28" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <p className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-[18px] tracking-[0.12em] uppercase">
                          BANGKOK
                        </p>
                      </div>

                      <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">
                        17th Floor, Wittayakit Building, Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330
                        <br />
                        (BTS SIAM STATION)
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-[14px] self-stretch pt-2 font-['Wix_Madefor_Display',_sans-serif]">
                      <a
                        href="#"
                        className="inline-block text-white text-sm leading-[20px] border-b-2 border-[#3eff51] pb-1"
                      >
                        Google Maps
                      </a>
                      <p className="text-white">
                        LINE ID: <a className="hover:underline" href="#">@yeswebdesign</a>
                      </p>
                      <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">Tel: 096-879-5445</p>
                      <p className="text-white">
                        Email: {" "}
                        <a className="hover:underline" href="mailto:info@yeswebdesignstudio.com">
                          info@yeswebdesignstudio.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Chiangmai office */}
                  <div className="flex w-[350.467px] flex-col items-start gap-[32.088px]">
                    <div className="flex flex-col items-start gap-[17.086px] self-stretch">
                      <div className="flex items-center gap-3">
                        {/* Location Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          aria-hidden="true"
                          className="shrink-0"
                        >
                          <g clipPath="url(#clip0_cnx)">
                            <path
                              d="M14 0C9.08004 0 4.97656 3.9632 4.97656 9.02344C4.97656 10.9485 5.55505 12.6652 6.66526 14.2738L13.3095 24.6414C13.6318 25.1454 14.3689 25.1444 14.6905 24.6414L21.3636 14.2385C22.4499 12.7028 23.0234 10.8996 23.0234 9.02344C23.0234 4.04791 18.9755 0 14 0ZM14 13.125C11.7385 13.125 9.89844 11.2849 9.89844 9.02344C9.89844 6.76195 11.7385 4.92188 14 4.92188C16.2615 4.92188 18.1016 6.76195 18.1016 9.02344C18.1016 11.2849 16.2615 13.125 14 13.125Z"
                              fill="white"
                            />
                            <path
                              d="M20.4129 18.8506L16.2823 25.3085C15.2131 26.9755 12.781 26.97 11.7169 25.3101L7.57958 18.8523C3.93936 19.6939 1.69531 21.2357 1.69531 23.0782C1.69531 26.2753 8.03513 28.0001 14 28.0001C19.9649 28.0001 26.3047 26.2753 26.3047 23.0782C26.3047 21.2344 24.0575 19.6918 20.4129 18.8506Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_cnx">
                              <rect width="28" height="28" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <p className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-[18px] tracking-[0.12em] uppercase">
                          CHIANGMAI
                        </p>
                      </div>

                      <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">
                        123/456 Moo 4, Chiang Mai - Doi Saket Rd
                        <br />
                        Luang Nuea, Doi Saket, Chiang Mai 50220
                        <br />
                        (Near Doi Saket Intersection)
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-[14px] self-stretch pt-2 font-['Wix_Madefor_Display',_sans-serif]">
                      <a
                        href="#"
                        className="inline-block text-white text-sm leading-[20px] border-b-2 border-[#3eff51] pb-1"
                      >
                        Google Maps
                      </a>
                      <p className="text-white">
                        LINE ID: <a className="hover:underline" href="#">@yeswebdesign</a>
                      </p>
                      <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal">Tel: 096-879-5445</p>
                      <p className="text-white">
                        Email: {" "}
                        <a className="hover:underline" href="mailto:info@yeswebdesignstudio.com">
                          info@yeswebdesignstudio.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social icons */}
                <div className="pt-6 flex flex-col items-start gap-[32.088px]">
                  <p className="font-['Wix_Madefor_Display',_sans-serif] text-[24px] leading-[36px] font-medium tracking-[-0.528px] text-white">
                    Follow us
                  </p>
                  <div className="flex items-center gap-3">
                    {/* Facebook */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.7442 0.539062C20.9534 0.575684 23.8527 1.36442 26.4419 2.90526C29.0002 4.41534 31.1284 6.55651 32.6228 9.12402C34.1543 11.7288 34.9383 14.6456 34.9748 17.8744C34.8838 22.2921 33.4904 26.0653 30.7946 29.1939C28.0988 32.3225 24.6461 34.2581 21.0718 35.0001V22.6141H24.451L25.2152 17.7467H20.0984V14.5587C20.07 13.8978 20.279 13.2486 20.6876 12.7284C21.0968 12.2067 21.8174 11.9326 22.8494 11.9059H25.9392V7.64216C25.8949 7.6279 25.4742 7.57149 24.6772 7.47294C23.7733 7.36718 22.8643 7.31069 21.9542 7.30373C19.8945 7.31323 18.2655 7.89424 17.0673 9.04676C15.869 10.199 15.2569 11.8659 15.231 14.0477V17.7467H11.3371V22.6141H15.231V35.0001C10.8424 34.2581 7.38964 32.3225 4.6938 29.1939C1.99796 26.0653 0.604636 22.2921 0.513672 17.8744C0.550066 14.6455 1.33403 11.7287 2.86557 9.12402C4.36005 6.55652 6.48822 4.41535 9.04657 2.90526C11.6357 1.36471 14.5349 0.57598 17.7442 0.539062Z"
                        fill="white"
                      />
                    </svg>

                    {/* LINE */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <g clipPath="url(#clip0_42005_3102)">
                        <path d="M14.733 18.2491C14.7868 18.3022 14.8294 18.3658 14.8582 18.436C14.8871 18.5061 14.9016 18.5815 14.9008 18.6574C14.9011 18.7329 14.8866 18.8078 14.8582 18.8776C14.8297 18.9474 14.7879 19.0109 14.7351 19.0644C14.6823 19.1179 14.6195 19.1603 14.5504 19.1893C14.4813 19.2182 14.4073 19.2332 14.3324 19.2332H12.0568C11.9056 19.2326 11.7609 19.1718 11.654 19.0639C11.5471 18.9561 11.4869 18.81 11.4863 18.6574V14.3192C11.4858 14.2432 11.5004 14.168 11.5293 14.0978C11.5581 14.0277 11.6006 13.9641 11.6542 13.9108C11.7339 13.8302 11.8354 13.7754 11.946 13.7532C12.0567 13.731 12.1713 13.7425 12.2754 13.7863C12.3795 13.8301 12.4683 13.9041 12.5306 13.999C12.5929 14.0939 12.6258 14.2053 12.6252 14.3192V18.0817H14.3324C14.4069 18.0811 14.4807 18.0957 14.5495 18.1244C14.6183 18.1532 14.6807 18.1956 14.733 18.2491Z" fill="white" />
                        <path d="M16.1352 13.7451H15.8864C15.6406 13.7451 15.4414 13.9462 15.4414 14.1943V18.7816C15.4414 19.0297 15.6406 19.2308 15.8864 19.2308H16.1352C16.381 19.2308 16.5802 19.0297 16.5802 18.7816V14.1943C16.5802 13.9462 16.381 13.7451 16.1352 13.7451Z" fill="white" />
                        <path d="M21.8697 14.3189V18.6327C21.8698 18.7878 21.8102 18.937 21.7034 19.0486C21.5965 19.1602 21.4509 19.2255 21.2973 19.2308C21.1533 19.2285 21.0154 19.1717 20.9109 19.0716C20.8907 19.0553 20.1261 18.0508 19.4767 17.2056C18.9913 16.5748 18.5705 16.0236 18.5705 16.0236V18.6551C18.5709 18.7667 18.5391 18.8759 18.4789 18.9694C18.4187 19.063 18.3328 19.1368 18.2317 19.1819C18.1307 19.2269 18.0187 19.2413 17.9097 19.2231C17.8006 19.205 17.6992 19.1552 17.6178 19.0798C17.5591 19.0261 17.5121 18.9605 17.4801 18.8874C17.448 18.8142 17.4315 18.7351 17.4317 18.6551V14.3434C17.4298 14.1918 17.4856 14.0453 17.5876 13.934C17.6896 13.8227 17.83 13.7551 17.9799 13.7452C18.0647 13.7438 18.1488 13.7614 18.2261 13.7967C18.3034 13.832 18.372 13.8841 18.4269 13.9493C18.4512 13.9779 19.6264 15.5213 20.2879 16.3992C20.5509 16.7422 20.7329 16.9831 20.7329 16.9831V14.3291C20.734 14.1773 20.7942 14.032 20.9006 13.9246C21.0069 13.8173 21.1509 13.7565 21.3013 13.7554C21.4503 13.7554 21.5934 13.8144 21.6997 13.9198C21.806 14.0252 21.8671 14.1685 21.8697 14.3189Z" fill="white" />
                        <path d="M23.8676 14.9027V15.9235H25.5728C25.7235 15.9235 25.8681 15.9839 25.9747 16.0915C26.0813 16.1991 26.1412 16.345 26.1412 16.4972C26.1412 16.6493 26.0813 16.7952 25.9747 16.9028C25.8681 17.0104 25.7235 17.0708 25.5728 17.0708H23.8676V18.0916H25.5728C25.6504 18.0869 25.7282 18.0983 25.8013 18.1251C25.8744 18.1519 25.9413 18.1935 25.9979 18.2473C26.0545 18.3011 26.0996 18.366 26.1305 18.4381C26.1613 18.5102 26.1772 18.5878 26.1772 18.6663C26.1772 18.7448 26.1613 18.8225 26.1305 18.8945C26.0996 18.9666 26.0545 19.0315 25.9979 19.0853C25.9413 19.1392 25.8744 19.1807 25.8013 19.2075C25.7282 19.2343 25.6504 19.2457 25.5728 19.241H23.2911C23.1401 19.2405 22.9956 19.1796 22.889 19.0717C22.7825 18.9638 22.7227 18.8176 22.7227 18.6653V14.3188C22.7232 14.1669 22.7832 14.0213 22.8897 13.9138C22.9962 13.8063 23.1405 13.7457 23.2911 13.7452H25.5667C25.6444 13.7405 25.7221 13.7519 25.7952 13.7787C25.8683 13.8054 25.9352 13.847 25.9918 13.9008C26.0485 13.9546 26.0936 14.0196 26.1244 14.0916C26.1552 14.1637 26.1711 14.2414 26.1711 14.3199C26.1711 14.3983 26.1552 14.476 26.1244 14.5481C26.0936 14.6201 26.0485 14.6851 25.9918 14.7389C25.9352 14.7927 25.8683 14.8343 25.7952 14.8611C25.7221 14.8878 25.6444 14.8992 25.5667 14.8946L23.8676 14.9027Z" fill="white" />
                        <path d="M30.7448 0H4.85279C3.56523 0 2.33041 0.516218 1.41997 1.43509C0.509528 2.35397 -0.00195312 3.60023 -0.00195312 4.89971L-0.00195312 31.0315C-0.00195312 32.331 0.509528 33.5773 1.41997 34.4961C2.33041 35.415 3.56523 35.9312 4.85279 35.9312H30.7448C32.0323 35.9312 33.2672 35.415 34.1776 34.4961C35.088 33.5773 35.5995 32.331 35.5995 31.0315V4.89971C35.5995 3.60023 35.088 2.35397 34.1776 1.43509C33.2672 0.516218 32.0323 0 30.7448 0ZM28.9242 16.7407C28.9084 16.9688 28.8794 17.1958 28.8373 17.4205C28.6965 18.2809 28.4084 19.1099 27.9857 19.8704C27.7834 20.2338 26.8104 21.6139 26.5131 21.9772C24.8685 23.9759 22.1134 26.2829 17.5095 28.5265C17.4124 28.5739 17.3045 28.5943 17.197 28.5855C17.0895 28.5768 16.9862 28.5393 16.8978 28.477C16.8094 28.4146 16.7391 28.3295 16.6941 28.2306C16.6491 28.1316 16.631 28.0224 16.6417 27.9141L16.8744 25.8051C16.892 25.6438 16.8454 25.482 16.7449 25.3553C16.6444 25.2286 16.4981 25.1474 16.3383 25.1294C14.8067 24.9747 13.3147 24.5454 11.9326 23.8616C8.77705 22.2876 6.67332 19.4764 6.67332 16.2732C6.67332 11.3408 11.6535 7.34957 17.7988 7.34957C20.8856 7.34957 23.6771 8.37034 25.6877 9.98929C27.571 11.5102 28.7766 13.5742 28.906 15.8649C28.9276 16.1563 28.9337 16.4486 28.9242 16.7407Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_42005_3102">
                          <rect width="35.6015" height="35.6" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    {/* Google */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      aria-hidden="true"
                    >
                      <g clipPath="url(#clip0_google)">
                        <path
                          d="M17.8007 0C7.96917 0 0 7.97028 0 17.8007C0 27.6312 7.96917 35.6015 17.8007 35.6015C27.6312 35.6015 35.6015 27.6312 35.6015 17.8007C35.6015 7.97028 27.6323 0 17.8007 0ZM17.9932 27.3642C12.7097 27.3642 8.42976 23.0842 8.42976 17.8007C8.42976 12.5173 12.7097 8.23729 17.9932 8.23729C20.5754 8.23729 22.7338 9.18852 24.3881 10.7294L21.6924 13.4251V13.4195C20.6889 12.4627 19.415 11.9732 17.9932 11.9732C14.838 11.9732 12.2736 14.6389 12.2736 17.7941C12.2736 20.9492 14.838 23.6216 17.9932 23.6216C20.8558 23.6216 22.805 21.9839 23.2055 19.7366H17.9932V16.0062H26.9881C27.1072 16.6448 27.1728 17.3157 27.1728 18.0143C27.1728 23.4792 23.5148 27.3642 17.9932 27.3642Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_google">
                          <rect width="35.6015" height="35.6015" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    {/* X */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      aria-hidden="true"
                    >
                      <g clipPath="url(#clip0_x)">
                        <path d="M18.991 17.1928L27.0026 28.6523H23.7146L17.177 19.3014V19.3008L16.2171 17.9281L8.58008 7.00391H11.8681L18.0312 15.8201L18.991 17.1928Z" fill="white" />
                        <path d="M31.7547 0H3.84682C1.72233 0 0 1.72233 0 3.84682V31.7547C0 33.8791 1.72233 35.6015 3.84682 35.6015H31.7547C33.8791 35.6015 35.6015 33.8791 35.6015 31.7547V3.84682C35.6015 1.72233 33.8791 0 31.7547 0ZM22.7078 30.1907L16.092 20.5624L7.80911 30.1907H5.66838L15.1415 19.1795L5.66838 5.39245H12.8937L19.1584 14.5098L27.0017 5.39245H29.1424L20.1092 15.893H20.1086L29.9331 30.1907H22.7078Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_x">
                          <rect width="35.6015" height="35.6015" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    {/* Instagram */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      aria-hidden="true"
                    >
                      <g clipPath="url(#clip0_ig)">
                        <path d="M20.9299 17.8009C20.9299 19.5289 19.5289 20.9299 17.8009 20.9299C16.0729 20.9299 14.6719 19.5289 14.6719 17.8009C14.6719 16.0729 16.0729 14.6719 17.8009 14.6719C19.5289 14.6719 20.9299 16.0729 20.9299 17.8009Z" fill="white" />
                        <path d="M23.0869 8.34375H12.5178C10.2171 8.34375 8.3457 10.2152 8.3457 12.5158V23.085C8.3457 25.3856 10.2171 27.257 12.5178 27.257H23.0869C25.3875 27.257 27.259 25.3856 27.259 23.085V12.5158C27.259 10.2152 25.3875 8.34375 23.0869 8.34375ZM17.8023 23.0155C14.9267 23.0155 12.5873 20.676 12.5873 17.8004C12.5873 14.9248 14.9267 12.5853 17.8023 12.5853C20.678 12.5853 23.0174 14.9248 23.0174 17.8004C23.0174 20.676 20.678 23.0155 17.8023 23.0155ZM23.7823 12.8635C23.2062 12.8635 22.7393 12.3966 22.7393 11.8205C22.7393 11.2444 23.2062 10.7774 23.7823 10.7774C24.3584 10.7774 24.8253 11.2444 24.8253 11.8205C24.8253 12.3966 24.3584 12.8635 23.7823 12.8635Z" fill="white" />
                        <path d="M26.2144 0H9.38711C4.21116 0 0 4.21116 0 9.38711V26.2144C0 31.3903 4.21116 35.6015 9.38711 35.6015H26.2144C31.3903 35.6015 35.6015 31.3903 35.6015 26.2144V9.38711C35.6015 4.21116 31.3903 0 26.2144 0ZM29.3434 23.0853C29.3434 26.536 26.536 29.3434 23.0853 29.3434H12.5161C9.06551 29.3434 6.25807 26.536 6.25807 23.0853V12.5161C6.25807 9.06551 9.06551 6.25807 12.5161 6.25807H23.0853C26.536 6.25807 29.3434 9.06551 29.3434 12.5161V23.0853Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_ig">
                          <rect width="35.6015" height="35.6015" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    {/* Youtube */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <g clipPath="url(#clip0_42005_3121)">
                        <path d="M15.5117 14.2969V20.7956L21.5018 17.5745L15.5117 14.2969Z" fill="white" />
                        <path d="M26.6728 0H8.90037C4.01223 0 0 4.01223 0 8.92862V26.7011C0 31.5892 4.01223 35.6015 8.90037 35.6015H26.6728C31.5892 35.6015 35.6015 31.5892 35.6015 26.6728V8.92862C35.6015 4.01223 31.5892 0 26.6728 0ZM28.8202 18.6766C28.8202 20.5415 28.6507 22.4346 28.6507 22.4346C28.6507 22.4346 28.4529 24.0169 27.8031 24.7232C26.9554 25.6557 26.023 25.6557 25.5992 25.7122C22.4911 25.9382 17.829 25.9665 17.829 25.9665C17.829 25.9665 12.0367 25.8817 10.2566 25.7122C9.77628 25.6274 8.64607 25.6557 7.79842 24.7232C7.12029 24.0169 6.95076 22.4346 6.95076 22.4346C6.95076 22.4346 6.78123 20.5415 6.78123 18.6766V16.9248C6.78123 15.06 6.95076 13.1669 6.95076 13.1669C6.95076 13.1669 7.14855 11.5846 7.79842 10.8782C8.64607 9.94581 9.57849 9.91755 10.0023 9.86104C13.1386 9.635 17.8007 9.60675 17.8007 9.60675C17.8007 9.60675 22.4628 9.635 25.5709 9.86104C25.9947 9.91755 26.9554 9.94581 27.8031 10.85C28.4812 11.5564 28.6507 13.1669 28.6507 13.1669C28.6507 13.1669 28.8202 15.06 28.8202 16.9248V18.6766Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_42005_3121">
                          <rect width="35.6015" height="35.6015" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </aside>

              {/* Right: White form card */}
              <div className="bg-white text-black rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200">
                <h2 className="text-[24px] leading-[32px] sm:text-2xl font-medium text-[#1E1E1E] font-['Wix_Madefor_Display',_sans-serif] mb-6">Please enter your details</h2>

                {/* chips: กดเลือก service แล้วเก็บใน state */}
                <div className="mb-4 text-[20px] leading-[26px] font-medium text-[#1E1E1E] font-['Wix_Madefor_Display',_sans-serif]">Service of interest:</div>
                <div className="mb-6 flex flex-col items-start gap-5 self-stretch px-0 py-0 md:items-start md:gap-[24px] md:px-0 md:py-0">
                  <div className="flex flex-wrap gap-x-[5px] gap-y-3 justify-start">
                    {SERVICES.map((chip) => {
                      const active = selected.includes(chip);
                      return (
                        <button
                          key={chip}
                          type="button"
                          aria-pressed={active}
                          onClick={() => toggleService(chip)}
                          className={[
                            "inline-flex items-center w-auto md:w-auto px-4 md:px-3.5 py-2 rounded-full border border-[#E0E0E0] md:border-neutral-300 text-[11px] leading-[14px] font-medium text-[#757575] md:text-sm md:leading-[20px] md:font-normal text-center font-['Wix_Madefor_Display',_sans-serif] whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-black/20",
                            active
                              ? "bg-black text-white border-black"
                              : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50",
                            chip === "Cyber Drill" ? "px-3 md:px-3.5" : ""
                          ].join(" ")}
                        >
                          {chip}
                        </button>
                      );
                    })}
                  </div>

                  {/* Divider */}
                  <div className="w-[302px] md:w-[572px] h-[2px] bg-[#E2E2E2]" />
                </div>

                <form className="space-y-4" aria-label="Contact details form" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="fullName" aria-label="Your full name" placeholder="Your Full Name*" required className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20" />
                    <input name="email" aria-label="Your email" type="email" placeholder="Your Email*" required className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20" />
                    <input name="phone" aria-label="Phone" placeholder="+66" className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20" />
                    <input name="company" aria-label="Company name" placeholder="Company Name*" required className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20" />
                    <input name="website" aria-label="Website" placeholder="Website" className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20" />
                    <input name="budget" aria-label="Budget" placeholder="Budget*" required className="h-11 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20" />
                  </div>

                  <textarea name="message" aria-label="Message" placeholder="Tell us what you&rsquo;re looking to achieve*" required className="mt-2 h-32 w-full rounded-2xl border border-neutral-300 p-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/20" />

                  {/* honeypot: ซ่อนไว้ ถ้ามีค่าถือว่าเป็นบอท */}
                  <div aria-hidden className="hidden">
                    <input name="hp" autoComplete="off" tabIndex={-1} />
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={loading} className="w-full rounded-full bg-black text-white py-3.5 text-sm font-medium hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30 disabled:opacity-50">
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </div>

                  {ok === true && (
                    <p className="text-green-600 text-sm pt-2">
                      Sent successfully. We&rsquo;ll get back to you soon.
                    </p>
                  )}
                  {ok === false && (
                    <p className="text-red-600 text-sm pt-2">
                      Couldn&apos;t send your message. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}