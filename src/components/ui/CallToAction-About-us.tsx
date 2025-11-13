// Unused imports and variables removed to satisfy linter

interface CallToActionAboutUsProps {
  className?: string
}

import Link from "next/link"

export default function CallToActionAboutUs({ className = "" }: CallToActionAboutUsProps) {
  return (
    <section 
      className={`full-bleed relative bg-gradient-to-br from-slate-900 via-[#0f1419] to-black text-white overflow-hidden py-16 lg:py-20 ${className}`}
      aria-label="Call to action"
    >
     

      {/* Main Content */}
      <div className="container-site relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8 lg:mb-12">
          We believe we can protect
          <br />
          your organization here
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button 
            className="border border-white text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base px-6 py-3 rounded-[41px] hover:bg-white hover:text-[#000c39] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#000c39] min-w-[160px]"
            aria-label="Get free consultation"
          >
            Free Consultation
          </button>
          
          <Link 
            href="/contact-us"
            className="bg-[#3eff51] text-black font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base px-6 py-3 rounded-[41px] hover:bg-[#35e047] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-[#000c39] min-w-[140px] inline-block text-center"
            aria-label="Contact us"
          >
            Contact Us
          </Link>
        </div>
      </div>
      </div>

      {/* Additional subtle gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-[#00bcd4]/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-[#3eff51]/5 to-transparent"></div>
      </div>
    </section>
  )
}