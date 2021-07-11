//chakra-ui
import { ColorModeScript } from '@chakra-ui/react';
//resources
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
//theme
import theme from '@/styles/theme';
//config
import * as tagmanager from '@/@config/scripts/google/tagmanager';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
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
