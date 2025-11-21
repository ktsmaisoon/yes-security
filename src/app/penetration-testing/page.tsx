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

          {/* Mobile-only shared background for Why + Types + KeyFeatures */}
          <div className="relative isolate sm:hidden mx-auto w-[390px] min-h-[1150px] pb-6">
            {/* Background */}
            <div
              aria-hidden
              className="absolute left-1/2 top-0 -z-10 flex w-[390px] h-[952px] -translate-x-1/2 -translate-y-[-530px] flex-col items-center pointer-events-none bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${base}/assets/bg/penetrationtesting-bg5.png)` }}
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <PenetrationTestingWhy />
              <PenetrationTestingTypes />
              <PenetrationTestingKeyFeatures />
            </div>
          </div>

          {/* Desktop render: render normally without mobile wrapper */}
          <div className="hidden sm:block">
            <PenetrationTestingWhy />
            <PenetrationTestingTypes />
            <PenetrationTestingKeyFeatures />
          </div>

          <PenetrationTestingExpect />
          <PenetrationTestingFaqs />
          <PenetrationTestingContact />
        </div>
      </main>
      <Footer />
    </>
  );
}
