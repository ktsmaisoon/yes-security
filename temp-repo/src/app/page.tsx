import Image from "next/image";
import Header from "@/components/ui/Header";
import Banner from "@/components/ui/Banner";
import WhoTrustsUs from "@/components/ui/Who-trusts-us";
import YesItSecurity from "@/components/ui/YesItSecurity";
import OurBlog from "@/components/ui/OurBlog";
import CallToAction from "@/components/ui/CallToAction";
import Footer from "@/components/ui/Footer";
import OurService from "@/components/ui/OurService";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const bgMobileBetween = `${base}/assets/bg/bgMobile-Whotrustsus_Yesit.png`;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner />

      {/* Mobile-only background between WhoTrustsUs and YesItSecurity */}
      <div className="relative md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${bgMobileBetween})`, backgroundPosition: "top center" }}
          aria-hidden="true"
        />

        <div className="relative z-[1] flex flex-col">
          <WhoTrustsUs />
          <YesItSecurity />
        </div>
      </div>

      {/* Desktop: WhoTrustsUs without mobile background */}
      <div className="hidden md:block">
        <WhoTrustsUs />
      </div>

      {/* Desktop-only background between YesItSecurity and OurService */}
      <div className="relative hidden md:block bg-black">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url(/assets/bg/mainpage-bg.png)", backgroundPosition: "center -80px" }}
          aria-hidden="true"
        />
        <div className="relative z-[1] flex flex-col">
          <YesItSecurity />
          <OurService />
        </div>
      </div>

      {/* Section 4: Our Services (mobile) */}
      <OurService className="md:hidden" />
      <OurBlog className="lg:pt-0" />
      <CallToAction />
      <Footer />
    </div>
  );
}
