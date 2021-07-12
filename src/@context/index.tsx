// context
import ThemeContainer from '@/@context/ThemeContainer';
//resources
import React from 'react';
import SEO from '../../next-seo.config';
import NextNprogress from 'nextjs-progressbar';
import { DefaultSeo } from 'next-seo';
import { nextNprogress } from '@/@config/nprogress';

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
