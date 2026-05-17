import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { VittaProvider } from './context/Vittacontext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VittaProvider>
      <App />
    </VittaProvider>
  </StrictMode>,
)