import FormularioRegistro from './components/FormularioRegistro'
import MensajeBienvenida from './components/MensajeBienvenida'
import './App.css'

function App() {
  return (
    <main className="welcome-page">
      <MensajeBienvenida />
      <FormularioRegistro />
    </main>
  )
}

export default App
