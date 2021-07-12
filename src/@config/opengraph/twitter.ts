//Twitter config
export const twitter = {
  handle:
    process.env.BOILERPLATE_CONFIG_OPENGRAPH_TWITTER_HANDLE || '@boilerplate',
  site: process.env.BOILERPLATE_CONFIG_OPENGRAPH_TWITTER_SITE || '@boilerplate',
  cardType:
    process.env.BOILERPLATE_CONFIG_OPENGRAPH_TWITTER_CARDTYPE ||
    'summary_large_image',
};
