import type { LucideIcon } from 'lucide-react'
import { CalendarCheck2, ShieldCheck, UsersRound } from 'lucide-react'
import imagenCancha from '../images/canchapage.png'

type AuthHeroProps = {
  etiqueta: string
  titulo: string
  tituloDestacado: string
  descripcion: string
}

type Beneficio = {
  icono: LucideIcon
  titulo: string
  descripcion: string
}

const beneficios: Beneficio[] = [
  { icono: CalendarCheck2, titulo: 'Reservas rápidas', descripcion: 'En pocos clics' },
  { icono: ShieldCheck, titulo: 'Pago seguro', descripcion: 'Tú decides' },
  { icono: UsersRound, titulo: 'Canchas de calidad', descripcion: 'Siempre disponibles' },
]

function AuthHero({ etiqueta, titulo, tituloDestacado, descripcion }: AuthHeroProps) {
  return (
    <section
      className="relative isolate flex min-h-[520px] flex-none flex-col justify-between overflow-hidden bg-cover bg-center px-6 py-8 text-white sm:px-12 sm:py-12 lg:h-screen lg:min-h-0 lg:w-1/2 lg:px-[7%]"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(3, 27, 24, 0.94), rgba(5, 69, 43, 0.63) 58%, rgba(6, 37, 31, 0.72)), url(${imagenCancha})`,
      }}
      aria-label="Información del sistema"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background:linear-gradient(0deg,transparent_49.8%,rgba(255,255,255,.16)_50%,transparent_50.2%)]" />
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

      <div className="relative z-10 my-14 max-w-2xl lg:my-auto">
        <p className="mb-7 text-sm font-medium italic text-green-100/80">{etiqueta}</p>
        <h1 className="mb-5 text-[clamp(2.25rem,4vw,4rem)] font-extrabold leading-[1.04] tracking-tight">
          {titulo}
          <br />
          <em className="not-italic text-green-400">{tituloDestacado}</em>
        </h1>
        <p className="max-w-md text-base leading-relaxed text-slate-200 sm:text-lg">{descripcion}</p>
      </div>

      <div className="relative z-10 flex max-w-2xl gap-3 sm:gap-8">
        {beneficios.map(({ icono: Icono, titulo: tituloBeneficio, descripcion: descripcionBeneficio }) => (
          <div key={tituloBeneficio} className="flex min-w-0 flex-1 items-start gap-2 border-r border-white/20 pr-3 last:border-0 sm:gap-3 sm:pr-7">
            <Icono className="mt-0.5 shrink-0 text-green-400" size={22} strokeWidth={1.8} aria-hidden="true" />
            <div className="grid gap-0.5">
              <strong className="text-xs font-bold sm:text-sm">{tituloBeneficio}</strong>
              <small className="text-[11px] text-green-100/70 sm:text-xs">{descripcionBeneficio}</small>
            </div>
          </div>
        ))}
      </div>

      <p className="relative z-10 mt-8 text-[10px] font-semibold tracking-[2px] text-green-100/70">MÁS QUE UNA CANCHA, ES TU ESPACIO</p>
    </section>
  )
}

export default AuthHero
