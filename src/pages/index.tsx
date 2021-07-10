//chakra-ui
import { Heading } from '@chakra-ui/react';
//core components
import Container from '@/components/molecules/Container';
import Layout from '@/components/organisms/Layout';
//resources
import React from 'react';
import { NextSeo } from 'next-seo';
//config
import SEO from '@/@config/SEO';

export default function HomePage() {
  return (
    <Layout>
      <NextSeo {...SEO.page.home} />
      <Container mt={16} mb={24}>
        <Heading>Boilerplate NextJS</Heading>
      </Container>
    </Layout>
  );
}
