export const siteName =
  process.env.BOILERPLATE_CONFIG__SEO_SITENAME || 'Boilerplate | NextJS';

export const description =
  process.env.BOILERPLATE_CONFIG_SEO_DESCRIPTION || 'The best boilerplate';

export const canonical =
  process.env.BOILERPLATE_CONFIG_SEO_URL || 'https://boilerplate.com';

export const locale =
  process.env.BOILERPLATE_CONFIG_OPENGRAPH_LOCALE || 'pt-br';

export const type = process.env.BOILERPLATE_CONFIG_OPENGRAPH_TYPE || 'website';

export const defaultImage =
  process.env.BOILERPLATE_CONFIG_OPENGRAPH_IMAGE_URL ||
  '/assets/ui/opengraph/default-cover.jpg';

//OpenGraph config
const openGraph = {
  title: siteName,
  description: description,
  url: canonical,
  type,
  locale: locale,
  site_name: siteName,
  images: [
    {
      url: defaultImage,
      width: 1280,
      height: 720,
      alt: siteName,
    },
  ],
};

//Twitter config
const twitter = {
  handle:
    process.env.BOILERPLATE_CONFIG_OPENGRAPH_TWITTER_HANDLE || '@boilerplate',
  site: process.env.BOILERPLATE_CONFIG_OPENGRAPH_TWITTER_SITE || '@boilerplate',
  cardType:
    process.env.BOILERPLATE_CONFIG_OPENGRAPH_TWITTER_CARDTYPE ||
    'summary_large_image',
};

//global config load on each page
const pageConfig = {
  title: siteName,
  description,
  canonical,
  openGraph,
};

//SEO Config
export const SEO = {
  default: {
    ...openGraph,
    ...twitter,
  },
  page: {
    home: { ...pageConfig },
  },
};

export default SEO;
