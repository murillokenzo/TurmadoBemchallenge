import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardIntegrante from '../components/CardIntegrante'

const integrantes = [
  {
    nome: 'Murillo Kenzo Loureiro Kacinvazaki',
    rm: 'RM - 566948',
    cargo: 'Front-end',
    foto: '/imagens-do-projeto/murillovitta.jpg',
    github: 'https://github.com/murillokenzo',
    linkedin: 'https://www.linkedin.com/in/murillo-kenzo-loureiro-kacinvazaki-38362b347/'
  },
  {
    nome: 'Cauã Rocha do Amaral',
    rm: 'RM - 567593',
    cargo: 'Java',
    foto: '/imagens-do-projeto/cauavitta.jpg',
    github: 'https://github.com/eozoka',
    linkedin: 'https://www.linkedin.com/in/cau%C3%A3-rocha-983171269/'
  },
  {
    nome: 'Kauan Prado Famelli',
    rm: 'RM - 566990',
    cargo: 'Python',
    foto: '/imagens-do-projeto/pradovitta.jpg',
    github: 'https://github.com/kauanpf',
    linkedin: 'http://www.linkedin.com/in/kauan-prado-famelli-38018a381'
  }
]

function Integrantes() {
  return (
    <>
      <Header />
      <Navbar />

      <main id="mainintegrantes" className="integrantes">
        <h1>Conheça nossa melhor equipe</h1>

        <section className="cards">
          {integrantes.map((item, index) => (
            <CardIntegrante
              key={index}
              nome={item.nome}
              rm={item.rm}
              cargo={item.cargo}
              foto={item.foto}
              github={item.github}
              linkedin={item.linkedin}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Integrantes