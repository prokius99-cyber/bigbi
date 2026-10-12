/** Путь с учётом base (сайт может жить в подпапке, например GitHub Pages /bigbi/). */
export const href = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
