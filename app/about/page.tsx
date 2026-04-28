export const metadata = {
  title: 'О компании — РусМет',
  description: 'История, ключевые цифры и команда компании РусМет.',
};

const milestones = [
  { year: '2012', text: 'Основание компании и первые прямые контракты с металлургическими комбинатами.' },
  { year: '2017', text: 'Запуск собственного складского комплекса и расширение ассортимента до 300+ позиций.' },
  { year: '2021', text: 'Рост логистической сети и регулярные поставки в более чем 40 регионов РФ.' },
  { year: '2024', text: 'Цифровизация продаж и автоматизация обработки заказов для B2B-клиентов.' },
];

const metrics = [
  { value: '12+', label: 'лет на рынке' },
  { value: '15 000 т', label: 'металла на складе' },
  { value: '500+', label: 'товарных позиций' },
  { value: '40+', label: 'регионов поставок' },
];

const team = [
  { role: 'Отдел продаж', desc: 'Консультирует по ассортименту, срокам и коммерческим условиям.' },
  { role: 'Логистика', desc: 'Планирует маршруты и контролирует своевременную отгрузку.' },
  { role: 'Склад и контроль качества', desc: 'Отвечает за комплектацию и проверку соответствия заказа.' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-3">О компании</h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            РусМет — поставщик металлопроката для строительных, производственных и торговых компаний.
            Мы работаем с прозрачными условиями, держим постоянный складской запас и сопровождаем заказ от заявки до отгрузки.
          </p>
        </div>

        <section className="bg-white rounded-2xl p-6 sm:p-8 mb-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Наша история</h2>
          <div className="space-y-4">
            {milestones.map((item) => (
              <article key={item.year} className="flex gap-4">
                <div className="w-16 flex-shrink-0 text-[#CC0000] font-black">{item.year}</div>
                <p className="text-gray-700">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#1a1a1a] text-white rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold mb-5">Ключевые цифры</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((item) => (
              <article key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-2xl font-black text-white mb-1">{item.value}</p>
                <p className="text-sm text-gray-300">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {team.map((item) => (
              <article key={item.role} className="bg-[#fafafa] border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{item.role}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
