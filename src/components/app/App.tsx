import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { theme } from '../../theme';
import { Navbar } from './Navbar';

function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
