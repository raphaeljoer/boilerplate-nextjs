import { ComponentStyleConfig } from '@chakra-ui/react';

export const Heading: ComponentStyleConfig = {
  defaultProps: {
    size: 'h2',
    variant: '',
  },
  baseStyle: {
    fontWeight: 'bold',
    lineHeight: '150%',
  },
  sizes: {
    h1: { fontSize: '5xl' },
    h2: { fontSize: '5xl' },
    h3: { fontSize: '3xl' },
    h4: { fontSize: '2xl' },
    h5: { fontSize: 'xl' },
    h6: { fontSize: 'lg' },
  },
};
