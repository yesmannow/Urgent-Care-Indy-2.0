const jsonLd = {
  "@context": "https://schema.org",
  "@type": "UrgentCare",
  name: "Urgent Care Indy",
  image: "https://urgentcareindy.com/images/logo.png",
  openingHours: ["Mo-Fr 08:00-18:30", "Sa 08:00-14:30"],
  telephone: "+1-317-956-6288",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7911 N Michigan Rd",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    postalCode: "46268",
    addressCountry: "US",
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
