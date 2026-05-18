import type { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';

interface Props {
  params: { city: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)!;
  return {
    title: `Доставка металлопроката ${city.in} — сроки и условия | Русмет`,
    description: `Условия доставки металлопроката ${city.by} и Ленинградской области. Собственный автопарк, отгрузка ${city.deliveryTime}.`,
    alternates: { canonical: `https://rusmet.ru/${params.city}/delivery` },
    openGraph: {
      title: `Доставка металлопроката ${city.in} — Русмет`,
      description: `Быстрая доставка металлопроката ${city.by}. Отгрузка ${city.deliveryTime}.`,
    },
  };
}

export { default } from '@/app/delivery/page';
