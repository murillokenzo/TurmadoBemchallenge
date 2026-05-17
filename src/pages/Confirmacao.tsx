import { useVitta } from '../context/Vittacontext'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Confirmacao() {
  const { agendamentos } = useVitta()
  const ultimo = agendamentos[agendamentos.length - 1]

  if (!ultimo) {
    return (
      <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
        <Header />
        <Navbar />
        <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-2xl mx-auto px-4 sm:px-8 md:px-10 py-8 my-8 rounded-2xl text-center">
          <h1 className="text-2xl sm:text-3xl text-[#3B5C75] mb-6">Nenhum agendamento encontrado!</h1>
          <Link to="/agendamento" className="bg-[#3B5C75] text-white px-6 py-3 rounded-xl hover:bg-[#2a4558] transition-all">
            Fazer agendamento
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-2xl mx-auto px-4 sm:px-8 md:px-10 py-8 my-8 rounded-2xl text-center">
        <div className="text-5xl sm:text-6xl mb-6">✅</div>
        <h1 className="bg-[#3B5C75] text-white text-2xl sm:text-3xl md:text-4xl px-5 py-5 text-center mb-8">Agendamento Confirmado!</h1>

        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#3B5C75] mb-6">Resumo do agendamento</h2>

          <div className="flex flex-col gap-4 font-['Roboto']">
            <div className="flex justify-between border-b pb-3">
              <span className="font-bold text-gray-600">Nome:</span>
              <span className="text-gray-800">{ultimo.nome}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span className="font-bold text-gray-600">E-mail:</span>
              <span className="text-gray-800 break-all">{ultimo.email}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span className="font-bold text-gray-600">Telefone:</span>
              <span className="text-gray-800">{ultimo.telefone}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span className="font-bold text-gray-600">Serviço:</span>
              <span className="text-gray-800">{ultimo.servico}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-gray-600">Data:</span>
              <span className="text-gray-800">{ultimo.data}</span>
            </div>
          </div>
        </div>

        <p className="font-['Roboto'] text-gray-600 mb-8 text-sm sm:text-base">
          Entraremos em contato em até 24 horas para confirmar seu horário. 😊
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/" className="bg-[#3B5C75] text-white px-6 sm:px-8 py-3 rounded-xl hover:bg-[#2a4558] transition-all text-base sm:text-lg">
            Voltar ao início
          </Link>
          <Link to="/agendamento" className="bg-white border-2 border-[#3B5C75] text-[#3B5C75] px-6 sm:px-8 py-3 rounded-xl hover:bg-[#3B5C75] hover:text-white transition-all text-base sm:text-lg">
            Novo agendamento
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Confirmacao