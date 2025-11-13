import Header from "@/components/ui/Header";
import Banner from "@/components/ui/Banner";
import WhoTrustsUs from "@/components/ui/Who-trusts-us";
import YesItSecurity from "@/components/ui/YesItSecurity";
import OurBlog from "@/components/ui/OurBlog";
import CallToAction from "@/components/ui/CallToAction";
import Footer from "@/components/ui/Footer";
import OurService from "@/components/ui/OurService";

export default function HomeThai() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner />
      <WhoTrustsUs />
      <YesItSecurity />
      {/* Section 4: Our Services */}
      <OurService />
      <OurBlog />
      <CallToAction />
      <Footer />
    </div>
  );
}