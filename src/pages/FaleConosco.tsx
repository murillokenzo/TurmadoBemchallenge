import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function FaleConosco() {
  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-2xl sm:text-3xl md:text-4xl px-5 py-5 text-center mb-10">Meios de Contato Conosco ☎️</h1>

        <section className="mb-6">
          <h3 className="bg-[#3B5C75] rounded-full text-xl sm:text-2xl md:text-3xl text-center text-white py-2 my-4">Fale com a gente</h3>
          <p className="font-['Roboto'] text-lg sm:text-xl md:text-2xl px-2 sm:px-5 text-center mb-4">
            Após o envio de mensagem pelos seguintes contatos, entraremos em contato com você em até 24 horas.
          </p>

          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-6 text-center">
              <p className="text-xl sm:text-2xl font-bold text-[#3B5C75]">📞 +55 (11) 98562-3923</p>
              <p className="text-gray-500 mt-2">São Paulo - Capital</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-6 text-center">
              <p className="text-xl sm:text-2xl font-bold text-[#3B5C75]">📧 E-mail</p>
              <p className="text-gray-500 mt-2">VittaOdonto@gmail.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FaleConosco