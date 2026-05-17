import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Integrantes from './pages/integrantes'
import FAQ from './pages/FAQ'
import FaleConosco from './pages/FaleConosco'
import Login from './pages/login'
import Servicos from './pages/servicos'
import Unidades from './pages/Unidades'
import ServicoDetalhe from './pages/ServicoDetalhe'
import UnidadeDetalhe from './pages/UnidadeDetalhe'
import Agendamento from './pages/Agendamento'
import Confirmacao from './pages/Confirmacao'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/login" element={<Login />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/servicos/:id" element={<ServicoDetalhe />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/unidades/:id" element={<UnidadeDetalhe />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/agendamento/confirmacao" element={<Confirmacao />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App