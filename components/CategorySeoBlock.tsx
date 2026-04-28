import { categorySeo } from '@/data/categorySeo';

interface Props {
  groupSlug: string;
  groupName: string;
}

export default function CategorySeoBlock({ groupSlug, groupName }: Props) {
  const seo = categorySeo[groupSlug];
  if (!seo) return null;

  return (
    <section className="mt-10 border-t border-gray-100 pt-10">
      <div className="prose prose-sm max-w-none text-gray-600">
        <p className="text-base leading-relaxed mb-6">{seo.text}</p>

        {seo.sections.map((sec) => (
          <div key={sec.heading} className="mb-6">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">{sec.heading}</h2>
            {sec.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-gray-600 mb-3 whitespace-pre-line">{para}</p>
            ))}
          </div>
        ))}

        {seo.faq.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-5">
              Часто задаваемые вопросы — {groupName}
            </h2>
            <div className="space-y-4">
              {seo.faq.map((item) => (
                <div key={item.q} className="border border-gray-100 rounded-xl p-5 bg-[#fafafa]">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1.5 text-sm">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
