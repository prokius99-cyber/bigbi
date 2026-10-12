/**
 * Единственный источник данных о бизнесе: название, контакты, адрес, часы, соцсети.
 * Каждое значение — из analysis.md (с источником). Нет факта — {{VERIFY: что}}.
 * Компоненты берут данные ТОЛЬКО отсюда, поэтому телефон на сайте всегда один (NAP).
 */
export const business = {
  name: 'BIGBI',
  /** Короткое описание для title/description — без {{VERIFY}}. */
  tagline: 'Сэндвич-бар BIGBI — горячие сэндвичи в ТРЦ «Меркурий»',
  description:
    'BIGBI — сэндвич-бар в ТРЦ «Меркурий» на Савушкина, 141: горячие авторские сэндвичи из-под ножа, соусы и фри готовим сами. 3 этаж, корнер 14.',
  /** Телефон в формате +7XXXXXXXXXX и в человеческом виде. */
  phone: { e164: '+79681873110', display: '+7 968 187-31-10' },
  email: '',
  address: {
    street: 'улица Савушкина, 141',
    city: 'Санкт-Петербург',
    region: '',
    postalCode: '197374',
    note: 'ТРЦ «Меркурий», 3 этаж, корнер 14 (фудпарк)',
  },
  /** Метро — из 2ГИС /tab/info. */
  metro: [
    { name: 'Беговая', distance: '200 м' },
    { name: 'Яхтенная', distance: '900 м' },
  ],
  geo: { lat: 0, lon: 0 },
  /** Часы в формате schema.org: 'Mo-Fr 10:00-19:00'. Пусто — не выводим. Источник: шапка t.me/s/bigbifood. */
  hours: ['Mo-Su 10:00-22:00'],
  hoursDisplay: 'Ежедневно 10:00–22:00',
  links: {
    yandexMaps: '',
    twoGis: 'https://2gis.ru/spb/firm/70000001103287775',
    vk: '',
    telegram: 'bigbifood', // username без @ — для ссылки t.me/<username>
    whatsapp: '', // номер в формате 7XXXXXXXXXX
    appStore: 'https://apps.apple.com/ru/app/id6755952296',
    googlePlay: 'https://play.google.com/store/apps/details?id=ru.saby.clients.brand.bigbisendvichbar',
  },
  /** Цвет панели браузера на телефоне = --c-bg из DESIGN.md. */
  themeColor: '#367c4a',
  /** Тип для JSON-LD: Store, LocalBusiness, Restaurant, BeautySalon, AutoRepair и т.д. */
  schemaType: 'FastFoodRestaurant',
  /** Реквизиты для подвала и политики конфиденциальности. */
  legal: { operator: '{{VERIFY: ИП/ООО — оператор сэндвич-бара}}', inn: '{{VERIFY: ИНН}}', ogrn: '' },
};

/** Заявки: адрес приёма (вебхук, форма, серверная функция). Пусто — форма предлагает мессенджеры. */
export const orderEndpoint = import.meta.env.PUBLIC_ORDER_ENDPOINT || '';

/** Демо для клиента: noindex + запрет в robots.txt. Включено по умолчанию до выкладки на домен клиента. */
export const isDemo = (import.meta.env.PUBLIC_DEMO ?? 'true') !== 'false';
