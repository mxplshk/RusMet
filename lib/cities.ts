export type City = {
  slug: string;
  name: string;           // "Санкт-Петербург"
  nameRod: string;        // "Санкт-Петербурга" (родительный)
  in: string;             // "в\u00a0Санкт-Петербурге"
  by: string;             // "по\u00a0Санкт-Петербургу"
  region: string;         // "Ленинградской области"
  phone: string;
  phoneFormatted: string;
  address: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  metro?: string;
  mapLink: string;
  geoRegion: string;
  coords: string;
  aliases: string[];
  deliveryTime: string;
  distanceNote: string;
  uniqueIndex: number;
};

export const cities: City[] = [
  {
    slug: 'sankt-peterburg',
    name: 'Санкт-Петербург',
    nameRod: 'Санкт-Петербурга',
    in: 'в\u00a0Санкт-Петербурге',
    by: 'по\u00a0Санкт-Петербургу',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Санкт-Петербург',
    postalCode: '196128',
    metro: 'м.\u00a0Московские ворота',
    mapLink: 'https://yandex.ru/maps/?text=Санкт-Петербург+Складская+10',
    geoRegion: 'RU-SPE',
    coords: '59.9343;30.3351',
    aliases: ['saint petersburg', 'st petersburg', 'spb', 'санкт-петербург', 'петербург', 'спб', 'питер'],
    deliveryTime: 'в\u00a0день заказа',
    distanceNote: 'Склад находится в\u00a0Санкт-Петербурге',
    uniqueIndex: 0,
  },
  {
    slug: 'vsevolozhsk',
    name: 'Всеволожск',
    nameRod: 'Всеволожска',
    in: 'во\u00a0Всеволожске',
    by: 'по\u00a0Всеволожску',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Всеволожск',
    postalCode: '188640',
    mapLink: 'https://yandex.ru/maps/?text=Всеволожск',
    geoRegion: 'RU-LEN',
    coords: '60.0205;30.6536',
    aliases: ['vsevolozhsk', 'всеволожск'],
    deliveryTime: '1\u00a0день',
    distanceNote: 'рядом с\u00a0Санкт-Петербургом',
    uniqueIndex: 1,
  },
  {
    slug: 'gatchina',
    name: 'Гатчина',
    nameRod: 'Гатчины',
    in: 'в\u00a0Гатчине',
    by: 'по\u00a0Гатчине',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Гатчина',
    postalCode: '188300',
    mapLink: 'https://yandex.ru/maps/?text=Гатчина',
    geoRegion: 'RU-LEN',
    coords: '59.5764;29.7707',
    aliases: ['gatchina', 'гатчина'],
    deliveryTime: '1\u00a0день',
    distanceNote: '45\u00a0км от\u00a0Санкт-Петербурга',
    uniqueIndex: 2,
  },
  {
    slug: 'vyborg',
    name: 'Выборг',
    nameRod: 'Выборга',
    in: 'в\u00a0Выборге',
    by: 'по\u00a0Выборгу',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Выборг',
    postalCode: '188800',
    mapLink: 'https://yandex.ru/maps/?text=Выборг',
    geoRegion: 'RU-LEN',
    coords: '60.7092;28.7427',
    aliases: ['vyborg', 'выборг'],
    deliveryTime: '1–2\u00a0дня',
    distanceNote: '130\u00a0км от\u00a0Санкт-Петербурга',
    uniqueIndex: 3,
  },
  {
    slug: 'sosnovy-bor',
    name: 'Сосновый\u00a0Бор',
    nameRod: 'Соснового\u00a0Бора',
    in: 'в\u00a0Сосновом\u00a0Бору',
    by: 'по\u00a0Сосновому\u00a0Бору',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Сосновый Бор',
    postalCode: '188540',
    mapLink: 'https://yandex.ru/maps/?text=Сосновый+Бор',
    geoRegion: 'RU-LEN',
    coords: '59.8989;29.0867',
    aliases: ['sosnovy bor', 'сосновый бор'],
    deliveryTime: '1\u00a0день',
    distanceNote: '80\u00a0км от\u00a0Санкт-Петербурга',
    uniqueIndex: 4,
  },
  {
    slug: 'kolpino',
    name: 'Колпино',
    nameRod: 'Колпино',
    in: 'в\u00a0Колпино',
    by: 'по\u00a0Колпино',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Колпино',
    postalCode: '196650',
    mapLink: 'https://yandex.ru/maps/?text=Колпино',
    geoRegion: 'RU-SPE',
    coords: '59.7475;30.5897',
    aliases: ['kolpino', 'колпино'],
    deliveryTime: '1\u00a0день',
    distanceNote: 'район Санкт-Петербурга',
    uniqueIndex: 5,
  },
  {
    slug: 'pushkin',
    name: 'Пушкин',
    nameRod: 'Пушкина',
    in: 'в\u00a0Пушкине',
    by: 'по\u00a0Пушкину',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Пушкин',
    postalCode: '196600',
    mapLink: 'https://yandex.ru/maps/?text=Пушкин+Ленинградская+область',
    geoRegion: 'RU-SPE',
    coords: '59.7141;30.3956',
    aliases: ['pushkin', 'пушкин'],
    deliveryTime: '1\u00a0день',
    distanceNote: 'район Санкт-Петербурга',
    uniqueIndex: 6,
  },
  {
    slug: 'pavlovsk',
    name: 'Павловск',
    nameRod: 'Павловска',
    in: 'в\u00a0Павловске',
    by: 'по\u00a0Павловску',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Павловск',
    postalCode: '196620',
    mapLink: 'https://yandex.ru/maps/?text=Павловск+Санкт-Петербург',
    geoRegion: 'RU-SPE',
    coords: '59.6863;30.4533',
    aliases: ['pavlovsk', 'павловск'],
    deliveryTime: '1\u00a0день',
    distanceNote: 'район Санкт-Петербурга',
    uniqueIndex: 7,
  },
  {
    slug: 'kronshtadt',
    name: 'Кронштадт',
    nameRod: 'Кронштадта',
    in: 'в\u00a0Кронштадте',
    by: 'по\u00a0Кронштадту',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Кронштадт',
    postalCode: '197760',
    mapLink: 'https://yandex.ru/maps/?text=Кронштадт',
    geoRegion: 'RU-SPE',
    coords: '59.9961;29.7667',
    aliases: ['kronshtadt', 'кронштадт'],
    deliveryTime: '1\u00a0день',
    distanceNote: 'район Санкт-Петербурга',
    uniqueIndex: 8,
  },
  {
    slug: 'kingisepp',
    name: 'Кингисепп',
    nameRod: 'Кингисеппа',
    in: 'в\u00a0Кингисеппе',
    by: 'по\u00a0Кингисеппу',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Кингисепп',
    postalCode: '188480',
    mapLink: 'https://yandex.ru/maps/?text=Кингисепп',
    geoRegion: 'RU-LEN',
    coords: '59.3733;28.6036',
    aliases: ['kingisepp', 'кингисепп'],
    deliveryTime: '1–2\u00a0дня',
    distanceNote: '130\u00a0км от\u00a0Санкт-Петербурга',
    uniqueIndex: 9,
  },
  {
    slug: 'tosno',
    name: 'Тосно',
    nameRod: 'Тосно',
    in: 'в\u00a0Тосно',
    by: 'по\u00a0Тосно',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Тосно',
    postalCode: '187000',
    mapLink: 'https://yandex.ru/maps/?text=Тосно',
    geoRegion: 'RU-LEN',
    coords: '59.5411;30.8778',
    aliases: ['tosno', 'тосно'],
    deliveryTime: '1\u00a0день',
    distanceNote: '50\u00a0км от\u00a0Санкт-Петербурга',
    uniqueIndex: 10,
  },
  {
    slug: 'kirovsk',
    name: 'Кировск',
    nameRod: 'Кировска',
    in: 'в\u00a0Кировске',
    by: 'по\u00a0Кировску',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Кировск',
    postalCode: '187342',
    mapLink: 'https://yandex.ru/maps/?text=Кировск+Ленинградская+область',
    geoRegion: 'RU-LEN',
    coords: '59.8811;30.9900',
    aliases: ['kirovsk', 'кировск'],
    deliveryTime: '1\u00a0день',
    distanceNote: '35\u00a0км от\u00a0Санкт-Петербурга',
    uniqueIndex: 11,
  },
  {
    slug: 'volhov',
    name: 'Волхов',
    nameRod: 'Волхова',
    in: 'в\u00a0Волхове',
    by: 'по\u00a0Волхову',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Волхов',
    postalCode: '187400',
    mapLink: 'https://yandex.ru/maps/?text=Волхов',
    geoRegion: 'RU-LEN',
    coords: '59.9264;32.3381',
    aliases: ['volkhov', 'volhov', 'волхов'],
    deliveryTime: '2\u00a0дня',
    distanceNote: '120\u00a0км от\u00a0Санкт-Петербурга',
    uniqueIndex: 12,
  },
  {
    slug: 'luga',
    name: 'Луга',
    nameRod: 'Луги',
    in: 'в\u00a0Луге',
    by: 'по\u00a0Луге',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Луга',
    postalCode: '188230',
    mapLink: 'https://yandex.ru/maps/?text=Луга+Ленинградская+область',
    geoRegion: 'RU-LEN',
    coords: '58.7372;29.8453',
    aliases: ['luga', 'луга'],
    deliveryTime: '1–2\u00a0дня',
    distanceNote: '140\u00a0км от\u00a0Санкт-Петербурга',
    uniqueIndex: 13,
  },
  {
    slug: 'priozersk',
    name: 'Приозерск',
    nameRod: 'Приозерска',
    in: 'в\u00a0Приозерске',
    by: 'по\u00a0Приозерску',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Приозерск',
    postalCode: '188760',
    mapLink: 'https://yandex.ru/maps/?text=Приозерск',
    geoRegion: 'RU-LEN',
    coords: '61.0389;30.1231',
    aliases: ['priozersk', 'приозерск'],
    deliveryTime: '1–2\u00a0дня',
    distanceNote: '145\u00a0км от\u00a0Санкт-Петербурга',
    uniqueIndex: 14,
  },
  {
    slug: 'lomonosov',
    name: 'Ломоносов',
    nameRod: 'Ломоносова',
    in: 'в\u00a0Ломоносове',
    by: 'по\u00a0Ломоносову',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Ломоносов',
    postalCode: '198412',
    mapLink: 'https://yandex.ru/maps/?text=Ломоносов+Санкт-Петербург',
    geoRegion: 'RU-SPE',
    coords: '59.9064;29.7728',
    aliases: ['lomonosov', 'ломоносов'],
    deliveryTime: '1\u00a0день',
    distanceNote: 'район Санкт-Петербурга',
    uniqueIndex: 15,
  },
  {
    slug: 'sertolovo',
    name: 'Сертолово',
    nameRod: 'Сертолово',
    in: 'в\u00a0Сертолово',
    by: 'по\u00a0Сертолово',
    region: 'Ленинградской области',
    phone: '+78121234567',
    phoneFormatted: '+7 (812) 123-45-67',
    address: 'Доставка из\u00a0г.\u00a0Санкт-Петербург, ул.\u00a0Складская, д.\u00a010, лит.\u00a0А',
    streetAddress: 'ул. Складская, д. 10, лит. А',
    addressLocality: 'Сертолово',
    postalCode: '188650',
    mapLink: 'https://yandex.ru/maps/?text=Сертолово',
    geoRegion: 'RU-LEN',
    coords: '60.1453;30.2106',
    aliases: ['sertolovo', 'сертолово'],
    deliveryTime: '1\u00a0день',
    distanceNote: '25\u00a0км от\u00a0Санкт-Петербурга',
    uniqueIndex: 16,
  },
];

