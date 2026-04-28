import Link from 'next/link';
import Image from 'next/image';
import { categoryGroups } from '@/data/categories';
import { getPopularProducts, getDiscountProducts, products } from '@/data/products';
import { getCategoryImage } from '@/data/categoryImages';
import PopularProductsTabs from '@/components/PopularProductsTabs';
import ReviewsBlock from '@/components/ReviewsBlock';
import CallbackForm from '@/components/CallbackForm';

const stats = [
  { value: '500+', label: 'наименований' },
  { value: '15 000 т', label: 'на складе' },
  { value: '12 лет', label: 'на рынке' },
];

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Наличие на складе',
    desc: 'Более 15 000 тонн металлопроката постоянно в наличии. Отгрузка в день заказа.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Доставка по Москве',
    desc: 'Собственный автопарк. Доставка по Москве и области от 1 рабочего дня.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Оптовые цены',
    desc: 'Прямые поставки от производителей. Специальные условия для постоянных клиентов.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Гарантия качества',
    desc: 'Вся продукция сертифицирована. Предоставляем сертификаты качества на весь металлопрокат.',
  },
];

export default function HomePage() {
  const popularProducts = getPopularProducts();
  const discountProducts = getDiscountProducts();
  const productCounts = products.reduce<Record<string, number>>((acc, product) => {
    acc[product.categorySlug] = (acc[product.categorySlug] ?? 0) + 1;
    return acc;
  }, {});

  // Count products per group (sum of subcategory counts)
  const groupProductCounts = categoryGroups.map((group) => ({
    ...group,
    count: group.children.reduce((sum, child) => sum + (productCounts[child.slug] ?? 0), 0),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] text-white py-20 sm:py-28" style={{ backgroundImage: "url('/images/background/background1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.20))' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#CC0000] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">
              Прямые поставки
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Металлопрокат в Москве<br />
              <span className="text-[#CC0000]">оптом и в розницу</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl">
              Широкий ассортимент стального проката со склада в Москве.<br />
              Отгрузка в день заказа. Доставка по всей России.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link
                href="/catalog"
                className="bg-[#CC0000] hover:bg-[#aa0000] text-white font-bold px-8 py-4 rounded-xl transition-colors text-center"
              >
                Смотреть каталог
              </Link>
              <Link
                href="/contacts"
                className="bg-white hover:bg-gray-100 text-[#1a1a1a] font-bold px-8 py-4 rounded-xl transition-colors text-center"
              >
                Получить прайс
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 flex flex-col">
                  <span className="text-2xl font-black text-white leading-tight">{s.value}</span>
                  <span className="text-gray-300 text-xs mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-[#1a1a1a]">Каталог продукции</h2>
              <p className="text-gray-500 mt-1">{categoryGroups.length} категорий металлопроката</p>
            </div>
            <Link href="/catalog" className="text-[#CC0000] font-semibold text-sm hover:underline hidden sm:block">
              Весь каталог →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {groupProductCounts.map((group) => {
              const imageSrc = getCategoryImage(group.slug);
              return (
                <Link
                  key={group.id}
                  href={`/catalog/${group.slug}`}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-[#CC0000]/30 transition-all group flex flex-col"
                >
                  <div className="w-full h-44 bg-white flex items-center justify-center overflow-hidden transition-colors">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={group.name}
                        width={200}
                        height={144}
                        className="w-full h-full object-contain p-3"
                      />
                    ) : (
                      <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-200" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="8" y="16" width="32" height="16" rx="1" />
                        <line x1="8" y1="24" x2="40" y2="24" />
                      </svg>
                    )}
                  </div>
                  <div className="p-3 text-center">
                    <div className="font-semibold text-[#1a1a1a] text-sm group-hover:text-[#CC0000] transition-colors leading-snug">
                      {group.name}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{group.count} позиций</div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 sm:hidden text-center">
            <Link href="/catalog" className="text-[#CC0000] font-semibold text-sm hover:underline">
              Весь каталог →
            </Link>
          </div>
        </div>
      </section>

      {/* Popular products / Discount tabs */}
      <PopularProductsTabs popularProducts={popularProducts} discountProducts={discountProducts} />

      {/* Advantages */}
      <section id="about" className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#1a1a1a]">Почему выбирают РусМет</h2>
            <p className="text-gray-500 mt-2">12 лет надёжных поставок металлопроката</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-white rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#CC0000]/10 text-[#CC0000] rounded-xl flex items-center justify-center">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] mb-2">{adv.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery info */}
      <section id="delivery" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden" style={{ minHeight: '280px' }}>
            {/* Текст — левые 55% */}
            <div className="relative z-10 w-full lg:w-[55%] p-8 sm:p-10 text-white">
              <h2 className="text-3xl font-black mb-4">Доставка по Москве и России</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Собственный автопарк из 20 автомобилей обеспечивает оперативную доставку по Москве и Подмосковью.
                Отправка транспортными компаниями по всей России.
              </p>
              <ul className="flex flex-col gap-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#CC0000] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  По Москве — от 1 рабочего дня
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#CC0000] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  Московская область — от 2 рабочих дней
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#CC0000] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  Самовывоз со склада — бесплатно
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#CC0000] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  Регионы РФ — по согласованию
                </li>
              </ul>
            </div>
            {/* Машина — правые 45%, обрезается overflow-hidden */}
            <div className="absolute bottom-0 right-0 w-[45%] hidden lg:block">
              <Image
                src="/images/delivery/car.png"
                alt="Доставка металлопроката"
                width={700}
                height={400}
                className="w-full h-auto object-contain object-left-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsBlock />

      {/* Callback */}
      <CallbackForm />
    </>
  );
}
