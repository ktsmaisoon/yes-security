// Unused imports and variables removed to satisfy linter

import { ReactNode } from "react"
import Link from "next/link"

interface CallToActionAboutUsProps {
  className?: string
  children?: ReactNode
}

export default function CallToActionAboutUs({ className = "", children }: CallToActionAboutUsProps) {
  return (
    <section
      className={`
    full-bleed relative text-white overflow-hidden py-16 lg:py-20
    bg-[url('/assets/CallToAction-About-us/390_777.png')]
    bg-no-repeat bg-[length:380px_777px] bg-[position:center_1445px]
    sm:bg-[url('/assets/CallToAction-About-us/1450_2757.png')]
    sm:bg-no-repeat sm:bg-[length:1500px_620px] sm:bg-center
    ${className}
  `}
      aria-label="Call to action"
    >
      {children && (
        <div className="container-site relative z-10 mb-10">
          {children}
        </div>
      )}

      {/* Main CTA content */}
      <div
        className="
          container-site relative z-10
          flex flex-col items-center self-stretch
          px-[24px] pt-[60px] pb-[60px]
          gap-[40px]
          lg:max-w-[1440px] lg:mx-auto lg:px-[120px] lg:pt-[120px] lg:pb-[120px]
        "
      >
        <div className="w-full max-w-4xl text-center">
          <h2
            className="
    text-white
    font-['Wix_Madefor_Display',_sans-serif]
    font-[500]
    text-[32px]
    leading-[40px]
    text-center
    mb-8
    lg:font-[600]
    lg:text-[56px]
    lg:leading-[77px]
  "
          >
            <span className="block sm:inline">
              We believe
              <br className="sm:hidden" />
            </span>
            <span className="block sm:inline">
              we can protect
              <br className="sm:hidden" />
            </span>
            <span className="block sm:inline">
              <br className="hidden lg:block" />
              your organization here
            </span>
          </h2>

          <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
            <button
              className="
    flex
    items-center justify-center
    gap-[10px]
    px-[18px] py-[7px]
    border border-white
    text-white
    font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base
    rounded-[41px]
    hover:bg-white hover:text-[#000c39]
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#000c39]
  "
              aria-label="Get free consultation"
            >
              Free Consultation
            </button>

            <Link
              href="/contact-us"
              className="
    flex
    items-center justify-center
    gap-[10px]
    px-[18px] py-[7px]
    rounded-[41px]
    bg-[#3EFF51] text-black
    font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base
    border-2 border-transparent
    transition-colors duration-300
    hover:bg-[#000000] hover:text-[#3EFF51] hover:border-[#3EFF51]
    focus:outline-none focus:ring-2 focus:ring-[#3EFF51] focus:ring-offset-2 focus:ring-offset-[#000000]
  "
              aria-label="Contact us"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}