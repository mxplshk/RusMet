import { categorySeo } from '@/data/categorySeo';

interface Props {
  groupSlug: string;
  cityIn?: string;
}

export default function CategorySeoBlock({ groupSlug, cityIn }: Props) {
  const seo = categorySeo[groupSlug];
  if (!seo) return null;

  // Подставляем город вместо захардкоженного "в Санкт-Петербурге"
  const localize = (text: string) => {
    if (!cityIn) return text;
    return text
      .replace(/в\s*Санкт-Петербурге и Ленинградской области/g, `${cityIn} и\u00a0Ленинградской области`)
      .replace(/в\s*Санкт-Петербурге и ЛО/g, `${cityIn} и\u00a0ЛО`)
      .replace(/по\s*Санкт-Петербургу и ЛО/g, `${cityIn} и\u00a0по\u00a0Ленинградской области`)
      .replace(/по\s*Санкт-Петербургу/g, `${cityIn}`)
      .replace(/в\s*Санкт-Петербурге/g, `${cityIn}`)
      .replace(/на складе в\s*СПб/g, 'на\u00a0складе в\u00a0Санкт-Петербурге');
  };

  return (
    <section className="mt-10 border-t border-gray-100 pt-10">
      <div className="prose prose-sm max-w-none text-gray-600">
        <p className="text-base leading-relaxed mb-6">{localize(seo.text)}</p>

        {seo.sections.map((sec) => (
          <div key={sec.heading} className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-3">{localize(sec.heading)}</h2>
            {sec.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-gray-600 mb-3 whitespace-pre-line">{localize(para)}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
