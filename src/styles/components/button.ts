import { ButtonProps, ComponentStyleConfig } from '@chakra-ui/react';

const primary: ButtonProps = {
  color: 'yellow.500',
  backgroundColor: 'oilblue.500',
  _hover: {
    color: 'oilblue.500',
    backgroundColor: 'yellow.500',
  },
};

export const Button: ComponentStyleConfig = {
  defaultProps: {
    size: 'small',
    variant: 'primary',
  },
  baseStyle: {
    fontWeight: 'bold',
    lineHeight: '150%',
    padding: 4,
  },
  sizes: {
    small: { fontSize: 'lg' },
    medium: { fontSize: 'xl' },
    larger: { fontSize: '2xl' },
  },
  variants: {
    primary,
  },
};

export default Button;
