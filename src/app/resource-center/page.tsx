import Image from "next/image";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ResourceCenterBanner from "@/components/ui/ResourceCenterBanner";
import ResourceCenterInsights from "@/components/ui/ResourceCenterInsights";
import ResourceCenterCTA from "@/components/ui/ResourceCenterCTA";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const bgResourceDesktop = `${base}/assets/resource-center/resource-center-bg1.png`;
const bgResourceMobile = `${base}/assets/resource-center/resource-center-bg4.png`;

export const metadata = {
  title: "Resource Center | Yes Cybersecurity",
  description:
    "Practical insights to reduce risk, strengthen security, and meet compliance.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 pb-24 sm:pb-32">
        {/* Mobile */}
        <div className="block sm:hidden w-full flex flex-col items-center">
          {/* BG Image wrapper */}
          <div className="relative w-full max-w-[390px] h-[832px]">
            <Image
              src={bgResourceMobile}
              alt="Resource Center Mobile BG"
              fill
              className="object-cover"
              priority
            />

            {/* Banner content (uses its own flex + padding) */}
            <div className="relative z-10 w-full h-full">
              <ResourceCenterBanner />
            </div>
          </div>

          {/* Insights content */}
          <div className="w-full max-w-[390px] px-4 relative top-[-400px] z-10">
            <ResourceCenterInsights />
          </div>
        </div>

        {/* Desktop: shared background for Banner + Insights */}
        <div
          className="hidden sm:block w-full"
          style={{
            backgroundImage: `url(${bgResourceDesktop})`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full flex justify-center py-16">
            <div className="w-full max-w-[1440px]">
              <ResourceCenterBanner />
              <ResourceCenterInsights />
            </div>
          </div>
        </div>

        {/* CTA is separate, no shared background */}
        <ResourceCenterCTA />
      </main>
      <Footer className="mt-10 sm:mt-16" />
    </div>
  );
}
