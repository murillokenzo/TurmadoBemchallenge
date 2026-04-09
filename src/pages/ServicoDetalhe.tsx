import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const servicos = [
  { id: 1, titulo: 'Limpeza Dental', descricao: 'Remoção de placas e tártaro com equipamentos de ponta, deixando seus dentes mais saudáveis e livres de manchas.' },
  { id: 2, titulo: 'Clareamento', descricao: 'Devolva o brilho ao seu sorriso com clareamento a laser e técnicas seguras que preservam o esmalte natural.' },
  { id: 3, titulo: 'Ortodontia', descricao: 'Alinhe seu sorriso com aparelhos estéticos ou convencionais, sob o cuidado de nossos especialistas.' },
  { id: 4, titulo: 'Implantes', descricao: 'Recupere dentes perdidos com implantes duradouros e naturais, garantindo estética e conforto na mastigação.' },
  { id: 5, titulo: 'Odontopediatria', descricao: 'Atendimento especializado e acolhedor para as crianças, cuidando da saúde bucal desde cedo.' }
]

function ServicoDetalhe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const servico = servicos.find(s => s.id === Number(id))

  if (!servico) {
    return (
      <div>
        <Header />
        <Navbar />
        <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-20 py-8 text-center">
          <h1 className="text-3xl text-[#3B5C75] mt-10">Serviço não encontrado!</h1>
          <button onClick={() => navigate('/servicos')} className="mt-6 bg-[#3B5C75] text-white px-6 py-3 rounded-xl hover:scale-105 transition-all">
            Voltar para Serviços
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

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-4xl px-5 py-5 text-center mb-8">{servico.titulo}</h1>

        <div className="bg-white rounded-2xl shadow-md p-10 text-center mb-8">
          <p className="font-['Roboto'] text-2xl text-gray-600 leading-relaxed">{servico.descricao}</p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/servicos')}
            className="bg-gray-400 text-white px-6 py-3 rounded-xl text-xl hover:scale-105 transition-all"
          >
            Voltar
          </button>
          <button
            onClick={() => navigate('/fale-conosco')}
            className="bg-[#3B5C75] text-white px-6 py-3 rounded-xl text-xl hover:scale-105 transition-all"
          >
            Agendar Consulta
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ServicoDetalhe