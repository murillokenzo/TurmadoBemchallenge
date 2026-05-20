import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getDentistas } from '../services/api'

type Dentista = {
  id: number
  nome: string
  especialidade: string
  email: string
}

function Dentistas() {
  const [dentistas, setDentistas] = useState<Dentista[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    getDentistas()
      .then(data => {
        setDentistas(data)
        setLoading(false)
      })
      .catch(() => {
        setErro('Erro ao carregar dentistas.')
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-2xl sm:text-3xl md:text-4xl px-5 py-5 text-center mb-8">🦷 Nossa Equipe de Dentistas</h1>

        {loading && <p className="text-center text-gray-500 text-xl">Carregando dentistas...</p>}
        {erro && <p className="text-center text-red-500 text-xl">{erro}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dentistas.map(dentista => (
            <div key={dentista.id} className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition-transform">
              <h2 className="bg-[#3B5C75] text-white rounded-xl px-3 py-2 mb-4 text-lg font-bold text-center">{dentista.nome}</h2>
              <p className="font-['Roboto'] text-gray-600 text-sm mb-2">🎓 {dentista.especialidade}</p>
              <p className="font-['Roboto'] text-gray-600 text-sm">📧 {dentista.email}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Dentistas