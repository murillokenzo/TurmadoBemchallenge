import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardServico from '../components/CardServico'

const servicos = [
  {
    id: 1,
    titulo: 'Limpeza Dental',
    descricao: 'Remoção de placas e tártaro com equipamentos de ponta, deixando seus dentes mais saudáveis e livres de manchas.'
  },
  {
    id: 2,
    titulo: 'Clareamento',
    descricao: 'Devolva o brilho ao seu sorriso com clareamento a laser e técnicas seguras que preservam o esmalte natural.'
  },
  {
    id: 3,
    titulo: 'Ortodontia',
    descricao: 'Alinhe seu sorriso com aparelhos estéticos ou convencionais, sob o cuidado de nossos especialistas.'
  },
  {
    id: 4,
    titulo: 'Implantes',
    descricao: 'Recupere dentes perdidos com implantes duradouros e naturais, garantindo estética e conforto na mastigação.'
  },
  {
    id: 5,
    titulo: 'Odontopediatria',
    descricao: 'Atendimento especializado e acolhedor para as crianças, cuidando da saúde bucal desde cedo.'
  }
]

function Servicos() {
  const navigate = useNavigate()

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-4xl px-5 py-5 text-center mb-6">Nossos Serviços</h1>

        <section className="mb-8">
          <p className="font-['Roboto'] text-2xl px-5 text-center">
            Na <strong>Vitta</strong>, acreditamos que um sorriso saudável é o primeiro passo para uma vida mais confiante e feliz.
            Oferecemos tratamentos odontológicos completos, com tecnologia moderna e atendimento humanizado.
          </p>
        </section>

        <section className="flex flex-wrap justify-center gap-8 mb-10">
          {servicos.map((item) => (
            <div key={item.id} onClick={() => navigate(`/servicos/${item.id}`)} className="cursor-pointer">
              <CardServico titulo={item.titulo} descricao={item.descricao} />
            </div>
          ))}
        </section>

        <button
          onClick={() => navigate('/fale-conosco')}
          className="flex justify-center items-center mx-auto my-6 w-64 h-16 bg-[#3B5C75] text-[#F8F5F1] font-['Oswald'] text-xl rounded-xl hover:text-2xl transition-all"
        >
          Agende sua consulta
        </button>
      </main>

      <Footer />
    </div>
  )
}

export default Servicos