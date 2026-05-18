import { notFound } from 'next/navigation';
import { categoryGroups, getCategoryBySlug, getCategoryGroupBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import CategoryCatalogView from '@/components/catalog/CategoryCatalogView';
import CategorySeoBlock from '@/components/CategorySeoBlock';
import FaqAccordion from '@/components/FaqAccordion';
import { defaultCity, getCityBySlug, getCategoryFaq, type City } from '@/lib/cities';

interface Props {
  slug: string;
  cityPrefix?: string;
  citySlug?: string;
}

export default function CatalogSlugContent({ slug, cityPrefix = '', citySlug }: Props) {
  const city: City = (citySlug ? getCityBySlug(citySlug) : undefined) ?? defaultCity;

  const category = getCategoryBySlug(slug);
  if (category) {
    const categoryProducts = getProductsByCategory(slug);
    const faq = getCategoryFaq(category.name, city);
    return (
      <div>
        <CategoryCatalogView
          category={category}
          categoryGroups={categoryGroups}
          products={categoryProducts}
          cityPrefix={cityPrefix}
          cityIn={city.in}
          cityBy={city.by}
          deliveryTime={city.deliveryTime}
        />
        <div className="max-w-7xl mx-auto px-4 pb-10">
          <CategorySeoBlock groupSlug={category.parentSlug} groupName={category.parentName} cityIn={city.in} />
        </div>
        <FaqAccordion items={faq} />
      </div>
    );
  }

  const group = getCategoryGroupBySlug(slug);
  if (!group) notFound();

  const groupProducts = group.children.flatMap((child) => getProductsByCategory(child.slug));
  const faq = getCategoryFaq(group.name, city);
  return (
    <div>
      <CategoryCatalogView
        group={group}
        categoryGroups={categoryGroups}
        products={groupProducts}
        cityPrefix={cityPrefix}
        cityIn={city.in}
        cityBy={city.by}
        deliveryTime={city.deliveryTime}
      />
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <CategorySeoBlock groupSlug={group.slug} groupName={group.name} cityIn={city.in} />
      </div>
      <FaqAccordion items={faq} />
    </div>
  );
}
