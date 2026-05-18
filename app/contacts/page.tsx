import type { Metadata } from 'next';
import { defaultCity } from '@/lib/cities';
import ContactsPageContent from '@/components/pages/ContactsPageContent';

export const metadata: Metadata = {
  title: 'Контакты — РусМет',
  description: 'Адрес, телефон и email компании РусМет. Металлопрокат оптом в Санкт-Петербурге.',
};

export default function ContactsPage() {
  return <ContactsPageContent city={defaultCity} cityPrefix="" />;
}
