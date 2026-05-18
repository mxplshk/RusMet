import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import { defaultCity, getCityBySlug, getProductFaq, type City } from '@/lib/cities';
import ProductCard from '@/components/ProductCard';
import ProductTabs from '@/components/ProductTabs';
import OrderControls from '@/components/OrderControls';
import FaqAccordion from '@/components/FaqAccordion';

interface Props {
  slug: string;
  cityPrefix?: string;
  cityName?: string;
  citySlug?: string;
}

export default function ProductPageContent({ slug, cityPrefix = '', cityName, citySlug }: Props) {
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const city: City = (citySlug ? getCityBySlug(citySlug) : undefined) ?? defaultCity;
  const category = getCategoryBySlug(product.categorySlug);

  const description = `${product.name} — качественный металлопрокат, производимый в\u00a0соответствии с\u00a0требованиями ГОСТ. Поставляется со\u00a0склада в\u00a0Санкт-Петербурге с\u00a0доставкой ${city.by}. Сроки — ${city.deliveryTime}.`;

  const formattedPrice = product.price.toLocaleString('ru-RU', {
    minimumFractionDigits: Number.isInteger(product.price) ? 0 : 2,
    maximumFractionDigits: 2,
  });

  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const baseUrl = 'https://rusmet.ru';
  const pageUrl = cityPrefix ? `${baseUrl}${cityPrefix}/product/${slug}` : `${baseUrl}/product/${slug}`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description,
    sku: product.slug,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'RUB',
      price: product.price,
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Русмет' },
    },
  };

  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: cityPrefix ? `${baseUrl}${cityPrefix}/` : baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: `${baseUrl}${cityPrefix}/catalog` },
    ...(category ? [
      { '@type': 'ListItem', position: 3, name: category.parentName, item: `${baseUrl}${cityPrefix}/catalog/${category.parentSlug}` },
      { '@type': 'ListItem', position: 4, name: category.name, item: `${baseUrl}${cityPrefix}/catalog/${category.slug}` },
      { '@type': 'ListItem', position: 5, name: product.name, item: pageUrl },
    ] : [
      { '@type': 'ListItem', position: 3, name: product.name, item: pageUrl },
    ]),
  ];

  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: breadcrumbItems };

  const faq = getProductFaq(product.name, city);

  return (
    <div className="max-w-7xl mx-auto px-4 py-14 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link href={`${cityPrefix}/`} className="hover:text-[#CC0000] transition-colors">Главная</Link>
        <span>/</span>
        <Link href={`${cityPrefix}/catalog`} className="hover:text-[#CC0000] transition-colors">Каталог</Link>
        {category && (
          <>
            <span>/</span>
            <Link href={`${cityPrefix}/catalog/${category.parentSlug}`} className="hover:text-[#CC0000] transition-colors">{category.parentName}</Link>
            <span>/</span>
            <Link href={`${cityPrefix}/catalog/${category.slug}`} className="hover:text-[#CC0000] transition-colors">{category.name}</Link>
          </>
        )}
        <span>/</span>
        <span className="text-[#1a1a1a]">{product.name}</span>
      </nav>

      {/* Main */}
      <div className="flex flex-col lg:flex-row gap-10 mb-14">
        <div className="flex-shrink-0 lg:w-[400px]">
          <div className="w-full lg:w-[400px] h-[300px] bg-[#f0f0f0] rounded-2xl flex flex-col items-center justify-center gap-3 border border-gray-200">
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-400 text-sm font-medium">Фото скоро будет</span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#1a1a1a] mb-2 leading-tight">
            {product.name}{cityName ? ` ${cityName}` : ''}
          </h1>
          <p className="text-sm text-gray-400 mb-5">
            Артикул: <span className="font-mono text-gray-500">{product.slug}</span>
          </p>
          <div className="mb-4">
            <span className="text-3xl font-black text-[#CC0000]">{formattedPrice}&nbsp;&#8381;</span>
            <span className="text-gray-500 text-sm ml-2">за&nbsp;{product.unit}</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#f5f5f5] rounded-lg px-4 py-2 mb-6">
            <span className="text-xs text-gray-400">Размер / вес:</span>
            <span className="font-semibold text-sm text-[#1a1a1a]">{product.size}</span>
          </div>
          <OrderControls productId={product.id} slug={product.slug} name={product.name} price={product.price} unit={product.unit} size={product.size} />
        </div>
      </div>

      {/* Description with city */}
      <div className="bg-[#f5f5f5] rounded-2xl p-6 sm:p-8 mb-8">
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 mb-12">
        <ProductTabs productName={product.name} cityIn={city.in} />
      </div>

      {/* FAQ */}
      <FaqAccordion items={faq} />

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((p) => <ProductCard key={p.id} product={p} cityPrefix={cityPrefix} />)}
          </div>
        </section>
      )}
    </div>
  );
}
