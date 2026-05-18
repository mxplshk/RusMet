import { getCategoryBySlug, getCategoryGroupBySlug } from '@/data/categories';
import type { Metadata } from 'next';
import CatalogSlugContent from '@/components/pages/CatalogSlugContent';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (category) {
    return {
      title: `${category.name} в Санкт-Петербурге — купить оптом и в розницу | Русмет`,
      description: `Купить ${category.name.toLowerCase()} в Санкт-Петербурге и ЛО. Актуальные цены, доставка, большой ассортимент.`,
      alternates: { canonical: `https://rusmet.ru/catalog/${params.slug}` },
      openGraph: {
        title: `${category.name} — Русмет`,
        description: `Купить ${category.name.toLowerCase()} в Санкт-Петербурге. Цены, наличие, доставка.`,
      },
    };
  }
  const group = getCategoryGroupBySlug(params.slug);
  if (group) {
    return {
      title: `${group.name} в Санкт-Петербурге — купить оптом и в розницу | Русмет`,
      description: `Купить ${group.name.toLowerCase()} в Санкт-Петербурге и ЛО. Все виды и размеры, актуальные цены, наличие на складе.`,
      alternates: { canonical: `https://rusmet.ru/catalog/${params.slug}` },
      openGraph: {
        title: `${group.name} — Русмет`,
        description: `${group.name} оптом и в розницу в Санкт-Петербурге. Актуальные цены.`,
      },
    };
  }
  return {};
}

export default function CatalogSlugPage({ params }: Props) {
  return <CatalogSlugContent slug={params.slug} cityPrefix="" />;
}
