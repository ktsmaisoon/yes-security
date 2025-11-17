import { Metadata } from 'next'
import Header from "@/components/ui/Header"
import BannerAboutUs from "@/components/ui/BannerAboutUs"
import YesItSecurityAboutUs from "@/components/ui/YesItSecurity-about-us"
import MissionVision from "@/components/ui/Mission-vision"
import TrustBuilding from "@/components/ui/Trust-building"
import CallToActionAboutUs from "@/components/ui/CallToAction-About-us"
import Footer from "@/components/ui/Footer"

// SEO Metadata
export const metadata: Metadata = {
  title: 'About Us | Leading Cybersecurity Company & IT Security Experts | YesIT Security',
  description: 'Learn about YesIT Security\'s mission to protect businesses from cyber threats. Meet our certified IT security experts and discover our proven track record in cybersecurity solutions.',
  keywords: [
    'cybersecurity company',
    'IT security services',
    'cybersecurity experts',
    'information security company',
    'cyber security solutions',
    'cybersecurity consulting',
    'trusted cybersecurity company',
    'certified cybersecurity professionals',
    'enterprise security solutions',
    'cybersecurity specialists'
  ],
  authors: [{ name: 'YesIT Security' }],
  creator: 'YesIT Security',
  publisher: 'YesIT Security',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'About YesIT Security | Trusted Cybersecurity Experts & IT Security Company',
    description: 'Discover our cybersecurity company\'s mission, vision, and commitment to protecting businesses from cyber threats. Meet our certified IT security professionals.',
    url: 'https://yesitsecurity.com/about-us',
    siteName: 'YesIT Security',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/og/about-us-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'YesIT Security - About Our Cybersecurity Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About YesIT Security | Leading Cybersecurity Company',
    description: 'Learn about our cybersecurity experts and IT security services. Protecting businesses from cyber threats with proven solutions.',
    site: '@YesITSecurity',
    creator: '@YesITSecurity',
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/og/about-us-twitter-card.jpg`],
  },
  alternates: {
    canonical: 'https://yesitsecurity.com/about-us',
  },
  other: {
    'DC.title': 'About YesIT Security - Cybersecurity Company',
    'DC.description': 'Professional cybersecurity services and IT security solutions from certified experts.',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.language': 'en',
    'DC.identifier': 'https://yesitsecurity.com/about-us',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'YesIT Security',
  description: 'Leading cybersecurity company providing comprehensive IT security services, cyber threat protection, and security consulting to businesses worldwide.',
  url: 'https://yesitsecurity.com',
  logo: `https://steven-222.github.io/yes-security/assets/Header/d93e143d52d949cb35be785e38e623596c968907.svg`,
  foundingDate: '2020', // Update with actual founding date
  sameAs: [
    'https://linkedin.com/company/yesitsecurity',
    'https://twitter.com/yesitsecurity',
    // Add other social media profiles
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX', // Update with actual phone
    contactType: 'Customer Service',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address', // Update with actual address
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: 'Your ZIP',
    addressCountry: 'US',
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 'XX.XXXX', // Update with actual coordinates
      longitude: 'XX.XXXX',
    },
    geoRadius: '50000', // Service radius in meters
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cybersecurity Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cybersecurity Consulting',
          description: 'Professional cybersecurity consulting and IT security advisory services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Penetration Testing',
          description: 'Comprehensive security testing and vulnerability assessment services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Security Auditing',
          description: 'Complete security audits and compliance assessment services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Managed Security Services',
          description: '24/7 managed cybersecurity services and threat monitoring',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9', // Update with actual rating
    reviewCount: '150', // Update with actual review count
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Client Name', // Update with actual review
      },
      reviewBody: 'Excellent cybersecurity services. Professional team with deep expertise in IT security.',
    },
  ],
  knowsAbout: [
    'Cybersecurity',
    'Information Security',
    'Network Security',
    'Cloud Security',
    'Penetration Testing',
    'Security Auditing',
    'Compliance',
    'Risk Assessment',
    'Incident Response',
    'Threat Intelligence',
  ],
}

export default function AboutUs() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-black">
        {/* Hidden h1 for SEO (if not present in BannerAboutUs component) */}
        <h1 className="sr-only">
          About YesIT Security - Your Trusted Cybersecurity Company and IT Security Experts
        </h1>

        <Header />

        <main role="main" itemScope itemType="https://schema.org/AboutPage">
          {/* Main content sections with semantic structure */}
          <section aria-labelledby="banner-heading">
            <div
              className="
    full-bleed relative text-white overflow-hidden
    bg-[url('/assets/YesItSecurity-about-us/390_1242.png')]
    bg-no-repeat bg-cover bg-[position:center_-65px]
    sm:bg-[url('/assets/bg/aboutus-bg1.png')]
    sm:bg-no-repeat sm:bg-cover sm:bg-center
    opacity-100
  "
            >
              <BannerAboutUs />
              <YesItSecurityAboutUs />
            </div>
          </section>

          {/* Mobile: Mission */}
          <section aria-labelledby="mission-vision-heading" className="sm:hidden">
            <MissionVision />
          </section>

          <section aria-labelledby="trust-building-heading" className="sm:hidden">
            <CallToActionAboutUs>
              <TrustBuilding className="bg-transparent sm:bg-transparent" />
            </CallToActionAboutUs>
          </section>

          <section aria-labelledby="mission-vision-heading" className="hidden sm:block">
            <div
              className="full-bleed relative text-white overflow-hidden bg-[url('/assets/YesItSecurity-about-us/1440_2756.png')] bg-no-repeat bg-contain bg-[position:center_100px]"
            >
              <MissionVision />
              <TrustBuilding />
            </div>
          </section>

          <section aria-labelledby="cta-heading" className="hidden sm:block">
            <CallToActionAboutUs />
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}