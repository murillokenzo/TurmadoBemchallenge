import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Agendamento = {
  nome: string
  email: string
  telefone: string
  servico: string
  data: string
}

type VittaContextType = {
  agendamentos: Agendamento[]
  adicionarAgendamento: (agendamento: Agendamento) => void
}

const VittaContext = createContext<VittaContextType>({
  agendamentos: [],
  adicionarAgendamento: () => {}
})

export function VittaProvider({ children }: { children: ReactNode }) {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])

  function adicionarAgendamento(agendamento: Agendamento) {
    setAgendamentos(prev => [...prev, agendamento])
  }

  return (
    <VittaContext.Provider value={{ agendamentos, adicionarAgendamento }}>
      {children}
    </VittaContext.Provider>
  )
}

export function useVitta() {
  return useContext(VittaContext)
}