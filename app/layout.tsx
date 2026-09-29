import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ClgBites — Vijayawada on your hostel doorstep',
  description:
    'Food delivery built for VIT-AP hostellers. No platform fees, no GST games. ₹10 delivery straight from Mandadam & Vijayawada, the city of victory.',
  applicationName: 'ClgBites',
  keywords: [
    'ClgBites',
    'VIT-AP food delivery',
    'Vijayawada food',
    'Mandadam',
    'college food delivery',
    'hostel food delivery',
    'biryani delivery Amaravati',
  ],
  authors: [{ name: 'ClgBites' }],
  openGraph: {
    title: 'ClgBites — Vijayawada on your hostel doorstep',
    description:
      'Food delivery built for VIT-AP hostellers. ₹10 delivery, no platform fees. Straight from Mandadam & Vijayawada.',
    type: 'website',
    siteName: 'ClgBites',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClgBites',
    description: 'Vijayawada on your hostel doorstep.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0B0B0F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="grain bg-ink text-ivory antialiased">{children}</body>
    </html>
  );
}
