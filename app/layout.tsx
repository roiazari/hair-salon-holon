import type { Metadata } from "next";
import content from "../src/data/content.json";
import "./globals.css";

export const metadata: Metadata = {
  title: content.sections.hero.title,
  description: content.sections.hero.subtitle,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: content.sections.hero.title,
    description: content.sections.hero.subtitle,
    url: 'https://hair-salon-holon.vercel.app/',
    siteName: content.owner.name,
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: 'https://hair-salon-holon.vercel.app/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'ישראל ישראלי - מספרה בחולון',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}