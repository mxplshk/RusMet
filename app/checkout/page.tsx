'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/components/cart/CartProvider';

function formatPrice(price: number) {
  return price.toLocaleString('ru-RU', {
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-black text-[#1a1a1a] mb-3">Заявка отправлена!</h1>
        <p className="text-gray-500 mb-8">
          Спасибо! Менеджер свяжется с вами в ближайшее время.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#CC0000] hover:bg-[#aa0000] text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          На главную
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-4">Корзина пуста</h1>
        <Link href="/catalog" className="text-[#CC0000] hover:underline">Перейти в каталог</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-[#CC0000] transition-colors">Главная</Link>
        <span>/</span>
        <Link href="/cart" className="hover:text-[#CC0000] transition-colors">Корзина</Link>
        <span>/</span>
        <span className="text-[#1a1a1a]">Оформление заказа</span>
      </nav>

      <h1 className="text-3xl font-black text-[#1a1a1a] mb-8">Оформление заказа</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form */}
        <div className="flex-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-6">Контактные данные</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Фамилия</label>
                <input
                  type="text"
                  placeholder="Иванов"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Имя</label>
                <input
                  type="text"
                  placeholder="Иван"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Отчество</label>
                <input
                  type="text"
                  placeholder="Иванович"
                  value={patronymic}
                  onChange={(e) => setPatronymic(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Номер телефона</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-[#CC0000] hover:bg-[#aa0000] text-white font-bold py-4 rounded-xl transition-colors"
              >
                Отправить заявку менеджеру
              </button>
            </form>
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:w-[320px]">
          <div className="bg-[#f5f5f5] rounded-2xl p-6 sticky top-24">
            <h2 className="text-base font-bold text-[#1a1a1a] mb-4">Ваш заказ</h2>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.productId} className="flex justify-between gap-2 text-sm">
                  <span className="text-gray-600 flex-1 leading-snug">{item.name}</span>
                  <span className="font-semibold text-[#1a1a1a] whitespace-nowrap">
                    {item.quantity} × {formatPrice(item.price)} ₽
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">Итого</span>
              <span className="text-xl font-black text-[#CC0000]">{formatPrice(totalPrice)} ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
