import type { Metadata } from 'next';
import Link from 'next/link';
import { getCityBySlug } from '@/lib/cities';

interface Props {
  params: { city: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)!;
  return {
    title: `Способы оплаты металлопроката ${city.in} — Металлург`,
    description: `Актуальные способы оплаты заказов металлопроката Металлург ${city.in}. Безнал, договор, наличные. Доставка ${city.deliveryTime}.`,
    alternates: { canonical: `https://metallurgspb.ru/${params.city}/payment` },
    openGraph: {
      title: `Способы оплаты — Металлург ${city.name}`,
      description: `Удобные способы оплаты металлопроката ${city.in}.`,
    },
  };
}

const paymentMethods = [
  {
    title: 'Безналичный расчёт',
    details: 'Оплата по счёту для юридических лиц и ИП. Предоставляем полный пакет закрывающих документов.',
  },
  {
    title: 'Оплата по договору поставки',
    details: 'Для постоянных клиентов доступны индивидуальные условия, отсрочка и фиксированные прайс-периоды.',
  },
  {
    title: 'Наличный расчёт',
    details: 'Оплата в офисе или при самовывозе по предварительному согласованию с менеджером.',
  },
];

export default function CityPaymentPage({ params }: Props) {
  const city = getCityBySlug(params.city)!;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `https://metallurgspb.ru/${params.city}` },
      { '@type': 'ListItem', position: 2, name: 'Оплата', item: `https://metallurgspb.ru/${params.city}/payment` },
    ],
  };

  return (
    <div className="bg-[#f5f5f5] py-16 sm:py-24 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
          <Link href={`/${params.city}`} className="hover:text-[#CC0000] transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-[#1a1a1a]">Оплата</span>
        </nav>
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-3">Способы оплаты {city.in}</h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Подбираем формат оплаты под задачи клиента из {city.nameRod}: разовые закупки, регулярные поставки и долгосрочные договоры.
            Все финансовые условия фиксируются в счёте или договоре до отгрузки.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {paymentMethods.map((method) => (
            <article key={method.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-base font-bold text-[#1a1a1a] mb-2">{method.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{method.details}</p>
            </article>
          ))}
        </section>

        <section className="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4">Оплата и доставка {city.in}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Для клиентов из {city.nameRod} доступна доставка со склада в Санкт-Петербурге — {city.deliveryTime}.
            Оплата возможна до или после отгрузки в зависимости от договорных условий.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>• Счёт формируется менеджером после подтверждения наличия и объёма заказа.</li>
            <li>• Резерв товара на складе действует до окончания срока, указанного в счёте.</li>
            <li>• Для договорных клиентов действует персональный порядок документооборота.</li>
            <li>• По вопросам реквизитов и актов сверки — через отдел продаж.</li>
          </ul>
        </section>

        <section className="bg-[#1a1a1a] text-white rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-black mb-3">Контакты для оплаты</h2>
          <p className="text-gray-300 mb-4">По вопросам счетов, договоров и оплаты свяжитесь с менеджером:</p>
          <a href={`tel:${city.phone}`} className="text-xl font-bold text-white hover:text-[#CC0000] transition-colors">
            {city.phoneFormatted}
          </a>
          <p className="text-gray-500 text-sm mt-2">Пн–Пт: 9:00–18:00</p>
        </section>
      </div>
    </div>
  );
}
