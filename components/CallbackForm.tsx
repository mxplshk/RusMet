'use client';

import { useState } from 'react';

export default function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="callback" className="bg-[#CC0000] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10">
          {/* Left: heading + text */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Получите коммерческое предложение
            </h2>
            <p className="text-red-100 text-lg leading-relaxed">
              Оставьте заявку — перезвоним в течение 15 минут и рассчитаем стоимость под ваш проект
            </p>
          </div>

          {/* Right: form */}
          <div className="flex-1">
            {submitted ? (
              <div className="bg-white/10 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-3">✓</div>
                <div className="text-xl font-bold mb-1">Заявка принята!</div>
                <div className="text-red-100">Перезвоним вам в ближайшее время</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  className="flex-1 rounded-xl px-4 py-3.5 text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="flex-1 rounded-xl px-4 py-3.5 text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="bg-[#1a1a1a] hover:bg-black text-white font-bold px-8 py-3.5 rounded-xl transition-colors w-full"
                >
                  Перезвоните мне
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
