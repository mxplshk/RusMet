'use client';

import { useState } from 'react';
import { useCart } from '@/components/cart/CartProvider';

interface Props {
  productId: number;
  slug: string;
  name: string;
  price: number;
  unit: string;
  size: string;
}

export default function OrderControls({ productId, slug, name, price, unit, size }: Props) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [orderName, setOrderName] = useState('');
  const [phone, setPhone] = useState('');
  const [quickSent, setQuickSent] = useState(false);

  const handleAddToCart = () => {
    addToCart({ productId, slug, name, price, unit, size }, qty);
  };

  const handleQuickOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickSent(true);
  };

  return (
    <div className="space-y-4">
      {/* Quantity stepper */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-10 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-xl font-bold transition-colors"
          >
            −
          </button>
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
            className="w-14 h-12 text-center font-semibold text-[#1a1a1a] border-x border-gray-200 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-10 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-xl font-bold transition-colors"
          >
            +
          </button>
        </div>
        <span className="text-sm text-gray-400">{unit}</span>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={handleAddToCart}
          className="flex-1 min-w-[160px] bg-[#CC0000] hover:bg-[#aa0000] text-white font-bold py-4 rounded-xl transition-colors"
        >
          В корзину
        </button>
        <a
          href="tel:+74950000000"
          className="flex-1 min-w-[160px] bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] font-bold py-4 rounded-xl transition-colors text-center"
        >
          Заказать звонок
        </a>
      </div>

      {/* Quick order */}
      <div className="border border-gray-200 rounded-xl p-5">
        <h3 className="font-bold text-[#1a1a1a] mb-3 text-sm">Быстрый заказ</h3>
        {quickSent ? (
          <p className="text-sm text-green-600 font-medium">Спасибо! Менеджер свяжется с вами в ближайшее время.</p>
        ) : (
          <form onSubmit={handleQuickOrder} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Ваше имя"
              value={orderName}
              onChange={(e) => setOrderName(e.target.value)}
              required
              className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
            />
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#CC0000] hover:bg-[#aa0000] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