export const defaultCity = cities[0];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCityStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function detectCityByName(name: string): City | undefined {
  const lower = name.toLowerCase();
  return cities.find((c) =>
    c.aliases.some((alias) => alias.toLowerCase() === lower || lower.includes(alias.toLowerCase()))
  );
}

// ── Уникализация контента ──────────────────────────────────────

// Hero: "{ключ} {в городе} {УТП красный}" — одна строка, УТП варьируется
const heroUtpVariations = [
  'с\u00a0бесплатной доставкой',
  'оптом и\u00a0в\u00a0розницу',
  'с\u00a0быстрой доставкой',
  'без\u00a0посредников',
  'со\u00a0склада',
  'по\u00a0выгодным ценам',
  'с\u00a0отгрузкой в\u00a0день заказа',
  'от\u00a0производителя',
  'с\u00a0доставкой на\u00a0объект',
];

const heroKeywords = [
  'Металлопрокат',
  'Продажа металлопроката',
  'Купить металлопрокат',
  'Стальной прокат',
  'Продажа металла',
];

const heroBadgeTexts = [
  'Прямые поставки',
  'Складские запасы',
  'Без посредников',
  'Надёжный поставщик',
  'Собственный автопарк',
  'Отгрузка в\u00a0день заказа',
];

const heroStatSets: { value: string; label: string }[][] = [
  [{ value: '500+', label: 'наименований' }, { value: '15\u00a0000\u00a0т', label: 'на\u00a0складе' }, { value: '12\u00a0лет', label: 'на\u00a0рынке' }],
  [{ value: '15\u00a0000\u00a0т', label: 'постоянно на\u00a0складе' }, { value: '500+', label: 'позиций' }, { value: '20+', label: 'машин' }],
  [{ value: '12\u00a0лет', label: 'на\u00a0рынке' }, { value: '40+', label: 'регионов' }, { value: '500+', label: 'наименований' }],
  [{ value: '500+', label: 'позиций' }, { value: '15\u00a0000\u00a0т', label: 'на\u00a0складе' }, { value: '12\u00a0лет', label: 'опыта' }],
  [{ value: '20+', label: 'автомобилей' }, { value: '15\u00a0000\u00a0т', label: 'в\u00a0наличии' }, { value: '500+', label: 'позиций' }],
];

