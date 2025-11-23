import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from "@/lib/utils";\
import { StructuredData } from "@/components/structured-data";\
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  metadataBase: new URL("https://viral-gajera.vercel.app"),
  title: {
    default: "Viral Gajera | Software Engineer & Full Stack Developer",
    template: "%s | Viral Gajera",
  },
  description:
    "Software Engineer at TCS with expertise in React.js, Next.js, Node.js, and full-stack development. Based in Rajkot, Gujarat. View my portfolio, projects, and experience.",
  keywords: [
    "Viral Gajera",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TCS",
    "Rajkot Developer",
    "Web Developer India",
  ],
  authors: [{ name: "Viral Gajera" }],
  creator: "Viral Gajera",
  // Favicon or icons
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viral-gajera.vercel.app",
    title: "Viral Gajera | Software Engineer & Full Stack Developer",
    description:
      "Software Engineer at TCS specializing in React.js, Next.js, and full-stack development.",
    siteName: "Viral Gajera Portfolio",
    images: [
      {
        url: "https://viral-gajera.vercel.app/profile-picture-2.jpeg", // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Viral Gajera - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viral Gajera | Software Engineer & Full Stack Developer",
    description:
      "Software Engineer at TCS specializing in React.js, Next.js, and full-stack development.",
    creator: "@ViralGajera218",
    images: ["/https://viral-gajera.vercel.app/profile-picture-2.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "KkmnV5w32gwPsjHA9TNWyNLQfyjbLIyIqexi-urnTPo", // Add after Google Search Console setup
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
        <meta name="google-site-verification" content="KkmnV5w32gwPsjHA9TNWyNLQfyjbLIyIqexi-urnTPo" />
      </head>
      <body className={cn("font-body antialiased")}>
        <StructuredData />
        {children}
        <Toaster />
        <GoogleAnalytics gaId="G-F817WT42VZ" />
      </body>
    </html>
  );
}
