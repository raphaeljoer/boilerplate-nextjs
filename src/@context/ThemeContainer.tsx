import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';

interface ThemeContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const ThemeContainer = ({ children }: ThemeContainerProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeContainer;
