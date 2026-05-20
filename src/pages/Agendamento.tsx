import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useVitta } from '../context/VittaContext.tsx'
import { postChamado } from '../services/api'

type FormData = {
  nome: string
  email: string
  telefone: string
  servico: string
  data: string
}

function Agendamento() {
  const { adicionarAgendamento } = useVitta()
  const navigate = useNavigate()
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  async function onSubmit(data: FormData) {
    setEnviando(true)
    setErro('')
    try {
      await postChamado(data)
      adicionarAgendamento(data)
      reset()
      navigate('/agendamento/confirmacao')
    } catch {
      setErro('Erro ao enviar agendamento. Tente novamente.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-2xl mx-auto px-4 sm:px-8 md:px-10 py-8 my-8 rounded-2xl">
        <h1 className="bg-[#3B5C75] text-white text-2xl sm:text-3xl md:text-4xl px-5 py-5 text-center mb-8">Agendar Consulta 🦷</h1>
        <p className="font-['Roboto'] text-lg sm:text-xl text-center mb-8 text-gray-600">
          Preencha o formulário abaixo para agendar sua consulta gratuita.
        </p>

        {erro && <p className="text-red-500 text-center mb-4 font-['Roboto']">{erro}</p>}

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-700">Nome completo</label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              {...register('nome', { required: 'Nome é obrigatório', minLength: { value: 3, message: 'Mínimo de 3 caracteres' } })}
              className="px-4 py-3 border-2 border-gray-300 rounded-xl text-base focus:border-[#3B5C75] outline-none transition"
            />
            {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-700">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register('email', { required: 'E-mail é obrigatório' })}
              className="px-4 py-3 border-2 border-gray-300 rounded-xl text-base focus:border-[#3B5C75] outline-none transition"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-700">Telefone</label>
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              {...register('telefone', { required: 'Telefone é obrigatório' })}
              className="px-4 py-3 border-2 border-gray-300 rounded-xl text-base focus:border-[#3B5C75] outline-none transition"
            />
            {errors.telefone && <span className="text-red-500 text-sm">{errors.telefone.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-700">Serviço</label>
            <select
              {...register('servico', { required: 'Selecione um serviço' })}
              className="px-4 py-3 border-2 border-gray-300 rounded-xl text-base focus:border-[#3B5C75] outline-none transition bg-white"
            >
              <option value="">Selecione um serviço</option>
              <option value="Limpeza Dental">Limpeza Dental</option>
              <option value="Clareamento">Clareamento</option>
              <option value="Ortodontia">Ortodontia</option>
              <option value="Implantes">Implantes</option>
              <option value="Odontopediatria">Odontopediatria</option>
            </select>
            {errors.servico && <span className="text-red-500 text-sm">{errors.servico.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-700">Data preferida</label>
            <input
              type="date"
              {...register('data', { required: 'Data é obrigatória' })}
              className="px-4 py-3 border-2 border-gray-300 rounded-xl text-base focus:border-[#3B5C75] outline-none transition"
            />
            {errors.data && <span className="text-red-500 text-sm">{errors.data.message}</span>}
          </div>

          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={enviando}
            className="bg-[#3B5C75] text-white text-lg md:text-xl font-bold py-3 rounded-xl hover:bg-[#2a4558] hover:scale-105 transition-all cursor-pointer mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {enviando ? 'Enviando...' : 'Agendar Consulta'}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Agendamento