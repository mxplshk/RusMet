export const metadata = {
  title: 'Способы оплаты — РусМет',
  description: 'Актуальные способы оплаты заказов металлопроката в компании РусМет.',
};

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

export default function PaymentPage() {
  return (
    <div className="bg-[#f5f5f5] py-16 sm:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-3">Способы оплаты</h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Подбираем формат оплаты под задачи клиента: разовые закупки, регулярные поставки и долгосрочные договоры.
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

        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-4">Важная информация</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Счёт формируется менеджером после подтверждения наличия и объёма заказа.</li>
            <li>• Резерв товара на складе действует до окончания срока, указанного в счёте.</li>
            <li>• Для договорных клиентов действует персональный порядок документооборота.</li>
            <li>• По вопросам реквизитов и актов сверки — через отдел продаж.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
