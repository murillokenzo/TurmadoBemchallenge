import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Login() {
  return (
    <>
      <Header />
      <Navbar />

      <main id="mainlogin">
        <section className="conteudo login">
          <h1>Bem-vindo🦷</h1>
          <p>Faça login para acessar sua conta e acompanhar seus agendamentos.</p>

          <div className="formlogin">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" />

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />

            <button type="button" className="btnentrar">Entrar</button>
          </div>

          <p className="semconta">Não tem uma conta? <a href="#">Cadastre-se</a></p>
        </section>
      </main>
    <Footer />
    </>
  )
}

export default Login