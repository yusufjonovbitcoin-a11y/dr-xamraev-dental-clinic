import type { Metadata, Viewport } from 'next';
import './globals.css';
import AppShell from '@/components/layout/AppShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://yusufjonovbitcoin-a11y.github.io/dr-xamraev-dental-clinic'),
  title: 'Dr. Xamraev Dental Clinic — Samarqand',
  description: 'Samarqanddagi zamonaviy raqamli stomatologiya klinikasi. Diagnostika, davolash, implantatsiya, ortodontiya va estetik stomatologiya.',
  keywords: [
    'stomatologiya Samarqand',
    'dental clinic',
    'Dr Xamraev',
    'tish davolash Samarqand',
    'tish implantatsiyasi',
    'vinirlar Samarqand',
    'tish oqartirish',
    'breketlar Samarqand'
  ],
  authors: [{ name: 'Dr. Xamraev Dental Clinic' }],
  icons: {
    icon: '/dr-xamraev-dental-clinic/images/logo.png',
    apple: '/dr-xamraev-dental-clinic/images/logo.png',
  },
  openGraph: {
    title: 'Dr. Xamraev Dental Clinic — Samarqand',
    description: 'Diagnostikadan yakuniy natijagacha — zamonaviy stomatologik yordam bir joyda.',
    url: 'https://yusufjonovbitcoin-a11y.github.io/dr-xamraev-dental-clinic/',
    siteName: 'Dr. Xamraev Dental Clinic',
    images: ['/dr-xamraev-dental-clinic/images/logo.png'],
    locale: 'uz_UZ',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#081b22',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/dr-xamraev-dental-clinic/images/logo.png" />
      </head>
      <body className="min-h-screen bg-[#f6faf9] text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
