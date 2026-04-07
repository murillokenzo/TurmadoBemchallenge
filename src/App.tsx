import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/sobre'
import Integrantes from './pages/integrantes'
import FAQ from './pages/FAQ'
import FaleConosco from './pages/faleConosco'
import Login from './pages/login'

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
        <Route path="/servicos" element={<h1>Serviços</h1>} />
        <Route path="/unidades" element={<h1>Unidades</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App