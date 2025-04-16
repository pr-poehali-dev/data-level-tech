import { BrowserRouter } from 'react-router-dom';
import Index from '@/pages/Index';
import { Toaster } from '@/components/ui/toaster';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Index />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;