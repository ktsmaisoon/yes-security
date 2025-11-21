'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Asset imports
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const logoIcon = `${base}/assets/Header/d93e143d52d949cb35be785e38e623596c968907.svg`;
const dividerIcon = `${base}/assets/Header/2a21772e3319901457193486200e6a6cc938abab.svg`;
const arrowDownIcon = `${base}/assets/Header/7dd3d91acd48d834ca360d3a26148736d5492783.svg`;

export default function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if current route is Thai
  const isThaiRoute = pathname.startsWith('/th');
  const currentLang = isThaiRoute ? 'th' : 'eng';

  // Helper function to get navigation links based on current language
  const getNavLinks = () => {
    const basePrefix = isThaiRoute ? '/th' : '';
    return {
      home: basePrefix === '' ? '/' : basePrefix,
      aboutUs: `${basePrefix}/about-us`,
      services: `${basePrefix}/our-service`,
      blog: `${basePrefix}/resource-center`,
      careers: `${basePrefix}/careers`,
      contact: `${basePrefix}/contact-us`,
    };
  };

  // Helper function to toggle language
  const getLanguageToggleUrl = () => {
    if (isThaiRoute) {
      // Switch from Thai to English
      return pathname.replace('/th', '') || '/';
    } else {
      // Switch from English to Thai
      return `/th${pathname}`;
    }
  };

  const navLinks = getNavLinks();

  return (
    <header className="bg-[#000c39] text-white fixed top-0 inset-x-0 z-[100] w-full" role="banner">
      <nav className="w-full py-2.5" role="navigation" aria-label="Main navigation">
        <div className="container-site">
          {/* Main Header Bar */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-[40px] h-[34px]">
                <Image
                  src={logoIcon}
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                <Link href={navLinks.home} className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-base" aria-current="page">
                  Home
                </Link>
                <Link href={navLinks.aboutUs} className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-base">
                  About us
                </Link>
                <Link href={navLinks.services} className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-base">
                  Services
                </Link>
                <Link href={navLinks.blog} className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-base">
                  Blog
                </Link>
                <Link href={navLinks.careers} className="text-white hover:text-[#3eff51] transition-colors font-['Wix_Madefor_Display',_sans-serif] text-base">
                  Careers
                </Link>
              </div>

              {/* Action Section */}
              <div className="flex items-center gap-4">
                {/* Contact Button */}
                <Link
                  href={navLinks.contact}
                  className="bg-[#3eff51] text-[#000c39] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base w-[120px] h-[36px] rounded-[41px] flex items-center justify-center 
             border-2 border-transparent hover:bg-[#000c39] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors 
             focus:outline-none"
                  aria-label="Contact us"
                >
                  Contact us
                </Link>

                {/* Divider */}
                <div className="w-px h-6 relative">
                  <Image
                    src={dividerIcon}
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>

                {/* Language Selector */}
                <div className="relative">
                  <button
                    className="group flex items-center gap-1 justify-between min-w-[56px] text-white transition-colors font-['Wix_Madefor_Display',_sans-serif] text-base focus:outline-none"
                  >
                    <span>{currentLang}</span>
                    <div
                      className="w-5 h-5 relative rotate-90 text-white group-hover:text-[#3eff51]"
                      onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                      role="button"
                      aria-label={isThaiRoute ? "เลือกภาษา" : "Select language"}
                      aria-expanded={isLanguageOpen}
                      aria-haspopup="true"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </button>

                  {isLanguageOpen && (
                    <div className="absolute left-0 mt-2 w-[43px] h-[34px] shrink-0 rounded-[15px] border border-white bg-black z-50 flex items-center justify-center" role="menu">
                      {!isThaiRoute && (
                        <Link
                          href={getLanguageToggleUrl()}
                          className="inline-flex items-center justify-center w-full h-full text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-[16px] leading-[22px] focus:outline-none"
                          onClick={() => setIsLanguageOpen(false)}
                          role="menuitem"
                        >
                          th
                        </Link>
                      )}
                      {isThaiRoute && (
                        <Link
                          href={getLanguageToggleUrl()}
                          className="inline-flex items-center justify-center w-full h-full text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-[16px] leading-[22px] focus:outline-none"
                          onClick={() => setIsLanguageOpen(false)}
                          role="menuitem"
                        >
                          eng
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 focus:outline-none"
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-[#000c39] border-t border-gray-700 mt-2" role="menu">
              <div className="container-site pt-2 pb-3 space-y-1">
                <Link
                  href={navLinks.home}
                  className="block px-3 py-3 text-white hover:text-[#3eff51] hover:bg-gray-800 rounded-md font-['Wix_Madefor_Display',_sans-serif] transition-colors"
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href={navLinks.aboutUs}
                  className="block px-3 py-3 text-white hover:text-[#3eff51] hover:bg-gray-800 rounded-md font-['Wix_Madefor_Display',_sans-serif] transition-colors"
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About us
                </Link>
                <Link
                  href={navLinks.services}
                  className="block px-3 py-3 text-white hover:text-[#3eff51] hover:bg-gray-800 rounded-md font-['Wix_Madefor_Display',_sans-serif] transition-colors"
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href={navLinks.blog}
                  className="block px-3 py-3 text-white hover:text-[#3eff51] hover:bg-gray-800 rounded-md font-['Wix_Madefor_Display',_sans-serif] transition-colors"
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href={navLinks.careers}
                  className="block px-3 py-3 text-white hover:text-[#3eff51] hover:bg-gray-800 rounded-md font-['Wix_Madefor_Display',_sans-serif] transition-colors"
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>

                {/* Mobile Contact + Language Row */}
                <div className="pt-4 pb-2 flex items-center">
                  <Link
                    href={navLinks.contact}
                    className="w-[122px] h-[36px] bg-[#3eff51] text-[#000000] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base rounded-[41px] 
             border-2 border-transparent hover:bg-[#000000] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 
             focus:outline-none inline-flex items-center justify-center text-center"
                    role="menuitem"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact us
                  </Link>

                  {/* Divider between Contact and Language, with 16px gap both sides */}
                  <span className="mx-4 text-white/60">|</span>

                  {/* Mobile Language Selector - match desktop style */}
                  <div className="relative">
                    <button
                      onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                      className="group flex items-center gap-1 justify-between min-w-[56px] text-white transition-colors font-['Wix_Madefor_Display',_sans-serif] text-base focus:outline-none"
                      aria-expanded={isLanguageOpen}
                      aria-haspopup="true"
                      aria-label={isThaiRoute ? "เลือกภาษา" : "Select language"}
                    >
                      <span>{currentLang}</span>
                      <div className="w-5 h-5 relative rotate-90 text-white group-hover:text-[#3eff51]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </button>

                    {isLanguageOpen && (
                      <div className="absolute left-0 top-full mt-2 w-[43px] h-[34px] shrink-0 rounded-[15px] border border-white bg-black z-50 flex items-center justify-center" role="menu">
                        {!isThaiRoute && (
                          <Link
                            href={getLanguageToggleUrl()}
                            className="inline-flex items-center justify-center w-full h-full text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-[16px] leading-[22px] focus:outline-none"
                            onClick={() => {
                              setIsLanguageOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            role="menuitem"
                          >
                            th
                          </Link>
                        )}
                        {isThaiRoute && (
                          <Link
                            href={getLanguageToggleUrl()}
                            className="inline-flex items-center justify-center w-full h-full text-white font-['Wix_Madefor_Display',_sans-serif] font-normal text-[16px] leading-[22px] focus:outline-none"
                            onClick={() => {
                              setIsLanguageOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            role="menuitem"
                          >
                            eng
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}