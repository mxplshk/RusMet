import type { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import ContactsPageContent from '@/components/pages/ContactsPageContent';

interface Props {
  params: { city: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)!;
  return {
    title: `Контакты ${city.in} — РусМет`,
    description: `Адрес, телефон и email РусМет ${city.in}. Металлопрокат оптом и в розницу.`,
    alternates: { canonical: `https://rusmet.ru/${params.city}/contacts` },
  };
}

export default function CityContactsPage({ params }: Props) {
  const city = getCityBySlug(params.city)!;
  return <ContactsPageContent city={city} cityPrefix={`/${params.city}`} />;
}
