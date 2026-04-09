type Props = {
  titulo: string
  descricao: string
}

function CardServico({ titulo, descricao }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md w-72 p-6 text-center hover:-translate-y-2 transition-transform">
      <h2 className="bg-[#3B5C75] text-white text-xl font-bold rounded-lg px-3 py-2 mb-4">{titulo}</h2>
      <p className="text-gray-600 text-lg leading-relaxed">{descricao}</p>
    </div>
  )
}

export default CardServico