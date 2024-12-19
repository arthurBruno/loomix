import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import Router from '@routes/Router';

const App = () => (
  <ChakraProvider value={defaultSystem}>
    <Router />
  </ChakraProvider>
);

export default App;
