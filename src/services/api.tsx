const BASE_URL = 'https://vitta-api-rest.onrender.com'

export async function getPacientes() {
  const response = await fetch(`${BASE_URL}/pacientes`)
  return response.json()
}

export async function getPaciente(id: number) {
  const response = await fetch(`${BASE_URL}/pacientes/${id}`)
  return response.json()
}

export async function postPaciente(dados: object) {
  const response = await fetch(`${BASE_URL}/pacientes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  return response.json()
}

export async function getDentistas() {
  const response = await fetch(`${BASE_URL}/dentistas`)
  return response.json()
}

export async function getChamados() {
  const response = await fetch(`${BASE_URL}/chamados`)
  return response.json()
}

export async function postChamado(dados: object) {
  const response = await fetch(`${BASE_URL}/chamados`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  return response.json()
}