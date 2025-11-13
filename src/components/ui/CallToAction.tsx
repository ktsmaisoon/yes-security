import Image from "next/image";

// Background image
const callToActionBg = "/assets/bg/calltoaction-bg.png";

interface CallToActionProps {
  className?: string;
}

export default function CallToAction({ className = "" }: CallToActionProps) {
  return (
    <section
      className={`full-bleed relative text-white overflow-visible py-16 lg:py-20 ${className}`}
      aria-label="Call to action"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={callToActionBg}
          alt="Call to action background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>

      {/* Main Content */}
      <div className="container-site relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8 lg:mb-12">
            Build resilience. Prove compliance.
            <br />
            Operate with confidence.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              className="w-[173px] h-[36px] border border-white text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base rounded-[41px] hover:bg-white hover:text-[#000c39] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#000c39] inline-flex items-center justify-center"
              aria-label="Get free consultation"
            >
              Free Consultation
            </button>

            <a
              href="/contact-us"
              aria-label="Contact us"
              className="w-[122px] h-[36px] bg-[#3eff51] text-black font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base rounded-[41px] 
             border-2 border-transparent hover:bg-black hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 
             focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-black inline-flex items-center justify-center text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Additional brand glow accents if desired (optional) */}
    </section>
  );
}
