import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Viral Gajera | Software Engineer",
  description:
    "Portfolio of Viral Gajera, Software Engineer experienced in building web apps using Next.js, React and Node.js.",
  metadataBase: new URL("https://viral-gajera.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Viral Gajera" }],
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  // Open Graph
  openGraph: {
    title: "Viral Gajera | Software Engineer",
    description:
      "Portfolio of Viral Gajera, Software Engineer experienced in building web apps using Next.js, React and Node.js.",
    url: "https://viral-gajera.vercel.app",
    type: "website",
    siteName: "Viral Gajera Portfolio",
    images: [
      {
        url: "https://viral-gajera.vercel.app/profile-picture-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Viral Gajera Portfolio Preview",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Viral Gajera | Software Engineer",
    description:
      "Portfolio of Viral Gajera, Software Engineer experienced in building web apps using Next.js, React and Node.js.",
    images: ["https://viral-gajera.vercel.app/profile-picture-2.jpeg"],
    creator: "Viral Gajera",
  },

  // Favicon or icons
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Source+Code+Pro:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Viral Gajera",
              jobTitle: "Software Engineer",
              url: "https://viral-gajera.vercel.app",
              image: "https://viral-gajera.vercel.app/profile-picture-2.jpeg",
              sameAs: [
                "https://github.com/Viral-Gajera",
                "https://www.linkedin.com/in/gajera-viral/",
                "https://x.com/ViralGajera218",
                "https://leetcode.com/u/viral_gajera/",
              ],
            }),
          }}
        />
      </head>
      <body className={cn("font-body antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
