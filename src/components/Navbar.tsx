import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="bg-[#3B5C75] italic py-2 text-center">
        <Link to="/" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Home</Link>
        <Link to="/integrantes" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Integrantes</Link>
        <Link to="/faq" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Perguntas Frequentes</Link>
        <Link to="/sobre" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Sobre Nós</Link>
        <Link to="/servicos" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Serviços</Link>
        <Link to="/unidades" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Unidades</Link>
      </nav>

      <Link to="/login" className="fixed bottom-6 right-6 bg-[#0877C8] text-white font-bold text-xl px-6 py-4 rounded-full shadow-lg z-50 hover:bg-[#3B5C75] hover:scale-105 transition-all">
        🔐 Login
      </Link>
    </>
  )
}

export default Navbar