import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <>
      <nav className="bg-[#3B5C75] py-2">
        <div className="hidden md:flex justify-center flex-wrap italic">
          <Link to="/" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Home</Link>
          <Link to="/integrantes" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Integrantes</Link>
          <Link to="/faq" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Perguntas Frequentes</Link>
          <Link to="/sobre" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Sobre Nós</Link>
          <Link to="/servicos" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Serviços</Link>
          <Link to="/unidades" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Unidades</Link>
          <Link to="/agendamento" className="text-white pl-10 font-['Oswald'] text-2xl no-underline hover:text-3xl transition-all">Agendamento</Link>
        </div>

        <div className="md:hidden flex justify-between items-center px-6 py-2">
          <span className="text-white font-['Oswald'] text-xl italic">Menu</span>
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="text-white text-3xl"
          >
            {menuAberto ? '✕' : '☰'}
          </button>
        </div>

        {menuAberto && (
          <div className="md:hidden flex flex-col items-center gap-4 py-4 italic">
            <Link to="/" onClick={() => setMenuAberto(false)} className="text-white font-['Oswald'] text-xl">Home</Link>
            <Link to="/integrantes" onClick={() => setMenuAberto(false)} className="text-white font-['Oswald'] text-xl">Integrantes</Link>
            <Link to="/faq" onClick={() => setMenuAberto(false)} className="text-white font-['Oswald'] text-xl">Perguntas Frequentes</Link>
            <Link to="/sobre" onClick={() => setMenuAberto(false)} className="text-white font-['Oswald'] text-xl">Sobre Nós</Link>
            <Link to="/servicos" onClick={() => setMenuAberto(false)} className="text-white font-['Oswald'] text-xl">Serviços</Link>
            <Link to="/unidades" onClick={() => setMenuAberto(false)} className="text-white font-['Oswald'] text-xl">Unidades</Link>
            <Link to="/agendamento" onClick={() => setMenuAberto(false)} className="text-white font-['Oswald'] text-xl">Agendamento</Link>
          </div>
        )}
      </nav>

      <Link to="/login" className="fixed bottom-6 right-6 bg-[#0877C8] text-white font-bold text-xl px-6 py-4 rounded-full shadow-lg z-50 hover:bg-[#3B5C75] hover:scale-105 transition-all">
        🔐 Login
      </Link>
    </>
  )
}

export default Navbar