import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type DatosInicioSesion = {
  correo: string
  contrasena: string
}

type ErroresInicioSesion = Partial<Record<keyof DatosInicioSesion, string>>

const datosIniciales: DatosInicioSesion = {
  correo: '',
  contrasena: '',
}

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

  function manejarCambio(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setDatos((datosActuales) => ({ ...datosActuales, [name]: value }))
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
    <section className="mx-auto w-full max-w-[470px]">
      <div className="mb-11 flex items-center gap-3 text-slate-900">
        <span className="grid h-14 w-12 place-items-center rounded-[15px_15px_20px_20px] border-2 border-current text-2xl" aria-hidden="true">⚽</span>
        <span>
          <strong className="block text-2xl leading-none">Cancha <em className="not-italic text-green-600">Sintética</em></strong>
          <small className="mt-1.5 block text-[10px] tracking-[2px]">SISTEMA DE RESERVAS</small>
        </span>
      </div>

      <p className="mb-2 text-sm font-bold uppercase tracking-[1.5px] text-green-700">Iniciar sesión</p>
      <h2 className="m-0 text-4xl font-bold leading-tight text-slate-900">Bienvenido de nuevo.</h2>
      <p className="my-3.5 mb-7 text-slate-500">Ingresa a tu cuenta para gestionar tus reservas.</p>

      <form className="grid gap-5" onSubmit={manejarEnvio} noValidate>
        <label className="grid gap-2 text-sm font-semibold text-slate-600">
          Correo electrónico
          <input
            name="correo"
            type="email"
            value={datos.correo}
            onChange={manejarCambio}
            autoComplete="email"
            className="w-full rounded-lg border border-slate-200 bg-white p-3.5 text-slate-900 outline-none focus:border-green-700 focus:ring-4 focus:ring-green-100"
          />
          {errores.correo && <span className="text-xs font-semibold text-red-700">{errores.correo}</span>}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-600">
          Contraseña
          <input
            name="contrasena"
            type="password"
            value={datos.contrasena}
            onChange={manejarCambio}
            autoComplete="current-password"
            className="w-full rounded-lg border border-slate-200 bg-white p-3.5 text-slate-900 outline-none focus:border-green-700 focus:ring-4 focus:ring-green-100"
          />
          {errores.contrasena && <span className="text-xs font-semibold text-red-700">{errores.contrasena}</span>}
        </label>

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" className="h-4 w-4 accent-green-700" />
          <span>Recordarme</span>
        </label>

        <button type="submit" className="rounded-lg border-0 bg-green-800 p-3.5 font-bold text-white transition hover:bg-green-950">
          <span aria-hidden="true" className="mr-2 text-xl">→</span> Iniciar sesión
        </button>
      </form>

      {mensaje && <p className="mt-5 font-bold text-slate-900">{mensaje}</p>}
      <p className="mt-7 text-center text-sm text-slate-500">¿No tienes una cuenta? <a className="font-bold text-green-700 underline" href="#registro">Crear cuenta</a></p>
    </section>
  )
}

export default FormularioInicioSesion
