import type { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';

interface Props {
  params: { city: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)!;
  return {
    title: `Способы оплаты — РусМет ${city.in}`,
    description: `Актуальные способы оплаты заказов металлопроката РусМет ${city.in}.`,
    alternates: { canonical: `https://rusmet.ru/${params.city}/payment` },
  };
}

export { default } from '@/app/payment/page';
