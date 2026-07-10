import { faqItems, priceTiers, services, siteConfig } from "@/content/site";

export function createStructuredData() {
  const organizationId = `${siteConfig.canonicalUrl}#organization`;
  const serviceId = `${siteConfig.canonicalUrl}#services`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.canonicalUrl,
        email: siteConfig.email,
        description:
          "SkyMavan designs and builds custom AI agents, workflow automation, and AI SaaS products for startups and growing businesses.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.canonicalUrl}#website`,
        url: siteConfig.canonicalUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "AI product development services",
        provider: { "@id": organizationId },
        areaServed: "Worldwide",
        description:
          "Custom AI agents, workflow automation, integrations, and AI SaaS product engineering.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SkyMavan AI services",
          itemListElement: services.map((service) => {
            const tier = priceTiers.find(
              (priceTier) => priceTier.serviceId === service.id,
            );

            return {
              "@type": "Offer",
              priceCurrency: "USD",
              price: tier?.priceValue,
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.description,
              },
            };
          }),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.canonicalUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  } as const;
}
