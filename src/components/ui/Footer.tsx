'use client'

import Image from 'next/image'
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
import { useState } from 'react'

interface FooterProps {
  className?: string
}

export default function Footer({ className = "" }: FooterProps) {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <footer
      className={`full-bleed relative bg-[#000c39] text-white min-h-[517px] lg:h-[517px] ${className}`}
      role="contentinfo"
    >
      <div className="container-site h-full flex flex-col justify-center py-[56px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[60px] gap-y-[49px] mb-8">

          {/* Brand Row - Full Width Above Columns */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 -mb-[25px]">
            <div className="flex items-center gap-3">
              <div className="relative w-[40px] h-[34px]">
                <Image
                  src={`${base}/assets/Header/d93e143d52d949cb35be785e38e623596c968907.svg`}
                  alt="Yes Cybersecurity Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[#3eff51] font-['Wix_Madefor_Display',_sans-serif] text-lg font-normal">
                Cybersecurity
              </span>
            </div>
          </div>

          {/* Company Info - Left Column */}
          <div>
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] font-medium text-base mb-[24px]">Address</h4>
                <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-sm leading-relaxed">
                  17th Floor, Wittayakit Building, Phayathai Rd,<br />
                  Wang Mai, Pathum Wan, Bangkok 10330<br />
                  (BTS SIAM STATION)
                </p>
              </div>

              <div>
                <h4 className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] font-medium text-base mb-[16px]">Contact</h4>
                <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-sm space-y-[24px]">
                  <span className="block">Bangkok: 096-879-5445</span>
                  <span className="block">
                    <a href="mailto:info@yeswebdesignstudio.com" className="text-sm hover:text-[#3eff51] transition-colors">
                      info@yeswebdesignstudio.com
                    </a>
                  </span>
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 mt-[24px]">
                <a href="#" className="text-gray-400 hover:text-[#3eff51] transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3eff51] transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3eff51] transition-colors" aria-label="Line">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="5" y="7" width="14" height="9" rx="4" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 16 L10.6 17.6 L13.4 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="12" y="12" textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontSize="4.8" fontWeight="700" fontFamily="sans-serif">LINE</text>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3eff51] transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3eff51] transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Link - Second Column */}
          <div>
            <h4 className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] font-medium text-base mb-[24px]">Quick link</h4>
            <nav>
              <ul className="space-y-3">
                <li><a href="/about" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">About</a></li>
                <li><a href="/services" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">Services</a></li>
                <li><a href="/blog" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">Blog</a></li>
                <li><a href="/careers" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">Careers</a></li>
                <li><a href="/contact-us" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">Contact Us</a></li>
              </ul>
            </nav>
          </div>

          {/* Services - Third Column */}
          <div>
            <h4 className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] font-medium text-base mb-[24px]">Services</h4>
            <nav>
              <ul className="space-y-3">
                <li><a href="/services/penetration-testing" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">Penetration Testing</a></li>
                <li><a href="/services/vulnerability-assessment" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">Vulnerability Assessment</a></li>
                <li><a href="/services/red-team" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">Red Team Assessment</a></li>
                <li><a href="/services/source-code-review" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">Source Code Review</a></li>
                <li><a href="/services/attack-surface" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">Attack Surface Analysis</a></li>
                <li><a href="/services/va-clinic" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">VA Clinic</a></li>
                <li><a href="/services/cyber-drill" className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-md">Cyber Drill</a></li>
              </ul>
            </nav>
          </div>

          {/* Stay Inspired - Right Column */}
          <div className="md:-ml-2 lg:-ml-2">
            <h4 className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] font-medium text-base mb-[24px]">Stay Inspired!</h4>
            <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-sm leading-relaxed mb-4 whitespace-nowrap">
              Subscribe now for exclusive updates, special offers,<br />
              and wedding inspiration delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-[236px] h-[36px] px-4 bg-white/20 backdrop-blur-sm border border-gray-600 rounded-full text-white placeholder-gray-200 text-sm focus:outline-none focus:border-white transition-colors"
                required
              />
              <button
                type="submit"
                className="w-[131px] h-[36px] bg-[#3eff51] text-[#000c39] px-4 rounded-[41px] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base 
             border-2 border-transparent hover:bg-[#000c39] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors 
             focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-[#000c39] whitespace-nowrap"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="text-center">
            <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-sm">
              © 2025 Yes AI Group. All Rights Reserved.&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="/sitemap" className="hover:text-[#3eff51] transition-colors">Sitemap</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}