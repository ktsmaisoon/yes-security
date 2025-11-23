import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import OurServiceBanner from "@/components/ui/OurServiceBanner"
import OurServiceCTA from "@/components/ui/OurServiceCTA"
import OurService from "@/components/ui/OurService"

export default function OurServicePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <div className="mt-16 lg:mt-0">
          <OurServiceBanner />
        </div>
        {/* Section 2: All Services */}
        <OurService className="py-16 -mt-12 lg:mt-0" hideHeader />
        <OurServiceCTA />
      </main>
      <Footer />
    </div>
  )
}