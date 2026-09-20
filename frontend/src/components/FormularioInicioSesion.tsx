import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type DatosInicioSesion = {
  correo: string
  contrasena: string
}

type ErroresInicioSesion = Partial<Record<keyof DatosInicioSesion, string>>

const datosIniciales: DatosInicioSesion = { correo: '', contrasena: '' }

function validarInicioSesion(datos: DatosInicioSesion): ErroresInicioSesion {
  const errores: ErroresInicioSesion = {}
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!datos.correo.trim()) errores.correo = 'El correo es obligatorio.'
  else if (!patronCorreo.test(datos.correo)) errores.correo = 'Escribe un correo válido.'
  if (!datos.contrasena) errores.contrasena = 'La contraseña es obligatoria.'

  return errores
}

function FormularioInicioSesion() {
  const [datos, setDatos] = useState<DatosInicioSesion>(datosIniciales)
  const [errores, setErrores] = useState<ErroresInicioSesion>({})
  const [mensaje, setMensaje] = useState('')
  const [mostrarContrasena, setMostrarContrasena] = useState(false)
  const [recordarme, setRecordarme] = useState(false)

  function manejarCambio(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setDatos((datosActuales) => ({ ...datosActuales, [name]: value }))
    if (errores[name as keyof DatosInicioSesion]) {
      setErrores((erroresActuales) => ({ ...erroresActuales, [name]: undefined }))
    }
  }

  function manejarEnvio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const erroresDeValidacion = validarInicioSesion(datos)
    setErrores(erroresDeValidacion)

    if (Object.keys(erroresDeValidacion).length > 0) {
      setMensaje('Revisa los campos marcados antes de continuar.')
      return
    }

    setMensaje('Formulario válido. La comprobación de credenciales se realizará con la API.')
  }

  return (
    <section className="mx-auto w-full max-w-[430px]">
      <div className="mb-10 flex items-center gap-3 text-slate-900">
        <div className="grid h-11 w-10 place-items-center rounded-[12px_12px_16px_16px] border-2 border-slate-900 bg-white text-lg shadow-sm" aria-hidden="true">⚽</div>
        <div>
          <strong className="block text-xl font-extrabold leading-none tracking-tight sm:text-2xl">Cancha <em className="not-italic text-green-700">Sintética</em></strong>
          <small className="mt-1 block text-[9px] font-semibold tracking-[2px] text-slate-400">SISTEMA DE RESERVAS</small>
        </div>
      </div>

      <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-green-700">Iniciar sesión</p>
      <h2 className="m-0 text-[clamp(2rem,4vw,2.5rem)] font-extrabold leading-tight tracking-tight text-slate-900">Bienvenido de nuevo.</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">Ingresa a tu cuenta para gestionar tus reservas.</p>

      <form className="mt-8 grid gap-5" onSubmit={manejarEnvio} noValidate>
        <div>
          <label htmlFor="correo" className="mb-2 block text-xs font-bold text-slate-600">Correo electrónico</label>
          <div className={`group flex items-center gap-3 rounded-xl border bg-white px-3.5 transition focus-within:ring-4 ${errores.correo ? 'border-red-400 focus-within:border-red-500 focus-within:ring-red-100' : 'border-slate-200 focus-within:border-green-700 focus-within:ring-green-100'}`}>
            <Mail size={18} className="shrink-0 text-slate-400 group-focus-within:text-green-700" aria-hidden="true" />
            <input id="correo" name="correo" type="email" value={datos.correo} onChange={manejarCambio} autoComplete="email" placeholder="tu@correo.com" className="min-w-0 flex-1 border-0 bg-transparent py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-300" />
          </div>
          {errores.correo && <p className="mt-1.5 text-xs font-semibold text-red-700" role="alert">{errores.correo}</p>}
        </div>

        <div>
          <label htmlFor="contrasena" className="mb-2 block text-xs font-bold text-slate-600">Contraseña</label>
          <div className={`group flex items-center gap-3 rounded-xl border bg-white px-3.5 transition focus-within:ring-4 ${errores.contrasena ? 'border-red-400 focus-within:border-red-500 focus-within:ring-red-100' : 'border-slate-200 focus-within:border-green-700 focus-within:ring-green-100'}`}>
            <LockKeyhole size={18} className="shrink-0 text-slate-400 group-focus-within:text-green-700" aria-hidden="true" />
            <input id="contrasena" name="contrasena" type={mostrarContrasena ? 'text' : 'password'} value={datos.contrasena} onChange={manejarCambio} autoComplete="current-password" placeholder="Ingresa tu contraseña" className="min-w-0 flex-1 border-0 bg-transparent py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-300" />
            <button type="button" onClick={() => setMostrarContrasena((visible) => !visible)} className="text-slate-400 transition hover:text-green-700" aria-label={mostrarContrasena ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
              {mostrarContrasena ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errores.contrasena && <p className="mt-1.5 text-xs font-semibold text-red-700" role="alert">{errores.contrasena}</p>}
        </div>

        <div className="flex items-center justify-between gap-3 text-xs">
          <label htmlFor="recordarme" className="flex cursor-pointer items-center gap-2 text-slate-500">
            <input id="recordarme" type="checkbox" checked={recordarme} onChange={(event) => setRecordarme(event.target.checked)} className="h-4 w-4 rounded border-slate-300 accent-green-700" />
            <span>Recordarme</span>
          </label>
          <a href="#recuperar" className="font-semibold text-green-700 transition hover:text-green-900">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" className="mt-1 flex items-center justify-center rounded-xl bg-[#0B7A3B] p-3.5 font-bold text-white shadow-[0_8px_18px_rgba(11,122,59,0.18)] transition hover:bg-green-800 hover:shadow-[0_10px_22px_rgba(11,122,59,0.25)] active:translate-y-px focus:outline-none focus:ring-4 focus:ring-green-200">
          <ArrowRight size={20} className="mr-2" aria-hidden="true" />
          Iniciar sesión
        </button>
      </form>

      {mensaje && <p className="mt-4 rounded-lg bg-slate-100 px-3 py-2 text-center text-xs font-semibold text-slate-700" role="status">{mensaje}</p>}
      <p className="mt-7 text-center text-sm text-slate-500">¿No tienes una cuenta? <a className="font-bold text-green-700 underline decoration-green-200 underline-offset-4 transition hover:text-green-900" href="#registro">Crear cuenta</a></p>
    </section>
  )
}

export default FormularioInicioSesion
