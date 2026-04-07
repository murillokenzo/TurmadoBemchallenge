import { useState } from 'react'
import Navbar from '../components/Navbar'

const perguntas = [
  {
    pergunta: '👉 Preciso marcar consultas com antecedência?',
    resposta: 'Sim! Toda e qualquer consulta deve ser feita com antecedência, agendada na nossa página de contatos.'
  },
  {
    pergunta: '👉 Quanto tempo dura uma consulta?',
    resposta: 'Em média, uma hora, variando de acordo com o tamanho do seu problema.'
  },
  {
    pergunta: '👉 Com que frequência devo ir ao dentista?',
    resposta: 'Se não houver nenhum problema dentário, é recomendado que as visitas ao dentista ocorram a cada 6 meses.'
  },
  {
    pergunta: '👉 Quem pode ser atendido?',
    resposta: 'Na Vitta, damos prioridade a quem não possui condições de pagar por um tratamento em uma clínica privada ou conveniada. Após comprovação da situação, o paciente tem direito a uma consulta gratuita.'
  }
]

function FAQ() {
  const [ativo, setAtivo] = useState<number | null>(null)

  function toggleItem(index: number) {
    setAtivo(ativo === index ? null : index)
  }

  return (
    <>
      <header>
        <img src="/imagens-do-projeto/logovitta.png" alt="Logo da Vitta" />
      </header>

      <Navbar />

      <main id="mainfaq">
        <h1>❓ Perguntas Frequentes</h1>

        <section className="Perguntas">
          <figure>
            <img src="/imagens-do-projeto/imagemfaqvita.webp" alt="Ilustração de perguntas e respostas" />
          </figure>

          <div className="faq-lista">
            {perguntas.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${ativo === index ? 'active' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleItem(index)}>
                  {item.pergunta}
                </div>
                {ativo === index && (
                  <div className="faq-answer">{item.resposta}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default FAQ