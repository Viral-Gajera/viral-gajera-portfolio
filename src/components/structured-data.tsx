// app/components/StructuredData.tsx
export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Viral Gajera",
    jobTitle: "Software Engineer",
    url: "https://viral-gajera.vercel.app",
    sameAs: [
      "https://linkedin.com/in/gajera-viral",
      "https://github.com/Viral-Gajera",
      "https://x.com/ViralGajera218",
      "https://leetcode.com/u/viral_gajera/",
    ],
    email: "viral.gajera218@gmail.com",
    telephone: "+91-9714040515",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rajkot",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    worksFor: {
      "@type": "Organization",
      name: "Tata Consultancy Services",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Marwadi University",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Viral Gajera Portfolio",
    url: "https://viral-gajera.vercel.app",
    author: {
      "@type": "Person",
      name: "Viral Gajera",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}