// Уникальные плашки-статы: базовые + городская
function getCityStats(city: City, baseStats: { value: string; label: string }[]): { value: string; label: string }[] {
  const idx = city.uniqueIndex;
  const citySpecific = { value: city.deliveryTime, label: `доставка ${city.by}` };
  const result = [...baseStats];
  result.splice(idx % (result.length + 1), 0, citySpecific);
  return result.slice(0, 4);
}

const advantageSets: Array<{ title: string; desc: string }[]> = [
  [
    { title: 'Постоянное наличие', desc: 'Более 15\u00a0000\u00a0тонн металлопроката всегда на\u00a0складе. Отгрузка в\u00a0день заказа.' },
    { title: 'Собственный автопарк', desc: 'Доставим металлопрокат вовремя собственным транспортом по\u00a0всей Ленинградской области.' },
    { title: 'Оптовые цены', desc: 'Прямые поставки от\u00a0производителей. Индивидуальные условия для\u00a0постоянных клиентов.' },
    { title: 'Гарантия качества', desc: 'Вся продукция сертифицирована. Предоставляем паспорта и\u00a0сертификаты на\u00a0весь прокат.' },
  ],
  [
    { title: 'Складские остатки без\u00a0ожидания', desc: 'Отгрузим со\u00a0склада в\u00a0Санкт-Петербурге без\u00a0предзаказа. Более 500\u00a0позиций.' },
    { title: 'Оперативная логистика', desc: 'Доставка по\u00a0СПб и\u00a0Ленинградской области от\u00a01\u00a0рабочего дня.' },
    { title: 'Без\u00a0посредников', desc: 'Работаем с\u00a0заводами напрямую\u00a0— цена без\u00a0наценки перекупщиков.' },
    { title: 'Полный пакет документов', desc: 'Счёт, накладная, УПД, сертификаты\u00a0— все документы в\u00a0день отгрузки.' },
  ],
  [
    { title: 'Прямые контракты с\u00a0заводами', desc: 'Стабильные цены благодаря долгосрочным контрактам с\u00a0производителями.' },
    { title: 'Доставка за\u00a01\u00a0день', desc: 'Собственный автопарк из\u00a020\u00a0машин\u00a0— привезём на\u00a0объект точно в\u00a0срок.' },
    { title: 'Наличие на\u00a0складе', desc: '15\u00a0000\u00a0тонн проката постоянно на\u00a0складе в\u00a0Санкт-Петербурге.' },
    { title: 'Сертифицированный товар', desc: 'Каждая партия сопровождается сертификатом соответствия и\u00a0паспортом качества.' },
  ],
  [
    { title: 'Быстрая отгрузка', desc: 'Комплектация заказа и\u00a0отправка в\u00a0день обращения при\u00a0подтверждении до\u00a012:00.' },
    { title: 'Широкий ассортимент', desc: 'Более 500\u00a0наименований\u00a0— арматура, трубы, лист, профнастил, швеллер, уголок и\u00a0другой прокат.' },
    { title: 'Работаем с\u00a0юрлицами и\u00a0ИП', desc: 'Безналичный расчёт, договор поставки, закрывающие документы\u00a0— всё в\u00a0день отгрузки.' },
    { title: 'Персональный менеджер', desc: 'Индивидуальный подход к\u00a0каждому заказу. Помогаем с\u00a0подбором и\u00a0расчётом.' },
  ],
  [
    { title: 'Металл от\u00a0производителя', desc: 'Закупаем напрямую у\u00a0комбинатов\u00a0— без\u00a0посредников и\u00a0лишних наценок.' },
    { title: 'Доставка по\u00a0ЛО', desc: 'Собственные машины доставляют заказы по\u00a0всей Ленинградской области ежедневно.' },
    { title: 'Резка в\u00a0размер', desc: 'Нарежем металл по\u00a0вашим размерам. Резка на\u00a0складе\u00a0— в\u00a0день заказа.' },
    { title: 'Отсрочка платежа', desc: 'Для\u00a0постоянных клиентов\u00a0— индивидуальные финансовые условия и\u00a0отсрочка.' },
  ],
];

