import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import ProductCard from '@/components/ProductCard';
import ProductTabs from '@/components/ProductTabs';
import OrderControls from '@/components/OrderControls';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

const DESCRIPTION_TEMPLATE = (name: string) =>
  `${name} — качественный металлопрокат, производимый в соответствии с требованиями ГОСТ. Изделие изготовлено из стали с высокими прочностными характеристиками, что обеспечивает надёжность и долговечность при эксплуатации. Продукция проходит входной и выходной контроль качества на всех этапах производства. Поставляется со склада в Москве с возможностью оперативной доставки по всей России.`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — цена | Русмет`,
    description: `Купить ${product.name} в Москве. Характеристики, цена, доставка по России.`,
    alternates: { canonical: `https://rusmet.ru/product/${params.slug}` },
    openGraph: {
      title: `${product.name} — Русмет`,
      description: `Купить ${product.name} в Москве. Цена ${product.price.toLocaleString('ru-RU')} ₽ / ${product.unit}.`,
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);

  const formattedPrice = product.price.toLocaleString('ru-RU', {
    minimumFractionDigits: Number.isInteger(product.price) ? 0 : 2,
    maximumFractionDigits: 2,
  });

  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: DESCRIPTION_TEMPLATE(product.name),
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://rusmet.ru' },
      { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://rusmet.ru/catalog' },
      ...(category ? [
        { '@type': 'ListItem', position: 3, name: category.parentName, item: `https://rusmet.ru/catalog/${category.parentSlug}` },
        { '@type': 'ListItem', position: 4, name: category.name, item: `https://rusmet.ru/catalog/${category.slug}` },
        { '@type': 'ListItem', position: 5, name: product.name, item: `https://rusmet.ru/product/${product.slug}` },
      ] : [
        { '@type': 'ListItem', position: 3, name: product.name, item: `https://rusmet.ru/product/${product.slug}` },
      ]),
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-[#CC0000] transition-colors">Главная</Link>
        <span>/</span>
        <Link href="/catalog" className="hover:text-[#CC0000] transition-colors">Каталог</Link>
        {category && (
          <>
            <span>/</span>
            <Link href={`/catalog/${category.parentSlug}`} className="hover:text-[#CC0000] transition-colors">
              {category.parentName}
            </Link>
            <span>/</span>
            <Link href={`/catalog/${category.slug}`} className="hover:text-[#CC0000] transition-colors">
              {category.name}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-[#1a1a1a]">{product.name}</span>
      </nav>

      {/* Main columns */}
      <div className="flex flex-col lg:flex-row gap-10 mb-14">
        {/* Left column — photo placeholder 400×300 */}
        <div className="flex-shrink-0 lg:w-[400px]">
          <div className="w-full lg:w-[400px] h-[300px] bg-[#f0f0f0] rounded-2xl flex flex-col items-center justify-center gap-3 border border-gray-200">
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-400 text-sm font-medium">Фото скоро будет</span>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-2 leading-tight">
            {product.name}
          </h1>

          <p className="text-sm text-gray-400 mb-5">
            Артикул: <span className="font-mono text-gray-500">{product.slug}</span>
          </p>

          {/* Price */}
          <div className="mb-4">
            <span className="text-4xl font-black text-[#CC0000]">{formattedPrice} ₽</span>
            <span className="text-gray-500 text-sm ml-2">за {product.unit}</span>
          </div>

          {/* Size */}
          <div className="inline-flex items-center gap-2 bg-[#f5f5f5] rounded-lg px-4 py-2 mb-6">
            <span className="text-xs text-gray-400">Размер / вес:</span>
            <span className="font-semibold text-sm text-[#1a1a1a]">{product.size}</span>
          </div>

          {/* Order controls (client) */}
          <OrderControls
            productId={product.id}
            slug={product.slug}
            name={product.name}
            price={product.price}
            unit={product.unit}
            size={product.size}
          />
        </div>
      </div>

      {/* Tabs section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 mb-12">
        <ProductTabs productName={product.name} />
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
