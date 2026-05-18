import type { Metadata } from 'next';
import { defaultCity } from '@/lib/cities';
import ContactsPageContent from '@/components/pages/ContactsPageContent';

export const metadata: Metadata = {
  title: 'Контакты РусМет в Санкт-Петербурге — адрес, телефон, email',
  description: 'Контактные данные компании РусМет. Адрес склада, телефон, email. Металлопрокат оптом и в розницу в Санкт-Петербурге.',
  alternates: { canonical: 'https://rusmet.ru/contacts' },
  openGraph: {
    title: 'Контакты — РусМет',
    description: 'Адрес, телефон и email компании РусМет в Санкт-Петербурге.',
  },
};

export default function ContactsPage() {
  return <ContactsPageContent city={defaultCity} cityPrefix="" />;
}
