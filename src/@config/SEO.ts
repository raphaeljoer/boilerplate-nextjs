import { openGraph } from '@/@config/opengraph';
import { description, siteName, canonical } from './app';
import { twitter } from './opengraph/twitter';

//global config load on each page
const pageConfig = {
  title: siteName,
  description,
  canonical,
  openGraph,
};

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
