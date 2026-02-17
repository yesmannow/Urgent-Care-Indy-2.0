export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Urgent Care Indy",
    image: "https://urgentcareindy.com/images/branding/urgent-care-indy-main-logo.png",
    "@id": "https://urgentcareindy.com",
    url: "https://urgentcareindy.com",
    telephone: "+13179566288",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7911 N Michigan Rd",
      addressLocality: "Indianapolis",
      addressRegion: "IN",
      postalCode: "46268",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
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
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Insurance",
    medicalSpecialty: "Urgent Care",
    parentOrganization: {
      "@type": "MedicalOrganization",
      name: "Pike Medical Consultants",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
