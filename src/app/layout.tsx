import type { Metadata, Viewport } from 'next';
import './globals.css';
import AppShell from '@/components/layout/AppShell';
import { BASE_PATH } from '@/utils/assets';

export const metadata: Metadata = {
  title: 'Dr. Xamraev Dental Clinic | Samarqanddagi Zamonaviy Stomatologiya',
  description: 'Samarqanddagi Germaniya va Shveysariya texnologiyalariga asoslangan xalqaro darajadagi zamonaviy stomatologiya klinikasi. Tish implantatsiyasi, E-max vinirlari, Zoom 4 oqartirish va 100% og‘riqsiz davolash.',
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
    icon: `${BASE_PATH}/images/logo.png`,
    apple: `${BASE_PATH}/images/logo.png`,
  },
  openGraph: {
    title: 'Dr. Xamraev Dental Clinic — Mukammal Tabassum Markazi',
    description: 'Samarqanddagi Germaniya va Shveysariya texnologiyalariga asoslangan zamonaviy stomatologiya klinikasi. Mutlaqo og‘riqsiz.',
    url: 'https://yusufjonovbitcoin-a11y.github.io/dr-xamraev-dental-clinic/',
    siteName: 'Dr. Xamraev Dental Clinic',
    locale: 'uz_UZ',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0066ff',
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
        <link rel="icon" href={`${BASE_PATH}/images/logo.png`} />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
