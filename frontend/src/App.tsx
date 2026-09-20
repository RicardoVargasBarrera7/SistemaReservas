import { useState } from 'react'
import RecuperarContrasenaPage from './pages/RecuperarContrasenaPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import RegistroPage from './pages/RegistroPage.tsx'

function App() {
  const [pagina, setPagina] = useState<'login' | 'registro' | 'recuperar'>('login')

  if (pagina === 'registro') {
    return <RegistroPage onIniciarSesion={() => setPagina('login')} />
  }

  if (pagina === 'recuperar') {
    return <RecuperarContrasenaPage onIniciarSesion={() => setPagina('login')} />
  }

  return (
    <LoginPage
      onCrearCuenta={() => setPagina('registro')}
      onRecuperarContrasena={() => setPagina('recuperar')}
    />
  )
}

export default App
