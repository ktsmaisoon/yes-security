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

export const metadata = {
  title: "Penetration Testing | Yes Cybersecurity",
  description:
    "Independent penetration testing services to uncover vulnerabilities and strengthen your security posture.",
};

export default function Page() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