// Порядок 2-го и 3-го блока: catalog+cta или cta+catalog
type MiddleOrder = 'catalog_first' | 'cta_first';
// Порядок гибкой зоны
type FlexBlock = 'delivery' | 'advantages' | 'products';
type FlexOrder = FlexBlock[];

interface PageLayout {
  middle: MiddleOrder;
  flex: FlexOrder;
}

const layouts: PageLayout[] = [
  { middle: 'catalog_first', flex: ['delivery', 'advantages', 'products'] },
  { middle: 'cta_first',     flex: ['advantages', 'delivery', 'products'] },
  { middle: 'catalog_first', flex: ['advantages', 'products', 'delivery'] },
  { middle: 'cta_first',     flex: ['delivery', 'products', 'advantages'] },
  { middle: 'catalog_first', flex: ['products', 'delivery', 'advantages'] },
];

const cityTexts = [
  'Поставляем металлопрокат {in} и\u00a0ближайшие районы Ленинградской области. Благодаря расположению складов в\u00a0Санкт-Петербурге обеспечиваем быструю доставку без\u00a0задержек.',
  'Осуществляем доставку металлопроката {in} собственным транспортом. {distanceNote}\u00a0— это гарантия оперативной отгрузки.',
  'Снабжаем строительные объекты и\u00a0производства {in} широким ассортиментом стального проката. Отгрузка со\u00a0склада — {deliveryTime}.',
  'Металлопрокат {in} с\u00a0гарантией качества и\u00a0сертификатами. Собственный автопарк позволяет привезти заказ {by} в\u00a0кратчайшие сроки.',
  '{name}\u00a0— одно из\u00a0ключевых направлений нашей доставки. Постоянный складской запас в\u00a0Санкт-Петербурге обеспечивает отгрузку без\u00a0задержек.',
];

