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
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Русмет',
    images: [{ url: '/images/logo/main_logo.png', width: 400, height: 120, alt: 'Русмет — металлопрокат' }],
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
