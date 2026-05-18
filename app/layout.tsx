import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/cart/CartProvider';
import CartPopup from '@/components/cart/CartPopup';
import FloatingPopup from '@/components/FloatingPopup';
import CityDetector from '@/components/CityDetector';

export const metadata: Metadata = {
  metadataBase: new URL('https://rusmet.ru'),
  title: {
    default: 'Русмет — металлопрокат оптом и в розницу',
    template: '%s | Русмет',
  },
  description: 'Продажа металлопроката в Санкт-Петербурге и Ленинградской области. Арматура, трубы, листовой прокат, швеллер, уголок.',
  keywords: ['металлопрокат', 'арматура', 'трубы', 'швеллер', 'уголок', 'листовой прокат', 'купить металл', 'Санкт-Петербург'],
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
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Русмет',
    images: [{ url: '/images/logo/main_logo.png', width: 400, height: 120, alt: 'Русмет — металлопрокат' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Русмет — металлопрокат оптом и в розницу',
    description: 'Продажа металлопроката в Санкт-Петербурге и ЛО.',
    images: ['/images/logo/main_logo.png'],
  },
  alternates: {
    canonical: 'https://rusmet.ru',
  },
  other: {
    'yandex-verification': '',  // TODO: добавить код верификации Yandex Webmaster
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Русмет',
  url: 'https://rusmet.ru',
  description: 'Продажа металлопроката в Санкт-Петербурге и Ленинградской области',
  publisher: {
    '@type': 'Organization',
    name: 'Русмет',
    url: 'https://rusmet.ru',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://rusmet.ru/catalog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-white text-[#1a1a1a]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartPopup />
          <FloatingPopup />
          <CityDetector />
        </CartProvider>
      </body>
    </html>
  );
}