// Уникальные отзывы — 15 шт. для минимума дублей на 17 городов
const reviewPool = [
  { name: 'Александр Громов', role: 'Прораб, ООО\u00a0«СтройПроект»', tpl: 'Заказывали арматуру {in}\u00a0— привезли на\u00a0следующий день. Диаметр нужный был в\u00a0наличии, цена устроила. Работаем уже третий год.', date: '15\u00a0марта 2025' },
  { name: 'Елена Васильева', role: 'Частный застройщик', tpl: 'Профнастил для\u00a0забора на\u00a0даче {in}. Помогли подобрать марку, доставили быстро. Упаковано аккуратно, без\u00a0царапин.', date: '2\u00a0февраля 2025' },
  { name: 'Дмитрий Орлов', role: 'ИП, металлообработка', tpl: 'Регулярно берём листовой прокат с\u00a0доставкой {in}. Качество стабильное, документы выдают вовремя. Рекомендую.', date: '18\u00a0января 2025' },
  { name: 'Сергей Нечаев', role: 'Бригадир строительной бригады', tpl: 'Брали трубы профильные для\u00a0объекта {in}. Широкий ассортимент, цена за\u00a0тонну хорошая. Загрузились быстро.', date: '5\u00a0декабря 2024' },
  { name: 'Ирина Соколова', role: 'Менеджер по\u00a0закупкам', tpl: 'Несколько поставок швеллера {in} прошли без\u00a0единой проблемы. Счёт выставляют быстро, документы полные.', date: '22\u00a0ноября 2024' },
  { name: 'Максим Белов', role: 'Частный заказчик', tpl: 'Покупал арматуру для\u00a0фундамента {in}. Посоветовали нужный диаметр, привезли прямо на\u00a0участок.', date: '10\u00a0октября 2024' },
  { name: 'Андрей Козлов', role: 'Директор, ООО\u00a0«МеталлМонтаж»', tpl: 'Снабжаемся через Металлург для\u00a0объектов {in}. Стабильные цены, оперативная отгрузка. Всё по\u00a0договору.', date: '3\u00a0сентября 2024' },
  { name: 'Наталья Фёдорова', role: 'Снабженец', tpl: 'Заказывали сетку и\u00a0штакетник с\u00a0доставкой {in}. Привезли точно в\u00a0срок, качество отличное.', date: '28\u00a0августа 2024' },
  { name: 'Виктор Степанов', role: 'Прораб', tpl: 'Работаем с\u00a0поставками {in} уже давно. Всегда есть нужные позиции, отгрузка быстрая.', date: '14\u00a0июля 2024' },
  { name: 'Олег Марков', role: 'Инженер-строитель', tpl: 'Заказал уголок и\u00a0швеллер для\u00a0каркаса {in}. Всё было на\u00a0складе, отгрузили в\u00a0тот же день. Буду обращаться снова.', date: '2\u00a0июня 2024' },
  { name: 'Татьяна Кузнецова', role: 'Бухгалтер, ООО\u00a0«Стройресурс»', tpl: 'Работаем с\u00a0Металлург уже год\u00a0— поставки {in} всегда вовремя. Документы без\u00a0ошибок, счета выставляют моментально.', date: '17\u00a0мая 2024' },
  { name: 'Павел Жуков', role: 'Владелец мастерской', tpl: 'Беру трубы и\u00a0лист для\u00a0мелкосерийного производства {in}. Цены адекватные, резка в\u00a0размер\u00a0— удобно.', date: '8\u00a0апреля 2024' },
  { name: 'Алексей Сидоров', role: 'Прораб, ИП', tpl: 'Строим коттедж {in}, закупались полностью через Металлург. Арматура, трубы, сетка\u00a0— всё привезли одной машиной.', date: '20\u00a0марта 2024' },
  { name: 'Марина Петрова', role: 'Частный заказчик', tpl: 'Покупала штакетник для\u00a0забора {in}. Менеджер помог рассчитать количество. Доставили аккуратно, без\u00a0задержек.', date: '5\u00a0февраля 2024' },
  { name: 'Игорь Волков', role: 'Начальник снабжения', tpl: 'Регулярно берём металл для\u00a0стройплощадок {in}. Ценим за\u00a0стабильность цен и\u00a0оперативность. Надёжный поставщик.', date: '12\u00a0января 2024' },
];

