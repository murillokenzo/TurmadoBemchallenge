import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  const [saudacao, setSaudacao] = useState('')

  useEffect(() => {
    const horario = new Date().getHours()
    if (horario < 12) {
      setSaudacao('Bom dia! Cuidamos de você desde cedo ☀️')
    } else if (horario < 18) {
      setSaudacao('Boa tarde! Pra você e para o seu sorriso! 🌤️')
    } else {
      setSaudacao('Boa noite! Uma ótima noite para você e seu sorriso 🌙')
    }
  }, [])

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-4xl px-5 py-5 text-center mb-6">{saudacao}</h1>

        <section className="mb-6">
          <p className="font-['Roboto'] text-2xl px-5 text-center">
            Nossa plataforma disponibiliza fácil atendimento e consultas solidárias
            para pessoas que não têm condições de pagar de fato por um tratamento dentário.
          </p>

          <h3 className="bg-[#3B5C75] rounded-full text-4xl text-center text-white py-2 my-4">👨‍⚕️ Clientes</h3>
          <p className="font-['Roboto'] text-2xl px-5 text-center">
            Nosso maior compromisso é com o bem-estar de cada pessoa que busca atendimento.
            Valorizamos o respeito, a empatia e a atenção em cada etapa do processo,
            oferecendo um cuidado humano e acessível.
          </p>
        </section>

        <Link to="/fale-conosco" className="flex justify-center items-center mx-auto my-6 w-64 h-16 bg-[#3B5C75] text-[#F8F5F1] font-['Oswald'] text-xl rounded-xl no-underline hover:text-2xl transition-all">
          FALE CONOSCO
        </Link>

        <img src="/imagens-do-projeto/dentistavitta.webp" alt="Dentista da clínica Vitta" className="mx-auto max-w-full h-auto" />
      </main>

      <Footer />
    </div>
  )
}

export default Home