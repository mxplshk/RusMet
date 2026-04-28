import { notFound } from 'next/navigation';
import { categoryGroups, getCategoryBySlug, getCategoryGroupBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import type { Metadata } from 'next';
import CategoryCatalogView from '@/components/catalog/CategoryCatalogView';
import CategorySeoBlock from '@/components/CategorySeoBlock';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (category) {
    return {
      title: `${category.name} в Москве — купить оптом и в розницу | Русмет`,
      description: `Купить ${category.name.toLowerCase()} в Москве и МО. Актуальные цены, доставка, большой ассортимент.`,
      alternates: { canonical: `https://rusmet.ru/catalog/${params.slug}` },
      openGraph: {
        title: `${category.name} — Русмет`,
        description: `Купить ${category.name.toLowerCase()} в Москве. Цены, наличие, доставка.`,
      },
    };
  }
  const group = getCategoryGroupBySlug(params.slug);
  if (group) {
    return {
      title: `${group.name} в Москве — купить оптом и в розницу | Русмет`,
      description: `Купить ${group.name.toLowerCase()} в Москве и МО. Все виды и размеры, актуальные цены, наличие на складе.`,
      alternates: { canonical: `https://rusmet.ru/catalog/${params.slug}` },
      openGraph: {
        title: `${group.name} — Русмет`,
        description: `${group.name} оптом и в розницу в Москве. Актуальные цены.`,
      },
    };
  }
  return {};
}

export default function CatalogSlugPage({ params }: Props) {
  // Сначала проверяем подкатегорию
  const category = getCategoryBySlug(params.slug);
  if (category) {
    const categoryProducts = getProductsByCategory(params.slug);
    return (
      <div>
        <CategoryCatalogView
          category={category}
          categoryGroups={categoryGroups}
          products={categoryProducts}
        />
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <CategorySeoBlock groupSlug={category.parentSlug} groupName={category.parentName} />
        </div>
      </div>
    );
  }

  // Затем группу — показываем все товары группы сразу
  const group = getCategoryGroupBySlug(params.slug);
  if (!group) notFound();

  const groupProducts = group.children.flatMap((child) => getProductsByCategory(child.slug));

  return (
    <div>
      <CategoryCatalogView
        group={group}
        categoryGroups={categoryGroups}
        products={groupProducts}
      />
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <CategorySeoBlock groupSlug={group.slug} groupName={group.name} />
      </div>
    </div>
  );
}
