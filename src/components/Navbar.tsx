import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/integrantes">Integrantes</Link>
      <Link to="/faq">Perguntas Frequentes</Link>
      <Link to="/sobre">Sobre Nós</Link>
      <Link to="/servicos">Serviços</Link>
      <Link to="/unidades">Unidades</Link>
    </nav>
  )
}

export default Navbar