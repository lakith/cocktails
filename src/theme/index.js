import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'text.50',
        backgroundColor: '#fff',
      },
    },
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Forum, serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    brand: {
      50: '#ff8000',
    },
    text: {
      50: '#242e30',
    },
  },
});
