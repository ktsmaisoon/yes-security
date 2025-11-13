import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ResourceCenterBanner from "@/components/ui/ResourceCenterBanner";
import ResourceCenterInsights from "@/components/ui/ResourceCenterInsights";
import ResourceCenterCTA from "@/components/ui/ResourceCenterCTA";

export const metadata = {
  title: "Resource Center | Yes Cybersecurity",
  description:
    "Practical insights to reduce risk, strengthen security, and meet compliance.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <ResourceCenterBanner />
        <ResourceCenterInsights />
        <ResourceCenterCTA />
      </main>
      <Footer />
    </>
  );
}
