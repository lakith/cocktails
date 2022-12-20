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
    heading: 'Jet Sans,sans-serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    brand: {
      100: '#ff8000',
    },
    black: {
      100: '#242e30',
      200: '#3b444b',
    },
    white: {
      100: '#fff',
    },
    purple: {
      100: '#5b3d5b',
    },
  },
});
