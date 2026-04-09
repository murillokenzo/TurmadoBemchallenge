import Header from '../components/Header'
import Navbar from '../components/Navbar'
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
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-4xl px-5 py-5 text-center mb-10">Conheça nossa melhor equipe</h1>

        <section className="flex flex-wrap justify-center gap-8 mb-10">
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
    </div>
  )
}

export default Integrantes