import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FormProvider } from './context/formulario.jsx'

//Importar os Contextos React ROuter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/**Contexto involucrando nosso componente principal */}
    <FormProvider>
      <App />
    </FormProvider>
    
  </StrictMode>,
)
