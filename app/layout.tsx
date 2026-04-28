import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/cart/CartProvider';
import CartPopup from '@/components/cart/CartPopup';
import FloatingPopup from '@/components/FloatingPopup';

export const metadata: Metadata = {
  title: 'Металлопрокат в Москве и Московской области — купить оптом и в розницу | Русмет',
  description: 'Продажа металлопроката в Москве и МО. Арматура, трубы, лист, швеллер и др. Прямые поставки, доставка по России, отгрузка в день заказа.',
  metadataBase: new URL('https://rusmet.ru'),
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Русмет',
    title: 'Металлопрокат в Москве и МО — Русмет',
    description: 'Арматура, трубы, листовой прокат, швеллер, уголок. Оптом и в розницу со склада в Москве.',
    images: [{ url: '/images/logo/main_logo.png', width: 400, height: 120, alt: 'Русмет — металлопрокат' }],
  },
  alternates: { canonical: 'https://rusmet.ru' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-white text-[#1a1a1a]">
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Русмет',
            url: 'https://rusmet.ru',
            telephone: '+74951205252',
            email: 'info@rusmet.ru',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'ул. Промышленная, д. 15, стр. 2',
              addressLocality: 'Москва',
              addressCountry: 'RU',
            },
            openingHours: 'Mo-Fr 09:00-18:00',
          }) }}
        />
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartPopup />
          <FloatingPopup />
        </CartProvider>
      </body>
    </html>
  );
}
