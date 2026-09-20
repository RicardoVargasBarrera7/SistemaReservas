import { ArrowLeft, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import AuthLayout from '../components/AuthLayout.tsx'

type RecuperarContrasenaPageProps = {
  onIniciarSesion: () => void
}

function RecuperarContrasenaPage({ onIniciarSesion }: RecuperarContrasenaPageProps) {
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')

  function manejarEnvio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMensaje(correo ? 'Si el correo existe, recibirás instrucciones para recuperar tu contraseña.' : 'Escribe tu correo electrónico.')
  }

  return (
    <AuthLayout
      heroEtiqueta="Vuelve a tomar el control"
      heroTitulo="Recupera tu acceso"
      heroTituloDestacado="y vuelve al partido."
      heroDescripcion="Te ayudaremos a recuperar el acceso a tu cuenta de forma rápida y segura."
    >
      <section className="mx-auto w-full max-w-[430px]">
        <div className="mb-10 flex items-center gap-3 text-slate-900">
          <div className="grid h-11 w-10 place-items-center rounded-[12px_12px_16px_16px] border-2 border-slate-900 bg-white text-lg shadow-sm" aria-hidden="true">⚽</div>
          <div><strong className="block text-xl font-extrabold leading-none tracking-tight sm:text-2xl">Cancha <em className="not-italic text-green-700">Sintética</em></strong><small className="mt-1 block text-[9px] font-semibold tracking-[2px] text-slate-400">SISTEMA DE RESERVAS</small></div>
        </div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-green-700">Recuperar contraseña</p>
        <h2 className="m-0 text-[clamp(2rem,4vw,2.5rem)] font-extrabold leading-tight tracking-tight text-slate-900">¿Olvidaste tu contraseña?</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">Ingresa tu correo y te enviaremos instrucciones para recuperar tu cuenta.</p>

        <form className="mt-8 grid gap-5" onSubmit={manejarEnvio}>
          <label htmlFor="correo-recuperacion" className="text-xs font-bold text-slate-600">Correo electrónico</label>
          <div className="-mt-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 transition focus-within:border-green-700 focus-within:ring-4 focus-within:ring-green-100">
            <Mail size={18} className="shrink-0 text-slate-400" aria-hidden="true" />
            <input id="correo-recuperacion" type="email" value={correo} onChange={(event) => setCorreo(event.target.value)} placeholder="tu@correo.com" required className="min-w-0 flex-1 border-0 bg-transparent py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-300" />
          </div>
          <button type="submit" className="flex items-center justify-center rounded-xl bg-[#0B7A3B] p-3.5 font-bold text-white shadow-[0_8px_18px_rgba(11,122,59,0.18)] transition hover:bg-green-800 active:translate-y-px focus:outline-none focus:ring-4 focus:ring-green-200"><Send size={18} className="mr-2" />Enviar instrucciones</button>
        </form>

        {mensaje && <p className="mt-4 rounded-lg bg-slate-100 px-3 py-2 text-center text-xs font-semibold text-slate-700" role="status">{mensaje}</p>}
        <button type="button" onClick={onIniciarSesion} className="mx-auto mt-7 flex items-center text-sm font-bold text-green-700 hover:text-green-900"><ArrowLeft size={16} className="mr-2" />Volver a iniciar sesión</button>
      </section>
    </AuthLayout>
  )
}

export default RecuperarContrasenaPage