// Hero sub-text: for SPb uses Питер/СПб, for cities — привязка к складу
const heroSubVariations = [
  'Широкий ассортимент стального проката со\u00a0склада в\u00a0Питере',
  'Более 500\u00a0наименований металлопроката. Склад в\u00a0СПб',
  'Работаем напрямую с\u00a0производителями. Склад рядом',
  'Стабильные поставки. Отгрузка со\u00a0склада в\u00a0Питере',
  'Оперативная доставка собственным транспортом из\u00a0СПб',
  'Прямые контракты с\u00a0заводами. Доставим {by} быстро',
  'Склад в\u00a0Питере\u00a0— привезём {by} за\u00a0{deliveryTime}',
  'Всё в\u00a0наличии на\u00a0складе. Доставка {by}\u00a0— {deliveryTime}',
  '{distanceNote}. Отгрузка со\u00a0склада в\u00a0СПб',
];

// FAQ шаблоны — 12 штук, выбираем 6 со сдвигом
const faqTemplates = [
  { q: 'Какие сроки доставки металлопроката {in}?', a: 'Доставка {in}\u00a0— {deliveryTime} со\u00a0склада в\u00a0Санкт-Петербурге. Отгрузка при\u00a0подтверждении заказа до\u00a012:00.' },
  { q: 'Сколько стоит доставка металлопроката {by}?', a: 'Стоимость доставки {by} рассчитывается по\u00a0километражу. Уточните у\u00a0менеджера. Самовывоз со\u00a0склада в\u00a0СПб\u00a0— бесплатно.' },
  { q: 'Есть ли\u00a0самовывоз для\u00a0жителей {nameRod}?', a: 'Да, самовывоз доступен со\u00a0склада в\u00a0Санкт-Петербурге (м.\u00a0Московские ворота), пн–пт с\u00a09:00 до\u00a018:00.' },
  { q: 'Какой ассортимент металлопроката доступен {in}?', a: 'Весь ассортимент из\u00a0500+ позиций доступен для\u00a0доставки {in}: арматура, трубы, профнастил, лист, швеллер, уголок, сетка и\u00a0др.' },
  { q: 'Работаете ли\u00a0вы с\u00a0юридическими лицами {in}?', a: 'Да, работаем с\u00a0юрлицами и\u00a0ИП. Полный пакет документов: счёт, накладная, УПД, сертификаты.' },
  { q: 'Можно ли\u00a0купить металлопрокат {in} оптом?', a: 'Да, оптовые скидки действуют от\u00a05\u00a0тонн. При\u00a0регулярных поставках {by} доступны индивидуальные условия.' },
  { q: 'Какие способы оплаты доступны {in}?', a: 'Безналичный расчёт для\u00a0юрлиц, оплата по\u00a0договору, наличный расчёт при\u00a0самовывозе. Возможна отсрочка для\u00a0постоянных клиентов.' },
  { q: 'Можно ли\u00a0получить консультацию специалиста {in}?', a: 'Да, менеджеры помогут подобрать металлопрокат под\u00a0ваши задачи, рассчитают объём и\u00a0стоимость. Звоните или оставьте заявку.' },
  { q: 'Весь ли\u00a0товар есть в\u00a0наличии для\u00a0доставки {in}?', a: 'На\u00a0складе в\u00a0Санкт-Петербурге постоянно более 15\u00a0000\u00a0тонн проката. Наличие конкретных позиций уточняйте у\u00a0менеджера.' },
  { q: 'Предоставляете ли\u00a0вы сертификаты качества {in}?', a: 'Да, вся продукция сертифицирована. Паспорта и\u00a0сертификаты качества выдаём при\u00a0отгрузке.' },
  { q: 'Есть ли\u00a0услуга резки металла для\u00a0заказов {in}?', a: 'Да, нарежем металл по\u00a0вашим размерам на\u00a0складе. Стоимость резки\u00a0— по\u00a0запросу.' },
  { q: 'Как оформить заказ с\u00a0доставкой {in}?', a: 'Позвоните, оставьте заявку на\u00a0сайте или напишите на\u00a0почту. Менеджер свяжется, уточнит детали и\u00a0выставит счёт.' },
];

