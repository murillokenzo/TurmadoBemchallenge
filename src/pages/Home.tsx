import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <section className="conteudo">
          <h1>Bem vindo à Vitta!</h1>
          <p>
            Nossa plataforma disponibiliza fácil atendimento e consultas solidárias
            para pessoas que não têm condições de pagar de fato por um tratamento dentário.
          </p>

          <h3>👨‍⚕️ Clientes</h3>
          <p>
            Nosso maior compromisso é com o bem-estar de cada pessoa que busca atendimento.
            Valorizamos o respeito, a empatia e a atenção em cada etapa do processo,
            oferecendo um cuidado humano e acessível.
          </p>
        </section>

        <img src="/imagens-do-projeto/dentistavitta.webp" alt="Dentista da clínica Vitta" />
      </main>

      <Footer />
    </>
  )
}

export default Home