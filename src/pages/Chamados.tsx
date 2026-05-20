import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getChamados } from '../services/api'

type Chamado = {
  id: number
  paciente: {
    id: number
    nome: string
    cpf: string
    idade: number
    telefone: string
  }
  dentista: {
    id: number
    nome: string
    cpf: string
    especialidade: string
  }
  formulario: {
    descricaoProblema: string
    data: string
    prioridade: string
  }
}

function Chamados() {
  const [chamados, setChamados] = useState<Chamado[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    getChamados()
      .then(data => {
        setChamados(data)
        setLoading(false)
      })
      .catch(() => {
        setErro('Erro ao carregar chamados.')
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-2xl sm:text-3xl md:text-4xl px-5 py-5 text-center mb-8">📋 Chamados</h1>

        {loading && <p className="text-center text-gray-500 text-xl">Carregando chamados...</p>}
        {erro && <p className="text-center text-red-500 text-xl">{erro}</p>}

        <div className="flex flex-col gap-6">
          {chamados.map(chamado => (
            <div key={chamado.id} className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h2 className="text-xl font-bold text-[#3B5C75]">Chamado #{chamado.id}</h2>
                <span className="bg-[#3B5C75] text-white px-4 py-1 rounded-full text-sm">{chamado.formulario.prioridade}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-['Roboto']">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-[#3B5C75] mb-2">👤 Paciente</p>
                  <p className="text-gray-700 text-sm">{chamado.paciente.nome}</p>
                  <p className="text-gray-500 text-sm">📞 {chamado.paciente.telefone}</p>
                  <p className="text-gray-500 text-sm">🎂 {chamado.paciente.idade} anos</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-[#3B5C75] mb-2">🦷 Dentista</p>
                  <p className="text-gray-700 text-sm">{chamado.dentista.nome}</p>
                  <p className="text-gray-500 text-sm">🎓 {chamado.dentista.especialidade}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mt-4 font-['Roboto']">
                <p className="font-bold text-[#3B5C75] mb-2">📝 Problema</p>
                <p className="text-gray-700 text-sm">{chamado.formulario.descricaoProblema}</p>
                <p className="text-gray-500 text-sm mt-1">📅 {chamado.formulario.data}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Chamados