import FormularioInicioSesion from './components/FormularioInicioSesion'
import './App.css'

function App() {
  return (
    <main className="pagina-inicio">
      <section className="promocion-cancha" aria-label="Información del sistema">
        <div className="marca marca-promocion">
          <span className="escudo" aria-hidden="true">
            ⚽
          </span>
          <span>
            <strong>Cancha <em>Sintética</em></strong>
            <small>SISTEMA DE RESERVAS</small>
          </span>
        </div>

        <div className="mensaje-promocion">
          <p className="frase-superior">Tu cancha, en un solo lugar</p>
          <h1>
            Reserva tu cancha y
            <br />
            <em>disfruta el partido.</em>
          </h1>
          <p>Gestiona tus reservas de canchas sintéticas<br />de manera rápida y sencilla.</p>
        </div>

        <div className="beneficios">
          <div><span aria-hidden="true">▣</span><strong>Reservas rápidas</strong><small>En pocos clics</small></div>
          <div><span aria-hidden="true">✓</span><strong>Pago seguro</strong><small>Tú decides</small></div>
          <div><span aria-hidden="true">♙</span><strong>Canchas de calidad</strong><small>Siempre disponibles</small></div>
        </div>

        <p className="firma-cancha">⚽ &nbsp; MÁS QUE UNA CANCHA, ES TU ESPACIO</p>
      </section>

      <section className="acceso-panel">
        <FormularioInicioSesion />
        <p className="pie-acceso">Fútbol &nbsp;·&nbsp; Deporte &nbsp;·&nbsp; Comunidad</p>
      </section>
    </main>
  )
}

export default App
