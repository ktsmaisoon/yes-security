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
      <div
        className="
          container-site h-full
          flex flex-col items-start
          max-w-[390px] w-full mx-auto
          pt-[56px] px-[24px] pb-0
          gap-[24px]
          lg:max-w-none lg:w-full lg:mx-auto
          lg:flex lg:flex-col lg:items-stretch lg:justify-center
          lg:px-0 lg:py-[56px] lg:gap-[24px]
        "
      >
        <div
          className="
            w-full
            grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4
            gap-x-[60px] gap-y-0 mb-8 lg:gap-y-[49px]
          "
        >

          {/* Brand Row - Full Width Above Columns */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 -mb-[25px]">
            <div className="flex items-center gap-3">
              <div className="w-[39.769px] h-[34px] flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" viewBox="0 0 40 34" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.8642 25.4348L15.5625 27.1706C15.5625 27.1706 25.8561 21.9149 36.2463 19.6969L36.0532 18.9133C31.5279 19.6487 23.1047 21.9149 15.8763 25.4348H15.8642Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M30.0506 6.94336C30.5092 9.2096 32.9951 10.2704 33.8278 12.3558C33.9726 12.7054 34.0571 13.0911 34.0209 13.4648C33.9364 14.4653 32.9469 15.0681 32.0056 15.0681C30.8954 15.0681 30.0627 14.4051 29.1938 13.8144L28.4336 14.7908C29.399 15.8034 30.6178 16.6834 32.0177 16.816C33.7675 16.9847 35.6862 15.8757 36.2051 14.164C36.5309 13.1032 36.362 11.9218 35.8069 10.9695C34.8656 9.37836 31.5953 7.5943 32.7296 5.38834C33.3572 4.17084 35.1914 3.88153 36.3982 3.72482V2.41089C34.7329 2.66403 32.9469 3.03772 31.5108 3.96591C30.4851 4.64096 29.7972 5.67764 30.0506 6.93131V6.94336Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.6791 18.0696C18.0411 18.5036 18.5117 18.8652 19.1513 19.0942C23.568 20.6975 27.2848 15.2127 27.2848 15.2127L26.5246 14.8029C21.8906 19.5041 20.177 15.948 20.177 15.948C23.4353 14.1399 25.5109 12.0544 26.2591 9.40247C27.2004 6.06339 24.1352 4.24317 21.2149 6.97952L20.9735 7.18445C18.379 9.57123 16.1706 14.1881 17.0998 17.0209C16.5447 17.491 15.3983 18.371 13.5278 19.4197C13.7692 16.0204 14.2639 12.2594 14.8673 9.02878C16.9429 3.55606 16.3878 1.43448 16.3878 1.43448C16.3878 1.43448 15.0725 -2.35062 13.552 6.03928C12.0314 14.4412 9.67827 16.5387 9.67827 16.5387C5.52703 20.7336 4.56163 15.2248 4.56163 15.2248C3.6445 9.02878 8.27844 0.626831 8.27844 0.626831L6.79413 0C4.6099 2.88101 -1.12219 18.166 3.90998 20.5046C8.94215 22.8432 12.1401 15.0681 12.1401 15.0681L11.6694 20.2153C8.80941 21.1797 4.89952 22.59 2.79977 24.7357C1.61715 25.9412 0.567269 27.2913 0.16904 28.9186C-0.687757 32.4024 1.99124 33.4993 1.99124 33.4993C5.0926 34.8856 8.36291 33.1377 10.1127 31.3657C12.8279 28.6414 13.3227 22.5539 13.3951 21.0712C14.4812 20.4082 16.6292 19.0581 17.667 18.0696H17.6791ZM20.1529 9.84848C21.8062 7.06391 24.4128 7.05185 24.0749 9.37836C23.6525 12.3076 20.0926 14.6944 19.5978 14.9957C19.5978 14.9957 18.5962 12.4764 20.1529 9.84848ZM5.0926 30.992C4.67024 30.9799 4.27201 30.7871 3.93412 30.5339C3.59623 30.2808 3.35487 29.9191 3.21006 29.5213C2.70323 27.9904 4.30821 25.1335 11.5125 21.9632C11.5125 21.9632 10.7281 31.1849 5.08053 30.992H5.0926Z" fill="white" />
                  <ellipse cx="38.8083" cy="18.6354" rx="0.960611" ry="0.96061" fill="white" />
                </svg>
              </div>
              <span className="text-[#3eff51] font-['Wix_Madefor_Display',_sans-serif] text-lg font-normal">
                Cybersecurity
              </span>
            </div>
          </div>

          {/* Company Info - Left Column */}
          <div className="col-span-2 md:col-span-1 mt-[45px] lg:mt-0">
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
                <a href="#" className="text-white hover:text-[#3eff51] transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H12.615V14.04H10.277V11.315H12.615V9.315C12.615 6.99 14.035 5.723 16.115 5.723C16.814 5.721 17.514 5.757 18.21 5.83V8.25H16.775C15.647 8.25 15.427 8.788 15.427 9.575V11.31H18.124L17.774 14.035H15.426V21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3Z" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#3eff51] transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.9471 8.30545C20.937 7.54807 20.7952 6.79822 20.5281 6.08945C20.2964 5.4916 19.9426 4.94863 19.4892 4.49528C19.0359 4.04191 18.4929 3.6881 17.8951 3.45645C17.1954 3.1938 16.4562 3.05179 15.7091 3.03645C14.7471 2.99345 14.4421 2.98145 12.0001 2.98145C9.55807 2.98145 9.24507 2.98145 8.29007 3.03645C7.54323 3.0519 6.80442 3.19391 6.10507 3.45645C5.50713 3.68793 4.96409 4.04169 4.5107 4.49508C4.05732 4.94847 3.70356 5.4915 3.47207 6.08945C3.2089 6.78858 3.06719 7.52756 3.05307 8.27445C3.01007 9.23745 2.99707 9.54245 2.99707 11.9844C2.99707 14.4264 2.99707 14.7384 3.05307 15.6944C3.06807 16.4424 3.20907 17.1804 3.47207 17.8814C3.70395 18.4792 4.05797 19.022 4.51151 19.4752C4.96505 19.9284 5.50813 20.282 6.10607 20.5134C6.8035 20.7866 7.54244 20.9388 8.29107 20.9634C9.25407 21.0064 9.55907 21.0194 12.0011 21.0194C14.4431 21.0194 14.7561 21.0194 15.7111 20.9634C16.4582 20.9487 17.1974 20.807 17.8971 20.5444C18.4948 20.3125 19.0376 19.9586 19.4909 19.5053C19.9442 19.052 20.2982 18.5091 20.5301 17.9114C20.7931 17.2114 20.9341 16.4734 20.9491 15.7244C20.9921 14.7624 21.0051 14.4574 21.0051 12.0144C21.0031 9.57244 21.0031 9.26245 20.9471 8.30545ZM11.9941 16.6024C9.44007 16.6024 7.37107 14.5334 7.37107 11.9794C7.37107 9.42544 9.44007 7.35645 11.9941 7.35645C13.2202 7.35645 14.396 7.84351 15.263 8.71049C16.13 9.57747 16.6171 10.7533 16.6171 11.9794C16.6171 13.2055 16.13 14.3814 15.263 15.2484C14.396 16.1154 13.2202 16.6024 11.9941 16.6024Z" fill="currentColor" />
                    <path d="M11.9942 14.9816C13.6527 14.9816 14.9972 13.6371 14.9972 11.9786C14.9972 10.3201 13.6527 8.97559 11.9942 8.97559C10.3357 8.97559 8.99121 10.3201 8.99121 11.9786C8.99121 13.6371 10.3357 14.9816 11.9942 14.9816Z" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#3eff51] transition-colors" aria-label="Line">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clipPath="url(#clip0_42510_2767)">
                      <path d="M13.9424 0C16.1833 0.000158085 17.9998 1.81674 18 4.05762V13.9424C17.9999 16.1833 16.1833 17.9999 13.9424 18H4.05762C1.81673 17.9999 0.000158083 16.1833 0 13.9424V4.05762C0.000158375 1.81673 1.81673 0.000139391 4.05762 0H13.9424ZM8.99805 3.28125C5.68932 3.28135 2.99707 5.46609 2.99707 8.15137C2.99709 10.5587 5.13186 12.5748 8.01562 12.9561C8.21102 12.9983 8.47765 13.0849 8.54492 13.252C8.60543 13.4036 8.58463 13.6416 8.56445 13.7949C8.56282 13.8047 8.49359 14.2194 8.47852 14.3086C8.45229 14.4604 8.35802 14.9014 8.99805 14.6318C9.63858 14.3619 12.4538 12.5966 13.7129 11.1475C14.5826 10.1937 15 9.22603 15 8.15137C15 5.46603 12.3072 3.28125 8.99805 3.28125Z" fill="currentColor" />
                      <path d="M13.0037 9.70219H11.3199H11.3177C11.2544 9.70219 11.2031 9.65089 11.2031 9.58761V9.58579V9.58561V6.97121V6.97104V6.96858C11.2031 6.9053 11.2544 6.854 11.3177 6.854H11.3199H13.0037C13.0668 6.854 13.1183 6.90554 13.1183 6.96858V7.39418C13.1183 7.45746 13.067 7.50879 13.0037 7.50879H11.8579V7.95074H13.0037C13.0668 7.95074 13.1183 8.00231 13.1183 8.06535V8.49095C13.1183 8.55423 13.067 8.60556 13.0037 8.60556H11.8579V9.04751H13.0037C13.0668 9.04751 13.1183 9.09908 13.1183 9.16208V9.58768C13.1183 9.65089 13.067 9.70219 13.0037 9.70219Z" fill="currentColor" />
                      <path d="M6.76642 9.70222C6.8297 9.70222 6.88099 9.65093 6.88099 9.58765V9.16205C6.88099 9.09905 6.82942 9.04747 6.76642 9.04747H5.62057V6.96858C5.62057 6.90554 5.569 6.854 5.506 6.854H5.08039C5.01711 6.854 4.96582 6.9053 4.96582 6.96858V9.58564V9.58582V9.58765C4.96582 9.65093 5.01711 9.70222 5.08039 9.70222H5.08264H6.76642Z" fill="currentColor" />
                      <path d="M7.78236 6.854H7.35676C7.29348 6.854 7.24219 6.90533 7.24219 6.96858V9.58765C7.24219 9.65093 7.29348 9.70222 7.35676 9.70222H7.78236C7.84564 9.70222 7.89694 9.65093 7.89694 9.58765V6.96858C7.89697 6.9053 7.84568 6.854 7.78236 6.854Z" fill="currentColor" />
                      <path d="M10.6792 6.854H10.2536C10.1903 6.854 10.139 6.90533 10.139 6.96858V8.52417C10.139 8.52417 8.94139 6.90677 8.94073 6.90589C8.91777 6.87489 8.88265 6.854 8.84348 6.854H8.42024C8.35696 6.854 8.30566 6.90533 8.30566 6.96858V9.58765C8.30566 9.65093 8.35696 9.70222 8.42024 9.70222H8.84584C8.90912 9.70222 8.96041 9.65093 8.96041 9.58765V8.03255C8.96041 8.03255 10.1599 9.65244 10.1602 9.65286C10.1824 9.68289 10.2183 9.70222 10.2559 9.70222H10.6792C10.7425 9.70222 10.7938 9.65093 10.7938 9.58765V6.96858C10.7938 6.9053 10.7425 6.854 10.6792 6.854Z" fill="currentColor" />
                    </g>
                    <defs>
                      <clipPath id="clip0_42510_2767">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#3eff51] transition-colors" aria-label="X">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
                    <g clipPath="url(#clip0_42510_2781)">
                      <path d="M8.63144 11.5089L13.3354 17.7805H20.25L12.4878 7.43027L18.9461 0H16.3284L11.2738 5.81422L6.91463 0H0L7.41842 9.89287L0.563049 17.7805H3.18073L8.63144 11.5089ZM14.3232 15.8049L3.95122 1.97561H5.92683L16.2988 15.8049H14.3232Z" fill="currentColor" />
                    </g>
                    <defs>
                      <clipPath id="clip0_42510_2781">
                        <rect width="20.25" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#3eff51] transition-colors" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.5934 7.20301C21.4795 6.78041 21.2569 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8314 5.43701C18.2654 5.00701 12.0004 5.00001 12.0004 5.00001C12.0004 5.00001 5.73633 4.99301 4.16933 5.40401C3.74726 5.52415 3.36316 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9854 19.012 11.9854 19.012C11.9854 19.012 18.2504 19.019 19.8164 18.609C20.2389 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5834 16.846C21.9974 15.281 22.0004 12.034 22.0004 12.034C22.0004 12.034 22.0204 8.76901 21.5934 7.20301ZM9.99633 15.005L10.0014 9.00501L15.2084 12.01L9.99633 15.005Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Link - Second Column */}
          <div className="col-span-1 mt-[56px] lg:mt-0">
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
          <div className="col-span-1 mt-[56px] lg:mt-0">
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
          <div className="col-span-2 md:col-span-1 md:-ml-2 lg:-ml-2 mt-[56px] lg:mt-0">
            <h4 className="text-gray-300 font-['Wix_Madefor_Display',_sans-serif] font-medium text-base mb-[24px]">Stay Inspired!</h4>
            <p className="text-white font-['Wix_Madefor_Display',_sans-serif] text-sm leading-relaxed mb-4 whitespace-nowrap">
              Subscribe now for exclusive updates, special offers,<br />
              and wedding inspiration delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-row flex-wrap lg:flex-nowrap gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-[200px] sm:w-[236px] h-[36px] px-4 bg-white/20 backdrop-blur-sm border border-gray-600 rounded-full text-white placeholder-gray-200 text-sm focus:outline-none focus:border-white transition-colors"
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