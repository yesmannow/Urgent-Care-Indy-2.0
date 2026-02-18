const SITE_URL = "https://urgentcareindy.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "UrgentCare",
  name: "Urgent Care Indy",
  url: SITE_URL,
  image: `${SITE_URL}/images/logo.png`,
  logo: `${SITE_URL}/images/branding/urgent-care-indy-main-logo.png`,
  medicalSpecialty: ["Emergency Management", "Urgent Care", "Occupational Medicine"],
  priceRange: "$$",
  openingHours: ["Mo-Fr 08:00-18:30", "Sa 08:00-14:30"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:30",
    },
  ],
  telephone: "+1-317-956-6288",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7911 N Michigan Rd",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    postalCode: "46268",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 39.9125,
      longitude: -86.2197,
      addressLocality: "Indianapolis",
      addressRegion: "IN",
      postalCode: "46268",
    },
    geoRadius: "40233",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Medical Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sports Physical" },
        price: "30.00",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "DOT Physical" },
        price: "95.00",
        priceCurrency: "USD",
      },
    ],
  },
  sameAs: ["https://www.facebook.com/UrgentCareIndy"],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