export function getCityUniqueData(city: City) {
  const idx = city.uniqueIndex;

  // Hero title: "{ключ} {в городе}" (белый) + "{УТП}" (красный)
  const keyword = heroKeywords[idx % heroKeywords.length];
  const utp = heroUtpVariations[idx % heroUtpVariations.length];
  const heroTitle = `${keyword} ${city.in}`;
  const badge = heroBadgeTexts[idx % heroBadgeTexts.length];

  // Hero sub
  const heroSub = heroSubVariations[idx % heroSubVariations.length]
    .replace('{by}', city.by)
    .replace('{in}', city.in)
    .replace('{deliveryTime}', city.deliveryTime)
    .replace('{distanceNote}', city.distanceNote);

  const hero = { title: heroTitle, utp, badge, sub: heroSub };
  const baseStats = heroStatSets[idx % heroStatSets.length];
  const stats = getCityStats(city, baseStats);
  const layout = layouts[idx % layouts.length];
  const advantages = advantageSets[idx % advantageSets.length];
  const text = cityTexts[idx % cityTexts.length]
    .replace('{in}', city.in)
    .replace('{by}', city.by)
    .replace('{name}', city.name)
    .replace('{distanceNote}', city.distanceNote)
    .replace('{deliveryTime}', city.deliveryTime);

  // Отзывы (6 штук со сдвигом)
  const reviews = [];
  for (let i = 0; i < 6; i++) {
    const r = reviewPool[(idx + i) % reviewPool.length];
    reviews.push({ id: i + 1, name: r.name, role: r.role, text: r.tpl.replace('{in}', city.in), date: r.date });
  }

  // FAQ с топонимами (6 вопросов)
  const faq = [];
  for (let i = 0; i < 6; i++) {
    const tpl = faqTemplates[(idx + i) % faqTemplates.length];
    faq.push({
      q: tpl.q.replace('{in}', city.in).replace('{by}', city.by).replace('{nameRod}', city.nameRod),
      a: tpl.a.replace(/{in}/g, city.in).replace(/{by}/g, city.by).replace(/{deliveryTime}/g, city.deliveryTime).replace(/{nameRod}/g, city.nameRod),
    });
  }

  return { hero, stats, layout, advantages, text, reviews, faq };
}

