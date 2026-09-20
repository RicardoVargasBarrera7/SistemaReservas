import { useState } from 'react'
import LoginPage from './pages/LoginPage.tsx'
import RegistroPage from './pages/RegistroPage.tsx'

function App() {
  const [pagina, setPagina] = useState<'login' | 'registro'>('login')

  return pagina === 'login' ? (
    <LoginPage onCrearCuenta={() => setPagina('registro')} />
  ) : (
    <RegistroPage onIniciarSesion={() => setPagina('login')} />
  )
}

export default App
