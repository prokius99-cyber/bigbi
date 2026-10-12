/**
 * Меню — с фото меню в 2ГИС (analysis.md → «Ассортимент и цены»).
 * Цены конфликтуют между источниками (2ГИС 390/290 ₽, Яндекс.Карты 450–490/350 ₽) — до подтверждения владельцем
 * показываем цену 2ГИС с пометкой priceNote.
 */
export type Badge = 'ХИТ' | 'NEW';

export interface MenuItem {
  name: string;
  weight: number;
  note?: string;
  badge?: Badge;
}

export interface MenuGroup {
  id: 'savory' | 'sweet';
  title: string;
  price: number;
  items: MenuItem[];
}

export const priceNote = '{{VERIFY: актуальные цены — 2ГИС 390/290 ₽, Яндекс.Карты 450–490/350 ₽}}';

export const menu: MenuGroup[] = [
  {
    id: 'savory',
    title: 'Сытные',
    price: 390,
    items: [
      { name: 'Буженина', weight: 220 },
      { name: 'Луизиана', weight: 240, note: 'креветки, гуакамоле, ранч' },
      { name: 'Цезарь', weight: 220, badge: 'ХИТ' },
      { name: 'Сырный джем', weight: 200, note: 'шесть сыров', badge: 'NEW' },
      { name: 'Т-Мясо', weight: 310, note: 'ростбиф, буженина, курица гриль; 54 г белка', badge: 'NEW' },
      { name: 'Цезарь с креветками', weight: 215, badge: 'NEW' },
      { name: 'Итальяно', weight: 230, badge: 'ХИТ' },
      { name: 'Тальята', weight: 230, note: 'ростбиф, руккола, печёный перец' },
      { name: 'Филадельфия', weight: 220, note: 'форель, сливочный сыр' },
    ],
  },
  {
    id: 'sweet',
    title: 'Сладкие',
    price: 290,
    items: [
      { name: 'Арахисовая паста', weight: 200 },
      { name: 'Солёная карамель', weight: 200 },
      { name: 'Банан', weight: 230, badge: 'ХИТ' },
      { name: 'Марс', weight: 180, badge: 'ХИТ' },
      { name: 'Персик', weight: 210 },
      { name: 'Лесные ягоды', weight: 200 },
    ],
  },
];

/** Без цен в источниках. */
export const extras = ['картофель', 'батат', 'коктейли', 'лимонады', 'смузи', 'кофе', 'чай'];
