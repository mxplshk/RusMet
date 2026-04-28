import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Контакты — РусМет',
  description: 'Адрес, телефон и email компании РусМет. Металлопрокат оптом в Москве.',
};

const requisites = [
  ['Полное наименование', 'ООО «РусМет»'],
  ['ИНН', '7700000000'],
  ['КПП', '770001001'],
  ['ОГРН', '1027700000000'],
  ['Юридический адрес', 'г. Москва, ул. Промышленная, д. 15, стр. 2'],
  ['Банк', 'ПАО Сбербанк'],
  ['Р/с', '40702810000000000000'],
  ['К/с', '30101810400000000225'],
  ['БИК', '044525225'],
];

export default function ContactsPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-[#CC0000] transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">Контакты</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-10">Контакты</h1>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 border border-gray-100">
            <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Телефон</div>
              <a href="tel:+74951205252" className="text-xl font-bold text-[#1a1a1a] hover:text-[#CC0000] transition-colors">
                +7 (495) 120-52-52
              </a>
              <div className="text-sm text-gray-500 mt-1">Пн–Пт: 9:00–18:00</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 border border-gray-100">
            <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Email</div>
              <a href="mailto:info@rusmet.ru" className="text-xl font-bold text-[#1a1a1a] hover:text-[#CC0000] transition-colors">
                info@rusmet.ru
              </a>
              <div className="text-sm text-gray-500 mt-1">Ответ в течение часа</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 border border-gray-100">
            <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Адрес склада</div>
              <div className="text-base font-bold text-[#1a1a1a] leading-snug">
                г. Москва, ул. Промышленная, д. 15, стр. 2
              </div>
              <div className="text-sm text-gray-500 mt-1">м. Текстильщики</div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-2xl h-80 flex items-center justify-center mb-10 border border-gray-100">
          <div className="text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="font-semibold">Карта</p>
            <p className="text-sm">г. Москва, ул. Промышленная, 15</p>
          </div>
        </div>

        {/* Requisites */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6">Реквизиты</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
            {requisites.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 py-3 border-b border-gray-100 text-sm">
                <span className="text-gray-400 flex-shrink-0">{label}</span>
                <span className="font-medium text-[#1a1a1a] text-right">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact form — red block */}
        <section className="bg-[#CC0000] rounded-2xl p-6 sm:p-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-1">Свяжитесь с нами</h2>
            <p className="text-red-100 text-sm mb-6">Напишите нам — ответим в течение рабочего дня</p>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="bg-white/10 border border-white/20 text-white placeholder-red-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-white"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="bg-white/10 border border-white/20 text-white placeholder-red-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-white"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="bg-white/10 border border-white/20 text-white placeholder-red-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-white"
              />
              <textarea
                rows={4}
                placeholder="Ваше сообщение..."
                className="bg-white/10 border border-white/20 text-white placeholder-red-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-white resize-none"
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-[#CC0000] font-bold py-4 rounded-xl transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
