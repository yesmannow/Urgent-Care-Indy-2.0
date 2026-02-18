const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://urgentcareindy.com";

type OpeningHoursSpec = {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
};

function baseOpeningHours(): OpeningHoursSpec[] {
  return [
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
  ];
}

export function buildMedicalBusinessJsonLd(options: {
  pagePath: string;
  pageName: string;
  services?: Array<{ name: string; price?: string; priceCurrency?: string; description?: string }>;
}) {
  const url = `${SITE_URL}${options.pagePath}`;

  const serviceList =
    options.services?.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.name,
      description: s.description,
    })) ?? [];

  const offerList =
    options.services
      ?.filter((s) => Boolean(s.price))
      .map((s) => ({
        "@type": "Offer",
        price: s.price,
        priceCurrency: s.priceCurrency ?? "USD",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
        url,
      })) ?? [];

  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Urgent Care Indy",
    url,
    image: `${SITE_URL}/images/logo.png`,
    logo: `${SITE_URL}/images/branding/urgent-care-indy-main-logo.png`,
    telephone: "+1-317-956-6288",
    priceRange: "$$",
    openingHours: ["Mo-Fr 08:00-18:30", "Sa 08:00-14:30"],
    openingHoursSpecification: baseOpeningHours(),
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
    department: {
      "@type": "MedicalClinic",
      name: options.pageName,
      url,
      availableService: serviceList,
    },
    ...(offerList.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: options.pageName,
            itemListElement: offerList,
          },
        }
      : null),
  };
}

export function buildFaqPageJsonLd(options: {
  pagePath: string;
  questions: Array<{ question: string; answer: string }>;
}) {
  const url = `${SITE_URL}${options.pagePath}`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: options.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
    url,
  };
}

