import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { theme } from '../../theme';
import { AppRoutes } from './home/AppRoutes';
import { Navbar } from './Navbar';

function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
