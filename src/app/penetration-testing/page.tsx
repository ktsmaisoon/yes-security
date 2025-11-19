import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import PenetrationTestingBanner from "@/components/ui/PenetrationTestingBanner";
import TrustedBy from "@/components/ui/TrustedBy";
import PenetrationTestingIntro from "@/components/ui/PenetrationTestingIntro";
import PenetrationTestingWhatIs from "@/components/ui/PenetrationTestingWhatIs";
import PenetrationTestingWhy from "@/components/ui/PenetrationTestingWhy";
import PenetrationTestingTypes from "@/components/ui/PenetrationTestingTypes";
import PenetrationTestingKeyFeatures from "@/components/ui/PenetrationTestingKeyFeatures";
import PenetrationTestingExpect from "@/components/ui/PenetrationTestingExpect";
import PenetrationTestingFaqs from "@/components/ui/PenetrationTestingFaqs";
import PenetrationTestingContact from "@/components/ui/PenetrationTestingContact";
import Image from "next/image";

export const metadata = {
  title: "Penetration Testing | Yes Cybersecurity",
  description:
    "Independent penetration testing services to uncover vulnerabilities and strengthen your security posture.",
};

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative bg-black">
        {/* One shared background image behind Banner and TrustedBy */}
        {/* Mobile background: covers full height across Banner + TrustedBy */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div className="relative sm:hidden mx-auto w-[390px] h-[1023.757px] flex flex-col items-start">
            <Image
              src={`${base}/assets/bg/pene-banner-bg.png`}
              alt=""
              fill
              priority
              className="object-cover object-center select-none"
              sizes="100vw"
            />
          </div>
          {/* Desktop background (right-aligned, flush to edge) */}
          <div className="hidden sm:flex relative w-full h-[1105px] justify-end">
            <Image
              src={`${base}/assets/bg/penetrationtesting-bg1.png`}
              alt=""
              fill
              priority
              className="object-contain object-right select-none"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Content above background */}
        <div className="relative z-10">
          <PenetrationTestingBanner />
          <TrustedBy />
          <PenetrationTestingIntro />
          <PenetrationTestingWhatIs />
          <PenetrationTestingWhy />
          <PenetrationTestingTypes />
          <PenetrationTestingKeyFeatures />
          <PenetrationTestingExpect />
          <PenetrationTestingFaqs />
          <PenetrationTestingContact />
        </div>
      </main>
      <Footer />
    </>
  );
}
