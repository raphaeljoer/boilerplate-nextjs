import { Grid } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: IProps) => {
  return (
    <Grid
      h="full"
      minWidth={360}
      templateRows="auto 1fr auto"
      bgPosition="center"
      bgRepeat="repeat"
    >
      <Header />
      {children}
      <Footer />
    </Grid>
  );
};

export default Layout;
