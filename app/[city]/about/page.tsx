import type { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';

interface Props {
  params: { city: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)!;
  return {
    title: `О компании РусМет — металлопрокат ${city.in}`,
    description: `История, ключевые цифры и команда РусМет. Поставщик металлопроката ${city.in} и Ленинградской области.`,
    alternates: { canonical: `https://rusmet.ru/${params.city}/about` },
  };
}

export { default } from '@/app/about/page';
