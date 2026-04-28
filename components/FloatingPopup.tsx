'use client';

import { useEffect, useState } from 'react';

export default function FloatingPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('kp-popup-closed')) return;
    const timer = setTimeout(() => setVisible(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem('kp-popup-closed', '1');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#CC0000] px-5 py-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-white font-bold text-base leading-snug">Получите коммерческое предложение</p>
          <p className="text-red-100 text-xs mt-1">Ответим в течение рабочего дня</p>
        </div>
        <button
          type="button"
          onClick={close}
          className="text-white/70 hover:text-white transition-colors flex-shrink-0 mt-0.5"
          aria-label="Закрыть"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="px-5 py-4">
        {submitted ? (
          <p className="text-sm text-gray-600 text-center py-2">Заявка принята! Свяжемся с вами в ближайшее время.</p>
        ) : (
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(close, 3000); }}
          >
            <input
              type="text"
              placeholder="Ваше имя"
              required
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#CC0000]"
            />
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              required
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#CC0000]"
            />
            <button
              type="submit"
              className="bg-[#CC0000] hover:bg-[#aa0000] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
            >
              Получить КП
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
