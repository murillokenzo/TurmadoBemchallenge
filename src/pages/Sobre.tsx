import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Sobre() {
  return (
    <>
      <Header />

      <Navbar />

      <main className="sobrepagina">
        <h1>Sobre Nós</h1>

        <div className="conteudo">
          <p>
            A Vitta nasceu de um sonho coletivo de um grupo de amigos que, ao longo da vida, presenciaram
            inúmeras situações em que pessoas com dificuldades financeiras não tinham acesso a um atendimento
            odontológico digno e de qualidade.
          </p>

          <p>
            Foi assim que decidimos unir forças para criar um espaço que fosse muito mais do que um simples
            consultório. Queríamos construir uma rede de apoio, um ponto de encontro para quem precisa, mas
            que não tem condições de pagar por um tratamento ou uma consulta odontológica.
          </p>

          <p>
            A missão da Vitta é oferecer atendimento odontológico gratuito ou a baixo custo para pessoas em
            situação de vulnerabilidade social. Nosso objetivo é garantir que todos, independentemente de sua
            condição financeira, tenham acesso a cuidados que promovam a saúde, previnam doenças e resgatem
            a autoestima por meio do sorriso.
          </p>

          <p>
            Acreditamos que a odontologia tem um papel transformador na vida das pessoas e, por isso, buscamos
            atuar com excelência, empatia e respeito, valorizando o ser humano em cada atendimento.
          </p>

          <ul>
            <li>Solidariedade: Acreditamos na força da colaboração para construir uma sociedade mais justa e humana.</li>
            <li>Acesso à Saúde: Defendemos o direito universal ao atendimento odontológico de qualidade.</li>
            <li>Empatia: Tratamos cada paciente com carinho, respeito e compreensão, reconhecendo suas histórias e desafios.</li>
            <li>Voluntariado e Comprometimento: Contamos com profissionais que doam seu tempo e conhecimento para fazer a diferença.</li>
            <li>Transparência: Trabalhamos com ética e clareza em todas as nossas ações e atendimentos.</li>
          </ul>

          <p>
            Nos inspiramos em iniciativas sociais que mostram como a união e o comprometimento podem transformar
            comunidades. Acreditamos no poder do sorriso como instrumento de inclusão social.
          </p>

          <h2>Tecnologias utilizadas</h2>
          <p>
            Para desenvolver nosso site utilizamos tecnologias que garantem eficiência, segurança e acessibilidade,
            tornando o processo de agendamento e atendimento simples para todos.
          </p>

          <h2>💻 Front-end</h2>
          <p>HTML5 e CSS3 – Responsáveis pela estrutura e pelo design do site.</p>

          <h2>⚙️ Back-end</h2>
          <p>Java – Linguagem principal utilizada na construção da lógica de funcionamento do sistema.</p>
          <p>Python – Empregado no processamento de dados e automação de tarefas internas.</p>
          <p>Oracle Database – Banco de dados utilizado para armazenar cadastros, agendamentos e históricos.</p>

          <h2>🔐 Segurança e Acessibilidade</h2>
          <p>Implementação de criptografia de dados para proteger as informações pessoais dos pacientes.</p>
          <p>Adoção de padrões de acessibilidade digital (WCAG).</p>

          <h2>💬 Integrações</h2>
          <p>WhatsApp – Canal direto de comunicação entre os pacientes e a equipe de atendimento.</p>
        </div>

        <img src="/imagens-do-projeto/vittasorriso.jpg" alt="Sorriso Vitta" className="imagemsobre" />
      </main>
    <Footer />
    </>
  )
}

export default Sobre