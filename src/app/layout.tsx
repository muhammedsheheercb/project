import type { Metadata } from 'next';
import {
  Inter,
  Manrope,
  Poppins,
} from 'next/font/google';
import '../styles/globals.css';
import '../styles/ham.css';
import { cn } from '@/lib/utils';
import Providers from './Providers';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
      metadataBase: new URL('http://localhost:3000/'),
  title: 'True Manchester | All-Day Dining & Cocktail Bar in West Didsbury',
  description:
    'Discover True Manchester in West Didsbury’s Burton — a vibrant restaurant and cocktail bar offering innovative all-day dining, creative cocktails, and a warm, welcoming atmosphere. Perfect for brunch, dinner, or special occasions.',
  keywords: [
    'True Manchester',
    'restaurant in West Didsbury',
    'all-day dining Manchester',
    'cocktail bar West Didsbury',
    'Manchester brunch',
    'Manchester dinner spots',
    'Manchester nightlife',
    'West Didsbury restaurants',
  ],
  openGraph: {
    title: 'True Manchester | Restaurant & Cocktail Bar in West Didsbury',
    description:
      'Experience innovative dining and cocktails at True Manchester. A vibrant all-day restaurant and cocktail bar located in West Didsbury’s Burton.',
    // url: 'https://www.truemanchester.com',
    siteName: 'True Manchester',
    images: [
      {
        url: '/images/logo.webp',
        width: 800,
        height: 600,
        alt: 'True Manchester Restaurant & Cocktail Bar',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'True Manchester | All-Day Dining & Cocktail Bar',
    description:
      'Dine, drink, and unwind at True Manchester in West Didsbury. All-day dining and a stylish cocktail bar experience.',
    images: ['/images/logo.webp'],
  },
  icons: [{ rel: 'icon', url: '/images/logo.webp' }],
};



const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'theme-custom flex min-h-screen antialiased',
          manrope.variable,
          poppins.variable,
          inter.variable,
        )}
      >
        <Providers>{children}</Providers>
        <CookieConsent/>
      </body>
    </html>
  );
}
