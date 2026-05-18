import type { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';

interface Props {
  params: { city: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)!;
  return {
    title: `Способы оплаты металлопроката ${city.in} — Русмет`,
    description: `Актуальные способы оплаты заказов металлопроката РусМет ${city.in}. Безнал, договор, наличные.`,
    alternates: { canonical: `https://rusmet.ru/${params.city}/payment` },
    openGraph: {
      title: `Способы оплаты — РусМет ${city.name}`,
      description: `Удобные способы оплаты металлопроката ${city.in}.`,
    },
  };
}

export { default } from '@/app/payment/page';
