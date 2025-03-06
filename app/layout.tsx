import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SEO from '@/components/meta/Seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GustiRafi - Full Stack Web Developer',
  description: 'Full Stack Web Developer specializing in modern and responsive web applications.',
  keywords: 'Full Stack Developer, Web Developer, Vue, Nuxt, React, Next, Laravel, JavaScript, TypeScript',
  authors: [{ name: 'GustiRafi', url: 'https://gusti.uno' }],
  openGraph: {
    title: 'GustiRafi - Full Stack Web Developer',
    description: 'Full Stack Web Developer specializing in modern and responsive web applications.',
    url: 'https://gusti.uno',
    siteName: 'GUSTI.UNO',
    images: '/logo.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GustiRafi - Full Stack Web Developer',
    description: 'Full Stack Web Developer specializing in modern and responsive web applications.',
    creator: '@gustirafi5',
    images: '/preview.png',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SEO />
        {children}
      </body>
    </html>
  );
}