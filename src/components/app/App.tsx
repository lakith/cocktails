import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from '../../react-query/queryClient';
import { theme } from '../../theme';
import { AppRoutes } from '../home/AppRoutes';
import { Navbar } from './Navbar';

function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <AppRoutes />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
