//core components
import AppProvider from '@/@context';
//resources
import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/app';
import * as tagmanager from '@/@config/scripts/google/tagmanager';
import { favicon } from '@/@config/ui/favicon';
import { fontSource } from '@/styles/foundations/fonts';
import { description, siteName } from '@/@config/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {tagmanager.header}
        <title>{siteName}</title>
        <meta name="description" content={description} />
        {/* PWA */}
        <link rel="shortcut icon" href="/icons/icon-512.png" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />
        <meta name="theme-color" content="#06092B" />
        <link rel="manifest" href="/manifest.json" />
        {/* FAVICON */}
        <link rel="icon" type="image/png" href={favicon} />
        <link rel="shortcut icon" href={favicon} />
        {/* FONTS */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="preload" as="style" href={fontSource} />
        <noscript>
          <link rel="stylesheet" href={fontSource} />
        </noscript>
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
