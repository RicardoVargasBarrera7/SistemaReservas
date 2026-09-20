import { CalendarCheck2, ShieldCheck, UsersRound } from 'lucide-react'
import FormularioInicioSesion from '../components/FormularioInicioSesion.tsx'
import imagenCancha from '../images/canchapage.png'

type BeneficioProps = {
  icono: typeof CalendarCheck2
  titulo: string
  descripcion: string
}

const beneficios: BeneficioProps[] = [
  { icono: CalendarCheck2, titulo: 'Reservas rápidas', descripcion: 'En pocos clics' },
  { icono: ShieldCheck, titulo: 'Pago seguro', descripcion: 'Tú decides' },
  { icono: UsersRound, titulo: 'Canchas de calidad', descripcion: 'Siempre disponibles' },
]

function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 lg:flex-row">
      <section
        className="relative isolate flex min-h-[620px] flex-1 flex-col justify-between overflow-hidden bg-cover bg-center px-6 py-8 text-white sm:px-12 sm:py-12 lg:min-h-screen lg:px-[7%]"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(3, 27, 24, 0.94), rgba(5, 69, 43, 0.63) 58%, rgba(6, 37, 31, 0.72)), url(${imagenCancha})`,
        }}
        aria-label="Información del sistema"
      >

        <div className="relative z-10 flex items-center gap-3">
          <div className="grid h-12 w-11 place-items-center rounded-[14px_14px_18px_18px] border border-white/70 bg-black/10 shadow-lg backdrop-blur-sm">
            <span className="text-xl" aria-hidden="true">⚽</span>
          </div>
          <div>
            <strong className="block text-xl font-extrabold tracking-tight sm:text-2xl">
              Cancha <em className="not-italic text-green-400">Sintética</em>
            </strong>
            <small className="mt-1 block text-[9px] font-semibold tracking-[2.2px] text-white/70">SISTEMA DE RESERVAS</small>
          </div>
        </div>

        <div className="relative z-10 my-16 max-w-2xl lg:my-auto">
          <p className="mb-7 text-sm font-medium italic text-green-100/80">Tu cancha, en un solo lugar</p>
          <h1 className="mb-5 text-[clamp(2.25rem,4vw,4rem)] font-extrabold leading-[1.04] tracking-tight">
            Reserva tu cancha y
            <br />
            <em className="not-italic text-green-400">disfruta el partido.</em>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-slate-200 sm:text-lg">
            Gestiona tus reservas de canchas sintéticas de manera rápida y sencilla.
          </p>
        </div>

        <div className="relative z-10 flex max-w-2xl gap-3 sm:gap-8">
          {beneficios.map(({ icono: Icono, titulo, descripcion }) => (
            <div key={titulo} className="flex min-w-0 flex-1 items-start gap-2 border-r border-white/20 pr-3 last:border-0 sm:gap-3 sm:pr-7">
              <Icono className="mt-0.5 shrink-0 text-green-400" size={22} strokeWidth={1.8} aria-hidden="true" />
              <div className="grid gap-0.5">
                <strong className="text-xs font-bold sm:text-sm">{titulo}</strong>
                <small className="text-[11px] text-green-100/70 sm:text-xs">{descripcion}</small>
              </div>
            </div>
          ))}
        </div>

        <p className="relative z-10 mt-8 text-[10px] font-semibold tracking-[2px] text-green-100/70">
          MÁS QUE UNA CANCHA, ES TU ESPACIO
        </p>
      </section>

      <section className="flex min-w-0 flex-1 flex-col justify-center bg-slate-50 px-6 py-12 sm:px-12 lg:min-w-[440px] lg:px-[7%]">
        <FormularioInicioSesion />
        <p className="mt-10 text-center text-[10px] font-medium tracking-wide text-slate-400 lg:text-right">Fútbol &nbsp;·&nbsp; Deporte &nbsp;·&nbsp; Comunidad</p>
      </section>
    </main>
  )
}

export default LoginPage