/** FAQ для категории + город */
export function getCategoryFaq(categoryName: string, city: City): { q: string; a: string }[] {
  const n = categoryName.toLowerCase();
  return [
    { q: `Сколько стоит ${n} ${city.in}?`, a: `Цена зависит от\u00a0марки, размера и\u00a0объёма заказа. Актуальные цены\u00a0— в\u00a0каталоге или у\u00a0менеджера.` },
    { q: `Какие сроки доставки ${city.in}?`, a: `Доставка ${city.by}\u00a0— ${city.deliveryTime} со\u00a0склада в\u00a0Санкт-Петербурге.` },
    { q: `Есть ли\u00a0самовывоз для\u00a0жителей ${city.nameRod}?`, a: `Да, самовывоз бесплатный со\u00a0склада в\u00a0СПб, пн–пт с\u00a09:00 до\u00a018:00.` },
    { q: `Можно ли\u00a0купить ${n} ${city.in} оптом?`, a: `Да, оптовые скидки от\u00a05\u00a0тонн. Индивидуальные условия для\u00a0постоянных клиентов.` },
    { q: `Есть ли\u00a0сертификаты на\u00a0${n}?`, a: `Вся продукция сертифицирована. Паспорта качества выдаём при\u00a0отгрузке.` },
    { q: `Какие способы оплаты доступны ${city.in}?`, a: `Безналичный расчёт, договор поставки, наличный расчёт. Для\u00a0постоянных клиентов\u00a0— отсрочка платежа.` },
  ];
}

/** FAQ для товара + город */
export function getProductFaq(productName: string, city: City): { q: string; a: string }[] {
  return [
    { q: `Какая цена на\u00a0${productName} ${city.in}?`, a: `Актуальная цена\u00a0— в\u00a0карточке товара. При\u00a0оптовом заказе от\u00a05\u00a0тонн возможны скидки.` },
    { q: `Как быстро доставят ${productName} ${city.by}?`, a: `Доставка ${city.by}\u00a0— ${city.deliveryTime}. Отгрузка при\u00a0подтверждении до\u00a012:00.` },
    { q: `Есть ли\u00a0${productName} в\u00a0наличии на\u00a0складе?`, a: `Да, позиция постоянно на\u00a0складе в\u00a0Санкт-Петербурге. Уточните объём у\u00a0менеджера.` },
    { q: `Можно ли\u00a0оформить самовывоз ${city.in}?`, a: `Самовывоз доступен со\u00a0склада в\u00a0СПб бесплатно, пн–пт с\u00a09:00 до\u00a018:00.` },
    { q: `Предоставляете ли\u00a0сертификат на\u00a0${productName}?`, a: `Да, паспорт качества и\u00a0сертификат соответствия выдаём при\u00a0отгрузке.` },
  ];
}
