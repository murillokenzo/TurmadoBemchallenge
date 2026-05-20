import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getPacientes } from '../services/api'

type Paciente = {
  id: number
  nome: string
  email: string
  telefone: string
}

function Pacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    getPacientes()
      .then(data => {
        setPacientes(data)
        setLoading(false)
      })
      .catch(() => {
        setErro('Erro ao carregar pacientes.')
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-2xl sm:text-3xl md:text-4xl px-5 py-5 text-center mb-8">👥 Pacientes</h1>

        {loading && <p className="text-center text-gray-500 text-xl">Carregando pacientes...</p>}
        {erro && <p className="text-center text-red-500 text-xl">{erro}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pacientes.map(paciente => (
            <div key={paciente.id} className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition-transform">
              <h2 className="bg-[#3B5C75] text-white rounded-xl px-3 py-2 mb-4 text-lg font-bold text-center">{paciente.nome}</h2>
              <p className="font-['Roboto'] text-gray-600 text-sm mb-2">{paciente.email}</p>
              <p className="font-['Roboto'] text-gray-600 text-sm">📞 {paciente.telefone}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Pacientes