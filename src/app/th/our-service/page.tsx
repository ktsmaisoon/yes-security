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
        <OurServiceBanner />
        {/* Section 2: All Services */}
        <OurService className="py-16" hideHeader />
        <OurServiceCTA />
      </main>
      <Footer />
    </div>
  )
}