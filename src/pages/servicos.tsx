import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const servicos = [
  {
    titulo: 'Limpeza Dental',
    descricao: 'Remoção de placas e tártaro com equipamentos de ponta, deixando seus dentes mais saudáveis e livres de manchas.'
  },
  {
    titulo: 'Clareamento',
    descricao: 'Devolva o brilho ao seu sorriso com clareamento a laser e técnicas seguras que preservam o esmalte natural.'
  },
  {
    titulo: 'Ortodontia',
    descricao: 'Alinhe seu sorriso com aparelhos estéticos ou convencionais, sob o cuidado de nossos especialistas.'
  },
  {
    titulo: 'Implantes',
    descricao: 'Recupere dentes perdidos com implantes duradouros e naturais, garantindo estética e conforto na mastigação.'
  },
  {
    titulo: 'Odontopediatria',
    descricao: 'Atendimento especializado e acolhedor para as crianças, cuidando da saúde bucal desde cedo.'
  }
]

function Servicos() {
  return (
    <>
      <header>
        <img src="/imagens-do-projeto/logovitta.png" alt="Logo da Vitta" />
      </header>

      <Navbar />

      <main id="mainservicos">
        <h1>Nossos Serviços</h1>

        <section className="conteudo">
          <p>Na <strong>Vitta</strong>, acreditamos que um sorriso saudável é o primeiro passo para uma vida mais confiante e feliz.
          Oferecemos tratamentos odontológicos completos, com tecnologia moderna e atendimento humanizado.</p>
        </section>

        <section className="servicos">
          {servicos.map((item, index) => (
            <div key={index} className="servico">
              <h2>{item.titulo}</h2>
              <p>{item.descricao}</p>
            </div>
          ))}
        </section>

        <Link to="/fale-conosco" className="botaofaleconosco">
          <p>Agende sua consulta</p>
        </Link>
      </main>
    </>
  )
}

export default Servicos