type Props = {
  titulo: string
  descricao: string
}

function CardServico({ titulo, descricao }: Props) {
  return (
    <div className="servico">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  )
}

export default CardServico