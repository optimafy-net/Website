import { Routes, Route } from 'react-router-dom'
import { ToastProvider } from './components/Toast'
import Home from './pages/Home'
import WebPage from './pages/WebPage'
import AutomacaoPage from './pages/AutomacaoPage'
import Vitrine from './pages/templates/Vitrine'
import ThankYou from './pages/ThankYou'

// Templates
import Barbearia from './pages/templates/Barbearia'
import ComercioFocado from './pages/templates/ComercioFocado'
import Consultoria from './pages/templates/Consultoria'
import Ensino from './pages/templates/Ensino'
import Eventos from './pages/templates/Eventos'
import Fornecedores from './pages/templates/Fornecedores'
import Imobiliaria from './pages/templates/Imobiliaria'
import Logistica from './pages/templates/Logistica'
import Restaurante from './pages/templates/Restaurante'
import ServicoIndividual from './pages/templates/ServicoIndividual'
import Supermercado from './pages/templates/Supermercado'
import Institucional from './pages/templates/Institucional'

import { GlobalStateProvider } from './context/GlobalContext'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStateProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web" element={<WebPage />} />
            <Route path="/automacao" element={<AutomacaoPage />} />
            <Route path="/vitrine" element={<Vitrine />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* Template Routes */}
            <Route path="/templates/barbearia" element={<Barbearia />} />
            <Route path="/templates/comercio-focado" element={<ComercioFocado />} />
            <Route path="/templates/consultoria" element={<Consultoria />} />
            <Route path="/templates/ensino" element={<Ensino />} />
            <Route path="/templates/eventos" element={<Eventos />} />
            <Route path="/templates/fornecedores" element={<Fornecedores />} />
            <Route path="/templates/imobiliaria" element={<Imobiliaria />} />
            <Route path="/templates/logistica" element={<Logistica />} />
            <Route path="/templates/restaurante" element={<Restaurante />} />
            <Route path="/templates/servico-individual" element={<ServicoIndividual />} />
            <Route path="/templates/supermercado" element={<Supermercado />} />
            <Route path="/templates/institucional" element={<Institucional />} />
          </Routes>
        </ToastProvider>
      </GlobalStateProvider>
    </ThemeProvider>
  )
}
