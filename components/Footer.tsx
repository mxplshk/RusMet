import Link from 'next/link';
import Image from 'next/image';
import { categoryGroups } from '@/data/categories';

export default function Footer() {
  const half = Math.ceil(categoryGroups.length / 2);
  const col1 = categoryGroups.slice(0, half);
  const col2 = categoryGroups.slice(half);

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/images/logo/main_logo.png"
                alt="РусМет"
                width={140}
                height={42}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div className="flex flex-col gap-2 text-sm mb-4">
              <a href="tel:+74951205252" className="text-white hover:text-red-400 font-semibold transition-colors">
                +7 (495) 120-52-52
              </a>
              <a href="mailto:info@rusmet.ru" className="text-gray-400 hover:text-white transition-colors">
                info@rusmet.ru
              </a>
            </div>
            <div className="text-xs text-gray-500 leading-relaxed">
              <p>Понедельник–пятница с 9:00 до 18:00</p>
              <p>Суббота, воскресенье — выходной</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">Компания</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">О компании</Link></li>
              <li><Link href="/delivery" className="hover:text-white transition-colors">Доставка</Link></li>
              <li><Link href="/payment" className="hover:text-white transition-colors">Способы оплаты</Link></li>
              <li><Link href="/catalog" className="hover:text-white transition-colors">Весь каталог</Link></li>
              <li><Link href="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              <li><Link href="/#callback" className="hover:text-white transition-colors">Обратный звонок</Link></li>
            </ul>
          </div>

          {/* Catalog col 1 */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">Каталог</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              {col1.map((group) => (
                <li key={group.id}>
                  <Link href={`/catalog/${group.slug}`} className="hover:text-white transition-colors">
                    {group.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog col 2 */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300 invisible">–</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              {col2.map((group) => (
                <li key={group.id}>
                  <Link href={`/catalog/${group.slug}`} className="hover:text-white transition-colors">
                    {group.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-xs text-gray-600 mb-4 leading-relaxed">
            Металлопрокат в Москве и Московской области оптом и в розницу — арматура, трубы, листовой прокат, швеллер, уголок, балка. Доставка по Москве, МО и всей России. Самовывоз со склада бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
            <span>РусМет — все права защищены</span>
            <span>Металлопрокат оптом и в розницу</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
