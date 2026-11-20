import { siteConfig } from "@/config/site";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.designation,
    url: siteConfig.url,
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    knowsAbout: siteConfig.techStack,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
