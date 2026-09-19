import { useState } from 'react'
import './App.css'

function App() {
  const [isInfoVisible, setIsInfoVisible] = useState(false)

  return (
    <main className="welcome-page">
      <section className="welcome-panel">
        <p className="eyebrow">Sistema de Gestión de Reservas</p>
        <h1>Canchas sintéticas, reservadas sin complicaciones.</h1>
        <p className="intro">
          Esta será la pantalla inicial para clientes, empleados y administradores.
        </p>
        <button
          type="button"
          className="info-button"
          onClick={() => setIsInfoVisible((visible) => !visible)}
        >
          {isInfoVisible ? 'Ocultar explicación' : '¿Qué construiremos aquí?'}
        </button>
        {isInfoVisible && (
          <p className="state-message">
            Primero construiremos el registro y el inicio de sesión.
          </p>
        )}
      </section>
    </main>
  )
}

export default App
