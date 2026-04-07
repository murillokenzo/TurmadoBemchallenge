type Props = {
  nome: string
  rm: string
  cargo: string
  foto: string
  github: string
  linkedin: string
}

function CardIntegrante({ nome, rm, cargo, foto, github, linkedin }: Props) {
  return (
    <div className="card">
      <img src={foto} alt={nome} />
      <h2>{nome}</h2>
      <p className="descricao">{rm}</p>
      <p className="cargo">{cargo}</p>
      <div className="links">
        <a href={github} target="_blank">GitHub</a>
        <a href={linkedin} target="_blank">LinkedIn</a>
      </div>
    </div>
  )
}

export default CardIntegrante