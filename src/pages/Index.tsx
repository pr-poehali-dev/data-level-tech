import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CopperPage from './CopperPage';
import FiberPage from './FiberPage';
import WirelessPage from './WirelessPage';
import ModulationPage from './ModulationPage';
import EncodingPage from './EncodingPage';
import ProtocolsPage from './ProtocolsPage';
import TechnologiesPage from './TechnologiesPage';
import QuizPage from './QuizPage';
import GlossaryPage from './GlossaryPage';
import NotFoundPage from './NotFound';
import MainLayout from '@/components/layouts/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/copper" element={<CopperPage />} />
        <Route path="/fiber" element={<FiberPage />} />
        <Route path="/wireless" element={<WirelessPage />} />
        <Route path="/modulation" element={<ModulationPage />} />
        <Route path="/encoding" element={<EncodingPage />} />
        <Route path="/protocols" element={<ProtocolsPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};

export default Index;