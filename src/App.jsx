import FormulaInput from './components/FormulaInput';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 20 }}>
        <h1>Formula Input</h1>
        <FormulaInput />
      </div>
    </QueryClientProvider>
  );
};

export default App;
