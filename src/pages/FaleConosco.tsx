import Navbar from '../components/Navbar'

function FaleConosco() {
  return (
    <>
      <header>
        <img src="/imagens-do-projeto/logovitta.png" alt="Logo da Vitta" />
      </header>

      <Navbar />

      <main id="mainfaleconosco">
        <h1>Meios de Contato Conosco ☎️</h1>

        <section className="conteudo">
          <h3>Fale com a gente</h3>
          <p>Após o envio de mensagem pelos seguintes contatos, entraremos em contato com você em até 24 horas.</p>

          <p><strong>📞 +55 (11) 98562-3923</strong></p>
          <p>São Paulo - Capital</p>

          <p><strong>📧 E-mail</strong></p>
          <p>VittaOdonto@gmail.com</p>
        </section>
      </main>
    </>
  )
}

export default FaleConosco