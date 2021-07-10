// context
import ThemeContainer from '@/@context/ThemeContainer';
//resources
import React from 'react';
import SEO from '../../next-seo.config';
import NextNprogress from 'nextjs-progressbar';
import { nextNprogress } from '@/@config/nprogress';
import { DefaultSeo } from 'next-seo';

interface AppProviderProps {
  children: JSX.Element;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ThemeContainer>
    {children}
    <DefaultSeo {...SEO} />
    <NextNprogress {...nextNprogress} />
  </ThemeContainer>
);

export default AppProvider;
