import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<h1>FAQ</h1>} />
        <Route path="/fale-conosco" element={<h1>Fale Conosco</h1>} />
        <Route path="/integrantes" element={<h1>Integrantes</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/servicos" element={<h1>Serviços</h1>} />
        <Route path="/sobre" element={<h1>Sobre</h1>} />
        <Route path="/unidades" element={<h1>Unidades</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App