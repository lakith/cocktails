import { ChakraProvider, theme } from '@chakra-ui/react';
import { ReactElement } from 'react';

function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">test</div>
    </ChakraProvider>
  );
}

export default App;
