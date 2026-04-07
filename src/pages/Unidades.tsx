import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const unidades = [
  {
    nome: 'Vitta Odonto - Centro',
    endereco: 'Rua Augusta, 500 - Consolação, São Paulo - SP',
    telefone: '(11) 98423-1020'
  },
  {
    nome: 'Vitta Odonto - Zona Leste',
    endereco: 'Av. Sapopemba, 4200 - Vila Formosa, São Paulo - SP',
    telefone: '(11) 97212-5568'
  },
  {
    nome: 'Vitta Odonto - Zona Sul',
    endereco: 'Av. Santo Amaro, 3100 - Brooklin, São Paulo - SP',
    telefone: '(11) 95623-9014'
  },
  {
    nome: 'Vitta Odonto - Zona Norte',
    endereco: 'Av. Tucuruvi, 880 - Tucuruvi, São Paulo - SP',
    telefone: '(11) 98231-7772'
  },
  {
    nome: 'Vitta Odonto - Zona Oeste',
    endereco: 'Rua Cerro Corá, 1200 - Vila Romana, São Paulo - SP',
    telefone: '(11) 99458-3399'
  }
]

function Unidades() {
  return (
    <>
      <Header />

      <Navbar />

      <main id="mainunidades">
        <h1>🗺️ Nossas Unidades em São Paulo</h1>

        <section className="conteudo">
          <p>
            A <strong>Vitta Odonto</strong> está presente em diversos bairros de São Paulo,
            oferecendo atendimento de qualidade e gratuito a quem mais precisa.
            Encontre abaixo a unidade mais próxima de você!
          </p>
        </section>

        <img src="/imagens-do-projeto/localidadevitta.jpg" alt="LocalVittaIlustrativo" />

        <section className="unidades">
          {unidades.map((item, index) => (
            <div key={index} className="unidade">
              <h2>{item.nome}</h2>
              <p><strong>📍 Endereço:</strong> {item.endereco}</p>
              <p><strong>☎️ Telefone:</strong> {item.telefone}</p>
            </div>
          ))}
        </section>

        <Link to="/fale-conosco" className="botaofaleconosco">
          <p>Entre em contato conosco</p>
        </Link>
      </main>
    <Footer />
    </>
  )
}

export default Unidades