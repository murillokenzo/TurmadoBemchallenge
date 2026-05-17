import { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-20 py-8">
        <h1 className="bg-[#3B5C75] text-white text-2xl sm:text-3xl md:text-4xl px-5 py-5 text-center mb-10">❓ Perguntas Frequentes</h1>

        <section className="flex flex-col md:flex-row gap-6 md:gap-10 mt-8">
          <figure className="shrink-0 flex justify-center">
            <img src="/imagens-do-projeto/imagemfaqvita.webp" alt="Ilustração FAQ" className="w-48 sm:w-64 md:w-72 rounded-lg" />
          </figure>

          <div className="flex flex-col gap-3 w-full">
            {perguntas.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl px-4 sm:px-5 py-4 cursor-pointer shadow-md transition-all ${ativo === index ? 'bg-[#3B5C75] text-white' : 'bg-white text-[#3B5C75]'}`}
                onClick={() => toggleItem(index)}
              >
                <div className="flex justify-between items-center font-bold text-base sm:text-lg">
                  {item.pergunta}
                  <span className={`transition-transform duration-300 ${ativo === index ? 'rotate-180' : ''}`}>▼</span>
                </div>
                {ativo === index && (
                  <p className="mt-3 font-['Roboto'] text-sm sm:text-base border-t border-white/30 pt-3">{item.resposta}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FAQ