import type { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';

interface Props {
  params: { city: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)!;
  return {
    title: `Доставка металлопроката ${city.in} — РусМет`,
    description: `Условия доставки металлопроката ${city.by} и Ленинградской области. Собственный автопарк, отгрузка ${city.deliveryTime}.`,
    alternates: { canonical: `https://rusmet.ru/${params.city}/delivery` },
  };
}

export { default } from '@/app/delivery/page';
