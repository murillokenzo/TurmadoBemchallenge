import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useVitta } from '../context/VittaContext'
import { useNavigate } from 'react-router-dom'

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
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  function onSubmit(data: FormData) {
    adicionarAgendamento(data)
    reset()
    navigate('/agendamento/confirmacao')
  }

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-2xl mx-auto px-10 py-8 my-8 rounded-2xl">
        <h1 className="bg-[#3B5C75] text-white text-4xl px-5 py-5 text-center mb-8">Agendar Consulta 🦷</h1>
        <p className="font-['Roboto'] text-xl text-center mb-8 text-gray-600">
          Preencha o formulário abaixo para agendar sua consulta gratuita.
        </p>

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
            className="bg-[#3B5C75] text-white text-xl font-bold py-3 rounded-xl hover:bg-[#2a4558] hover:scale-105 transition-all cursor-pointer mt-4"
          >
            Agendar Consulta
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Agendamento