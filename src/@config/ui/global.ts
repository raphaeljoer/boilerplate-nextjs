const path = '/assets/ui/global/';

export const favicon =
  process.env.BOILERPLATE_CONFIG_UI_GLOBAL_FAVICON || `${path}favicon.ico`;

export const openGraph =
  process.env.BOILERPLATE_CONFIG_UI_GLOBAL_OPENGRAPH || `${path}opengraph.webp`;

export const fonts =
  process.env.BOILERPLATE_CONFIG_UI_GLOBAL_FONTS ||
  'https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Roboto:wght@400;500;700&display=swap';
