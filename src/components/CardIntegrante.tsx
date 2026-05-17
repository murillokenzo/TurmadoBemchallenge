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
    <div className="bg-white rounded-2xl shadow-md w-full sm:w-64 p-6 hover:-translate-y-1 transition-transform">
      <img
        src={foto}
        alt={nome}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-[#3B5C75] mx-auto mb-4 object-cover"
      />
      <h2 className="text-lg sm:text-xl text-center text-[#3B5C75] font-bold mb-2">{nome}</h2>
      <p className="text-sm text-center text-gray-500 mb-1">{rm}</p>
      <p className="text-center font-bold text-[#3B5C75] mb-4">{cargo}</p>
      <div className="flex justify-center gap-4">
        <a href={github} target="_blank" className="text-[#3B5C75] font-bold hover:underline">GitHub</a>
        <a href={linkedin} target="_blank" className="text-[#3B5C75] font-bold hover:underline">LinkedIn</a>
      </div>
    </div>
  )
}

export default CardIntegrante