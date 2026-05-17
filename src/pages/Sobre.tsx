import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Sobre() {
  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-2xl sm:text-3xl md:text-4xl px-5 py-5 text-center mb-6">Sobre Nós</h1>

        <div className="mb-6">
          <p className="font-['Roboto'] text-lg sm:text-xl md:text-2xl px-2 sm:px-5 text-center mb-4">
            A Vitta nasceu de um sonho coletivo de um grupo de amigos que, ao longo da vida, presenciaram
            inúmeras situações em que pessoas com dificuldades financeiras não tinham acesso a um atendimento
            odontológico digno e de qualidade.
          </p>

          <p className="font-['Roboto'] text-lg sm:text-xl md:text-2xl px-2 sm:px-5 text-center mb-4">
            Foi assim que decidimos unir forças para criar um espaço que fosse muito mais do que um simples
            consultório. Queríamos construir uma rede de apoio, um ponto de encontro para quem precisa, mas
            que não tem condições de pagar por um tratamento ou uma consulta odontológica.
          </p>

          <p className="font-['Roboto'] text-lg sm:text-xl md:text-2xl px-2 sm:px-5 text-center mb-4">
            A missão da Vitta é oferecer atendimento odontológico gratuito ou a baixo custo para pessoas em
            situação de vulnerabilidade social.
          </p>

          <ul className="font-['Roboto'] text-base sm:text-lg md:text-xl px-6 sm:px-10 list-disc mb-4">
            <li className="mb-2">Solidariedade: Acreditamos na força da colaboração para construir uma sociedade mais justa e humana.</li>
            <li className="mb-2">Acesso à Saúde: Defendemos o direito universal ao atendimento odontológico de qualidade.</li>
            <li className="mb-2">Empatia: Tratamos cada paciente com carinho, respeito e compreensão.</li>
            <li className="mb-2">Voluntariado e Comprometimento: Contamos com profissionais que doam seu tempo e conhecimento.</li>
            <li className="mb-2">Transparência: Trabalhamos com ética e clareza em todas as nossas ações.</li>
          </ul>

          <h2 className="bg-[#3B5C75] text-white text-xl sm:text-2xl md:text-3xl px-5 py-2 mb-4">Tecnologias utilizadas</h2>
          <p className="font-['Roboto'] text-base sm:text-lg md:text-xl px-2 sm:px-5 mb-4">Para desenvolver nosso site utilizamos tecnologias que garantem eficiência, segurança e acessibilidade.</p>

          <h2 className="bg-[#3B5C75] text-white text-xl sm:text-2xl md:text-3xl px-5 py-2 mb-4">💻 Front-end</h2>
          <p className="font-['Roboto'] text-base sm:text-lg md:text-xl px-2 sm:px-5 mb-4">React + Vite + TypeScript + TailwindCSS</p>

          <h2 className="bg-[#3B5C75] text-white text-xl sm:text-2xl md:text-3xl px-5 py-2 mb-4">⚙️ Back-end</h2>
          <p className="font-['Roboto'] text-base sm:text-lg md:text-xl px-2 sm:px-5 mb-4">Java – Linguagem principal utilizada na construção da lógica de funcionamento do sistema.</p>
          <p className="font-['Roboto'] text-base sm:text-lg md:text-xl px-2 sm:px-5 mb-4">Python – Empregado no processamento de dados e automação de tarefas internas.</p>
          <p className="font-['Roboto'] text-base sm:text-lg md:text-xl px-2 sm:px-5 mb-4">Oracle Database – Banco de dados utilizado para armazenar cadastros, agendamentos e históricos.</p>

          <h2 className="bg-[#3B5C75] text-white text-xl sm:text-2xl md:text-3xl px-5 py-2 mb-4">🔐 Segurança e Acessibilidade</h2>
          <p className="font-['Roboto'] text-base sm:text-lg md:text-xl px-2 sm:px-5 mb-4">Implementação de criptografia de dados para proteger as informações pessoais dos pacientes.</p>

          <h2 className="bg-[#3B5C75] text-white text-xl sm:text-2xl md:text-3xl px-5 py-2 mb-4">💬 Integrações</h2>
          <p className="font-['Roboto'] text-base sm:text-lg md:text-xl px-2 sm:px-5 mb-4">WhatsApp – Canal direto de comunicação entre os pacientes e a equipe de atendimento.</p>
        </div>

        <img src="/imagens-do-projeto/vittasorriso.jpg" alt="Sorriso Vitta" className="mx-auto max-w-full h-auto rounded-lg" />
      </main>

      <Footer />
    </div>
  )
}

export default Sobre