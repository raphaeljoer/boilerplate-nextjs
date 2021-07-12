import { canonical, description, siteName } from '../app';

export const locale =
  process.env.BOILERPLATE_CONFIG_OPENGRAPH_LOCALE || 'pt-br';

export const type = process.env.BOILERPLATE_CONFIG_OPENGRAPH_TYPE || 'website';

const defaultImageUrl =
  process.env.BOILERPLATE_CONFIG_OPENGRAPH_IMAGE_URL ||
  '/assets/ui/opengraph/default-cover.jpg';

export const defaultImage = {
  url: defaultImageUrl,
  width: 1280,
  height: 720,
  alt: siteName,
};

export const openGraph = {
  title: siteName,
  description: description,
  url: canonical,
  type,
  locale,
  site_name: siteName,
  images: [defaultImage],
};
