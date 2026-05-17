import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const unidades = [
  { id: 1, nome: 'Vitta Odonto - Centro', endereco: 'Rua Augusta, 500 - Consolação, São Paulo - SP', telefone: '(11) 98423-1020' },
  { id: 2, nome: 'Vitta Odonto - Zona Leste', endereco: 'Av. Sapopemba, 4200 - Vila Formosa, São Paulo - SP', telefone: '(11) 97212-5568' },
  { id: 3, nome: 'Vitta Odonto - Zona Sul', endereco: 'Av. Santo Amaro, 3100 - Brooklin, São Paulo - SP', telefone: '(11) 95623-9014' },
  { id: 4, nome: 'Vitta Odonto - Zona Norte', endereco: 'Av. Tucuruvi, 880 - Tucuruvi, São Paulo - SP', telefone: '(11) 98231-7772' },
  { id: 5, nome: 'Vitta Odonto - Zona Oeste', endereco: 'Rua Cerro Corá, 1200 - Vila Romana, São Paulo - SP', telefone: '(11) 99458-3399' }
]

function UnidadeDetalhe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const unidade = unidades.find(u => u.id === Number(id))

  if (!unidade) {
    return (
      <div>
        <Header />
        <Navbar />
        <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-20 py-8 text-center">
          <h1 className="text-2xl sm:text-3xl text-[#3B5C75] mt-10">Unidade não encontrada!</h1>
          <button onClick={() => navigate('/unidades')} className="mt-6 bg-[#3B5C75] text-white px-6 py-3 rounded-xl hover:scale-105 transition-all">
            Voltar para Unidades
          </button>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-2xl sm:text-3xl md:text-4xl px-5 py-5 text-center mb-8">{unidade.nome}</h1>

        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 text-center mb-8">
          <p className="font-['Roboto'] text-lg sm:text-xl md:text-2xl text-gray-600 mb-4"><strong>📍 Endereço:</strong> {unidade.endereco}</p>
          <p className="font-['Roboto'] text-lg sm:text-xl md:text-2xl text-gray-600"><strong>☎️ Telefone:</strong> {unidade.telefone}</p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate('/unidades')}
            className="bg-gray-400 text-white px-6 py-3 rounded-xl text-lg sm:text-xl hover:scale-105 transition-all"
          >
            Voltar
          </button>
          <button
            onClick={() => navigate('/agendamento')}
            className="bg-[#3B5C75] text-white px-6 py-3 rounded-xl text-lg sm:text-xl hover:scale-105 transition-all"
          >
            Entre em Contato
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default UnidadeDetalhe