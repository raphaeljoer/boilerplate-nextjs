//chakra-ui
import { ColorModeScript } from '@chakra-ui/react';
//resources
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
//theme
import theme from '@/styles/global/theme';
//config
import * as tagmanager from '@/@config/scripts/google/tagmanager';
import { favicon, fonts } from '@/@config/ui/global';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {tagmanager.header}
          <link rel="icon" type="image/png" href={favicon} />
          <link rel="shortcut icon" href={favicon} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href={fonts} rel="stylesheet" />
        </Head>
        <body>
          {tagmanager.body}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
