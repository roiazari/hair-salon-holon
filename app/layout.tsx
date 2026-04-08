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
    url: 'https://hair-salon-holon.vercel.app/', // אל תשכח לשנות לדומיין האמיתי בעלייה לאוויר
    siteName: content.owner.name,
    locale: 'he_IL',
    type: 'website',
    // === כאן הוספנו את התמונה שתופיע בוואטסאפ/פייסבוק/לינקדאין ===
    images: [
      {
        url: '/images/og-image.jpg', // הנתיב לתמונה שהוספת
        width: 1200,
        height: 630,
        alt: 'ישראל ישראלי - מספרה בחולון', // טקסט חלופי
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