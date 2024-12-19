import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import Router from '@routes/Router';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider value={defaultSystem}>
      <Router />
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
