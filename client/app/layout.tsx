import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { OrganizationSchema, WebSiteSchema, SoftwareApplicationSchema } from "@/components/seo/structured-data";
import { ServiceWorkerRegister } from "@/components/pwa/service-worker-register";
import { WebVitals } from "@/components/analytics/web-vitals";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Calento - AI Calendar Assistant',
    default: 'Calento - AI Calendar Assistant',
  },
  description: 'Get your time back with AI. The #1 AI calendar app for individuals, teams, and organizations.',
  keywords: ['AI calendar', 'scheduling', 'productivity', 'time management', 'Google Calendar', 'Outlook'],
  authors: [{ name: 'Calento Team' }],
  creator: 'Calento',
  publisher: 'Calento',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Calento',
    title: 'Calento - AI Calendar Assistant',
    description: 'Get your time back with AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Calento - AI Calendar Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calento - AI Calendar Assistant',
    description: 'Get your time back with AI',
    images: ['/og-image.png'],
    creator: '@calento',
  },
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <OrganizationSchema />
        <WebSiteSchema />
        <SoftwareApplicationSchema />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FDF9F7]`} suppressHydrationWarning>
        <ServiceWorkerRegister />
        <WebVitals />
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}