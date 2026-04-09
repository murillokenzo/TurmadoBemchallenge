import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type FormData = {
  email: string
  senha: string
}

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const navigate = useNavigate()

  function onSubmit(data: FormData) {
    console.log(data)
    navigate('/')
  }

  return (
    <div className="bg-[url('/imagens-do-projeto/imagemfundovitta.jpg')] bg-[length:50%]">
      <Header />
      <Navbar />

      <main className="font-['Oswald'] bg-[#F8F5F1] shadow-md w-full max-w-lg mx-auto px-10 py-8 my-8 rounded-2xl">
        <h1 className="bg-[#3B5C75] text-white text-4xl px-5 py-5 text-center mb-8">Bem-vindo 🦷</h1>
        <p className="font-['Roboto'] text-xl text-center mb-8">Faça login para acessar sua conta e acompanhar seus agendamentos.</p>

        <div className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-700">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register('email', { required: 'E-mail é obrigatório' })}
              className="px-4 py-3 border-2 border-gray-300 rounded-xl text-base focus:border-blue-500 outline-none transition"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-700">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register('senha', { required: 'Senha é obrigatória', minLength: { value: 6, message: 'Mínimo de 6 caracteres' } })}
              className="px-4 py-3 border-2 border-gray-300 rounded-xl text-base focus:border-blue-500 outline-none transition"
            />
            {errors.senha && <span className="text-red-500 text-sm">{errors.senha.message}</span>}
          </div>

          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="bg-blue-500 text-white text-xl font-bold py-3 rounded-xl hover:bg-blue-600 hover:scale-105 transition-all cursor-pointer"
          >
            Entrar
          </button>
        </div>

        <p className="text-center mt-6 font-['Roboto']">
          Não tem uma conta? <a href="#" className="text-blue-500 font-bold hover:underline">Cadastre-se</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Login