import Navbar from '../components/Navbar'

function Integrantes() {
  return (
    <>
      <header>
        <img src="/imagens-do-projeto/logovitta.png" alt="Logo Vitta" />
      </header>

      <Navbar />

      <main className="integrantes">
        <h1>Conheça nossa melhor equipe</h1>

        <section className="cards">

          <div className="card">
            <img src="/imagens-do-projeto/murillovitta.jpg" alt="Murillo" />
            <h2>Murillo Kenzo Loureiro Kacinvazaki</h2>
            <p className="descricao">RM - 566948</p>
            <p className="cargo">Front-end</p>
            <div className="links">
              <a href="https://github.com/murillokenzo" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/murillo-kenzo-loureiro-kacinvazaki-38362b347/" target="_blank">LinkedIn</a>
            </div>
          </div>

          <div className="card">
            <img src="/imagens-do-projeto/cauavitta.jpg" alt="Cauã" />
            <h2>Cauã Rocha do Amaral</h2>
            <p className="descricao">RM - 567593</p>
            <p className="cargo">Java</p>
            <div className="links">
              <a href="https://github.com/eozoka" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/cau%C3%A3-rocha-983171269/" target="_blank">LinkedIn</a>
            </div>
          </div>

          <div className="card">
            <img src="/imagens-do-projeto/pradovitta.jpg" alt="Kauan" />
            <h2>Kauan Prado Famelli</h2>
            <p className="descricao">RM - 566990</p>
            <p className="cargo">Python</p>
            <div className="links">
              <a href="https://github.com/kauanpf" target="_blank">GitHub</a>
              <a href="http://www.linkedin.com/in/kauan-prado-famelli-38018a381" target="_blank">LinkedIn</a>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default Integrantes