import FormularioInicioSesion from '../components/FormularioInicioSesion'
import imagenCancha from '../images/canchapage.png'

function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-100 lg:flex-row">
      <section
        className="relative flex min-h-[620px] flex-1 flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-8 text-white sm:px-12 sm:py-12 lg:min-h-screen lg:px-[7%]"
        style={{ backgroundImage: `linear-gradient(160deg, rgba(3, 41, 32, 0.72), rgba(4, 91, 52, 0.52)), url(${imagenCancha})` }}
        aria-label="Información del sistema"
      >
        <div className="relative z-10 flex items-center gap-3">
          <span className="grid h-14 w-12 place-items-center rounded-[15px_15px_20px_20px] border-2 border-current text-2xl" aria-hidden="true">
            ⚽
          </span>
          <span>
            <strong className="block text-2xl leading-none">
              Cancha <em className="not-italic text-green-400">Sintética</em>
            </strong>
            <small className="mt-1.5 block text-[10px] tracking-[2px]">SISTEMA DE RESERVAS</small>
          </span>
        </div>

        <div className="relative z-10 my-16 lg:my-auto">
          <p className="mb-12 text-right italic">Tu cancha, en un solo lugar</p>
          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Reserva tu cancha y
            <br />
            <em className="not-italic text-green-400">disfruta el partido.</em>
          </h1>
          <p className="text-lg text-slate-100">
            Gestiona tus reservas de canchas sintéticas
            <br />
            de manera rápida y sencilla.
          </p>
        </div>

        <div className="relative z-10 flex max-w-2xl gap-3 sm:gap-8">
          <Beneficio icon="▣" titulo="Reservas rápidas" descripcion="En pocos clics" />
          <Beneficio icon="✓" titulo="Pago seguro" descripcion="Tú decides" />
          <Beneficio icon="♙" titulo="Canchas de calidad" descripcion="Siempre disponibles" />
        </div>

        <p className="relative z-10 mt-8 text-[11px] tracking-[2px] text-green-100">
          ⚽ &nbsp; MÁS QUE UNA CANCHA, ES TU ESPACIO
        </p>
      </section>

      <section className="flex min-w-0 flex-1 flex-col justify-center bg-[#f8fbfb] px-6 py-14 sm:px-12 lg:min-w-[440px] lg:px-[7%]">
        <FormularioInicioSesion />
        <p className="mt-12 text-right text-[11px] text-slate-500">Fútbol &nbsp;·&nbsp; Deporte &nbsp;·&nbsp; Comunidad</p>
      </section>
    </main>
  )
}

type BeneficioProps = {
  icon: string
  titulo: string
  descripcion: string
}

function Beneficio({ icon, titulo, descripcion }: BeneficioProps) {
  return (
    <div className="grid min-w-0 gap-1 border-r border-green-400/40 pr-3 last:border-0 sm:pr-7">
      <span className="text-2xl text-green-400" aria-hidden="true">{icon}</span>
      <strong className="text-xs sm:text-sm">{titulo}</strong>
      <small className="text-[11px] text-green-100 sm:text-sm">{descripcion}</small>
    </div>
  )
}

export default LoginPage
