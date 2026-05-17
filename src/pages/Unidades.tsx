import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const unidades = [
  {
    id: 1,
    nome: 'Vitta Odonto - Centro',
    endereco: 'Rua Augusta, 500 - Consolação, São Paulo - SP',
    telefone: '(11) 98423-1020'
  },
  {
    id: 2,
    nome: 'Vitta Odonto - Zona Leste',
    endereco: 'Av. Sapopemba, 4200 - Vila Formosa, São Paulo - SP',
    telefone: '(11) 97212-5568'
  },
  {
    id: 3,
    nome: 'Vitta Odonto - Zona Sul',
    endereco: 'Av. Santo Amaro, 3100 - Brooklin, São Paulo - SP',
    telefone: '(11) 95623-9014'
  },
  {
    id: 4,
    nome: 'Vitta Odonto - Zona Norte',
    endereco: 'Av. Tucuruvi, 880 - Tucuruvi, São Paulo - SP',
    telefone: '(11) 98231-7772'
  },
  {
    id: 5,
    nome: 'Vitta Odonto - Zona Oeste',
    endereco: 'Rua Cerro Corá, 1200 - Vila Romana, São Paulo - SP',
    telefone: '(11) 99458-3399'
  }
]

function Unidades() {
  const navigate = useNavigate()

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-2xl sm:text-3xl md:text-4xl px-5 py-5 text-center mb-6">🗺️ Nossas Unidades em São Paulo</h1>

        <section className="mb-8">
          <p className="font-['Roboto'] text-lg sm:text-xl md:text-2xl px-2 sm:px-5 text-center">
            A <strong>Vitta Odonto</strong> está presente em diversos bairros de São Paulo,
            oferecendo atendimento de qualidade e gratuito a quem mais precisa.
            Encontre abaixo a unidade mais próxima de você!
          </p>
        </section>

        <img src="/imagens-do-projeto/localidadevitta.jpg" alt="Localidade Vitta" className="mx-auto max-w-full h-auto rounded-lg mb-8" />

        <section className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10">
          {unidades.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/unidades/${item.id}`)}
              className="bg-white rounded-2xl shadow-md w-full sm:w-72 p-6 text-center hover:-translate-y-2 transition-transform cursor-pointer"
            >
              <h2 className="bg-[#3B5C75] text-white rounded-xl px-3 py-2 mb-4 text-lg font-bold">{item.nome}</h2>
              <p className="font-['Roboto'] text-base text-gray-600 mb-2"><strong>📍 Endereço:</strong> {item.endereco}</p>
              <p className="font-['Roboto'] text-base text-gray-600"><strong>☎️ Telefone:</strong> {item.telefone}</p>
            </div>
          ))}
        </section>

        <button
          onClick={() => navigate('/agendamento')}
          className="flex justify-center items-center mx-auto my-6 w-48 sm:w-56 md:w-64 h-14 md:h-16 bg-[#3B5C75] text-[#F8F5F1] font-['Oswald'] text-lg md:text-xl rounded-xl hover:text-2xl transition-all"
        >
          Entre em contato
        </button>
      </main>

      <Footer />
    </div>
  )
}

export default Unidades