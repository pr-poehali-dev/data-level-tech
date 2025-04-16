import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import CopperPage from '@/pages/CopperPage';
import FiberPage from '@/pages/FiberPage';
import WirelessPage from '@/pages/WirelessPage';
import ModulationPage from '@/pages/ModulationPage';
import EthernetPage from '@/pages/EthernetPage';
import ProtocolsPage from '@/pages/ProtocolsPage';
import EncodingPage from '@/pages/EncodingPage';
import TechnologiesPage from '@/pages/TechnologiesPage';
import GlossaryPage from '@/pages/GlossaryPage';
import QuizPage from '@/pages/QuizPage';
import NotFoundPage from '@/pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/copper" element={<CopperPage />} />
          <Route path="/fiber" element={<FiberPage />} />
          <Route path="/wireless" element={<WirelessPage />} />
          <Route path="/modulation" element={<ModulationPage />} />
          <Route path="/ethernet" element={<EthernetPage />} />
          <Route path="/protocols" element={<ProtocolsPage />} />
          <Route path="/encoding" element={<EncodingPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;