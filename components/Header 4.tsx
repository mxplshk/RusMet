'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { categoryGroups } from '@/data/categories';
import { useCart } from '@/components/cart/CartProvider';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { itemCount } = useCart();

  const handleCatalogEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setCatalogOpen(true);
  };

  const handleCatalogLeave = () => {
    closeTimerRef.current = setTimeout(() => setCatalogOpen(false), 200);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!catalogOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        setCatalogOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [catalogOpen]);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-[#1a1a1a] text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-1">
            <span className="text-gray-300">Пн–Пт: 9:00–18:00</span>
            <div className="flex items-center gap-4">
              <a href="mailto:info@rusmet.ru" className="text-gray-300 hover:text-white transition-colors">
                info@rusmet.ru
              </a>
              <a href="tel:+74950000000" className="text-white font-semibold hover:text-red-400 transition-colors">
                +7 (495) 000-00-00
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/74951205252"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:brightness-110 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.82 11.82 0 0012.07 0C5.47 0 .1 5.37.1 11.98c0 2.11.55 4.18 1.6 6.01L0 24l6.22-1.63a11.88 11.88 0 005.85 1.49h.01c6.6 0 11.97-5.37 11.97-11.98 0-3.2-1.24-6.2-3.53-8.4zm-8.45 18.37h-.01a9.9 9.9 0 01-5.05-1.39l-.36-.21-3.69.97.98-3.6-.24-.37a9.86 9.86 0 01-1.51-5.27c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.14 1.03 7.01 2.9a9.83 9.83 0 012.9 7c0 5.47-4.45 9.9-9.92 9.9zm5.43-7.4c-.3-.15-1.78-.88-2.06-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.46a8.98 8.98 0 01-1.67-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.44s1.06 2.84 1.2 3.04c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.12-.27-.2-.57-.35z" />
                  </svg>
                </a>
                <a
                  href="https://max.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MAX Messenger"
                  className="w-8 h-8 rounded-full bg-[#1f2937] text-white flex items-center justify-center hover:bg-[#111827] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v7A2.5 2.5 0 0117.5 16H11l-4.5 4V16H6.5A2.5 2.5 0 014 13.5v-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12l2.2-3 1.8 2.4L13.8 9 16 12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-[#CC0000] rounded flex items-center justify-center">
              <span className="text-white font-black text-lg">РМ</span>
            </div>
            <span className="text-2xl font-black text-[#1a1a1a] tracking-tight">
              РусМет
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#1a1a1a]">
            {/* Catalog dropdown */}
            <div
              ref={catalogRef}
              className="static"
              onMouseEnter={handleCatalogEnter}
              onMouseLeave={handleCatalogLeave}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#CC0000] transition-colors py-2"
                aria-expanded={catalogOpen}
              >
                Каталог
                <svg className={`w-4 h-4 transition-transform ${catalogOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Invisible bridge so moving mouse down doesn't close menu */}
              <div className="absolute left-0 right-0 h-3 top-full" />

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.5rem)] w-[min(1180px,95vw)] transition-all duration-200 ${
                  catalogOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={handleCatalogEnter}
                onMouseLeave={handleCatalogLeave}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categoryGroups.map((group) => (
                      <div key={group.id}>
                        <Link
                          href={`/catalog/${group.slug}`}
                          className="font-bold text-[#1a1a1a] mb-3 block hover:text-[#CC0000] transition-colors"
                          onClick={() => setCatalogOpen(false)}
                        >
                          {group.name}
                        </Link>
                        <ul className="space-y-2">
                          {group.children.map((category) => (
                            <li key={category.id}>
                              <Link
                                href={`/catalog/${category.slug}`}
                                className="text-gray-600 hover:text-[#CC0000] transition-colors text-sm"
                                onClick={() => setCatalogOpen(false)}
                              >
                                {category.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/delivery" className="hover:text-[#CC0000] transition-colors">Доставка</Link>
            <Link href="/about" className="hover:text-[#CC0000] transition-colors">О компании</Link>
            <Link href="/payment" className="hover:text-[#CC0000] transition-colors">Способы оплаты</Link>
            <Link href="/contacts" className="hover:text-[#CC0000] transition-colors">Контакты</Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/cart"
              aria-label={`Корзина: ${itemCount} товаров`}
              className="relative w-10 h-10 rounded-lg border border-gray-200 text-[#1a1a1a] flex items-center justify-center hover:border-[#CC0000] hover:text-[#CC0000] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l2.4 10.2a2 2 0 001.95 1.55h7.9a2 2 0 001.95-1.55L22 6H7" />
                <circle cx="10" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] rounded-full bg-[#CC0000] text-white text-[10px] leading-none flex items-center justify-center px-1">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#CC0000] hover:bg-[#aa0000] text-white font-semibold text-sm px-4 py-2.5 rounded transition-colors whitespace-nowrap"
              >
                Заказать звонок
              </button>
            </div>

            {/* Burger */}
            <button
              className="lg:hidden p-2 rounded text-[#1a1a1a]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
            <Link href="/catalog" className="text-sm font-medium hover:text-[#CC0000]" onClick={() => setMenuOpen(false)}>Каталог</Link>
            <Link href="/delivery" className="text-sm font-medium hover:text-[#CC0000]" onClick={() => setMenuOpen(false)}>Доставка</Link>
            <Link href="/about" className="text-sm font-medium hover:text-[#CC0000]" onClick={() => setMenuOpen(false)}>О компании</Link>
            <Link href="/payment" className="text-sm font-medium hover:text-[#CC0000]" onClick={() => setMenuOpen(false)}>Способы оплаты</Link>
            <Link href="/contacts" className="text-sm font-medium hover:text-[#CC0000]" onClick={() => setMenuOpen(false)}>Контакты</Link>
            <button
              onClick={() => {
                setModalOpen(true);
                setMenuOpen(false);
              }}
              className="bg-[#CC0000] text-white font-semibold text-sm px-4 py-2.5 rounded text-center"
            >
              Заказать звонок
            </button>
          </div>
        )}
      </header>

      {/* Call modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setModalOpen(false)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Заказать звонок</h2>
            <p className="text-gray-500 text-sm mb-6">Перезвоним в течение 15 минут</p>
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setModalOpen(false); }}>
              <input
                type="text"
                placeholder="Ваше имя"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000]"
                required
              />
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000]"
                required
              />
              <button type="submit" className="bg-[#CC0000] hover:bg-[#aa0000] text-white font-semibold py-3 rounded-lg transition-colors">
                Перезвоните мне
              </button>
            </form>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" onClick={() => setModalOpen(false)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
