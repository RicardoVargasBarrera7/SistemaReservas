import { Eye, EyeOff, LockKeyhole, Mail, UserRound, UserPlus } from 'lucide-react'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type DatosRegistro = {
  nombre: string
  apellido: string
  correo: string
  contrasena: string
  confirmarContrasena: string
}

type ErroresRegistro = Partial<Record<keyof DatosRegistro, string>>

const datosIniciales: DatosRegistro = {
  nombre: '',
  apellido: '',
  correo: '',
  contrasena: '',
  confirmarContrasena: '',
}

function validarRegistro(datos: DatosRegistro): ErroresRegistro {
  const errores: ErroresRegistro = {}
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!datos.nombre.trim()) errores.nombre = 'El nombre es obligatorio.'
  if (!datos.apellido.trim()) errores.apellido = 'El apellido es obligatorio.'
  if (!datos.correo.trim()) errores.correo = 'El correo es obligatorio.'
  else if (!patronCorreo.test(datos.correo)) errores.correo = 'Escribe un correo válido.'
  if (!datos.contrasena) errores.contrasena = 'La contraseña es obligatoria.'
  else if (datos.contrasena.length < 8) errores.contrasena = 'Usa mínimo 8 caracteres.'
  if (!datos.confirmarContrasena) errores.confirmarContrasena = 'Confirma tu contraseña.'
  else if (datos.contrasena !== datos.confirmarContrasena) errores.confirmarContrasena = 'Las contraseñas no coinciden.'

  return errores
}

function CampoTexto({ nombre, etiqueta, valor, icono: Icono, placeholder, tipo = 'text', error, onChange }: {
  nombre: keyof DatosRegistro
  etiqueta: string
  valor: string
  icono: typeof UserRound
  placeholder: string
  tipo?: string
  error?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label htmlFor={nombre} className="mb-2 block text-xs font-bold text-slate-600">{etiqueta}</label>
      <div className={`group flex items-center gap-3 rounded-xl border bg-white px-3.5 transition focus-within:ring-4 ${error ? 'border-red-400 focus-within:border-red-500 focus-within:ring-red-100' : 'border-slate-200 focus-within:border-green-700 focus-within:ring-green-100'}`}>
        <Icono size={18} className="shrink-0 text-slate-400 group-focus-within:text-green-700" aria-hidden="true" />
        <input id={nombre} name={nombre} type={tipo} value={valor} onChange={onChange} placeholder={placeholder} className="min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-300" />
      </div>
      <p className="mt-1.5 min-h-[18px] text-xs font-semibold text-red-700" role="alert">{error ?? ''}</p>
    </div>
  )
}

function FormularioRegistro({ onIniciarSesion }: { onIniciarSesion: () => void }) {
  const [datos, setDatos] = useState<DatosRegistro>(datosIniciales)
  const [errores, setErrores] = useState<ErroresRegistro>({})
  const [mensaje, setMensaje] = useState('')
  const [mostrarContrasena, setMostrarContrasena] = useState(false)
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false)

  function manejarCambio(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setDatos((datosActuales) => ({ ...datosActuales, [name]: value }))
    if (errores[name as keyof DatosRegistro]) setErrores((actuales) => ({ ...actuales, [name]: undefined }))
  }

  function manejarEnvio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const erroresDeValidacion = validarRegistro(datos)
    setErrores(erroresDeValidacion)
    if (Object.keys(erroresDeValidacion).length > 0) {
      setMensaje('Revisa los campos marcados antes de continuar.')
      return
    }
    setMensaje('Cuenta válida. El registro se enviará a la API en el siguiente paso.')
  }

  const seguridad = datos.contrasena.length >= 12 ? 'fuerte' : datos.contrasena.length >= 8 ? 'media' : 'inicial'
  const colorSeguridad = seguridad === 'fuerte' ? 'bg-green-600' : seguridad === 'media' ? 'bg-amber-400' : 'bg-slate-200'

  return (
    <section className="mx-auto w-full max-w-[490px]">
      <div className="mb-5 flex items-center gap-3 text-slate-900">
        <div className="grid h-11 w-10 place-items-center rounded-[12px_12px_16px_16px] border-2 border-slate-900 bg-white text-lg shadow-sm" aria-hidden="true">⚽</div>
        <div><strong className="block text-xl font-extrabold leading-none tracking-tight sm:text-2xl">Cancha <em className="not-italic text-green-700">Sintética</em></strong><small className="mt-1 block text-[9px] font-semibold tracking-[2px] text-slate-400">SISTEMA DE RESERVAS</small></div>
      </div>

      <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-green-700">Crear cuenta</p>
      <h2 className="m-0 text-[clamp(2rem,4vw,2.5rem)] font-extrabold leading-tight tracking-tight text-slate-900">Crea tu cuenta</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">Regístrate y empieza a reservar tus canchas.</p>

      <form className="mt-6 grid gap-3" onSubmit={manejarEnvio} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <CampoTexto nombre="nombre" etiqueta="Nombre" valor={datos.nombre} icono={UserRound} placeholder="Tu nombre" error={errores.nombre} onChange={manejarCambio} />
          <CampoTexto nombre="apellido" etiqueta="Apellido" valor={datos.apellido} icono={UserRound} placeholder="Tu apellido" error={errores.apellido} onChange={manejarCambio} />
        </div>
        <CampoTexto nombre="correo" etiqueta="Correo electrónico" valor={datos.correo} icono={Mail} placeholder="tu@correo.com" tipo="email" error={errores.correo} onChange={manejarCambio} />
        <div>
          <label htmlFor="contrasena" className="mb-2 block text-xs font-bold text-slate-600">Contraseña</label>
          <div className={`group flex items-center gap-3 rounded-xl border bg-white px-3.5 transition focus-within:ring-4 ${errores.contrasena ? 'border-red-400 focus-within:ring-red-100' : 'border-slate-200 focus-within:border-green-700 focus-within:ring-green-100'}`}>
            <LockKeyhole size={18} className="shrink-0 text-slate-400 group-focus-within:text-green-700" aria-hidden="true" />
            <input id="contrasena" name="contrasena" type={mostrarContrasena ? 'text' : 'password'} value={datos.contrasena} onChange={manejarCambio} placeholder="Mínimo 8 caracteres" className="min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-300" />
            <button type="button" onClick={() => setMostrarContrasena((visible) => !visible)} className="text-slate-400 hover:text-green-700" aria-label="Mostrar u ocultar contraseña">{mostrarContrasena ? <EyeOff size={18} /> : <Eye size={18} />}</button>
          </div>
          <p className="mt-1.5 min-h-[18px] text-xs font-semibold text-red-700" role="alert">{errores.contrasena ?? ''}</p>
        </div>
        <div>
          <label htmlFor="confirmarContrasena" className="mb-2 block text-xs font-bold text-slate-600">Confirmar contraseña</label>
          <div className={`group flex items-center gap-3 rounded-xl border bg-white px-3.5 transition focus-within:ring-4 ${errores.confirmarContrasena ? 'border-red-400 focus-within:ring-red-100' : 'border-slate-200 focus-within:border-green-700 focus-within:ring-green-100'}`}>
            <LockKeyhole size={18} className="shrink-0 text-slate-400 group-focus-within:text-green-700" aria-hidden="true" />
            <input id="confirmarContrasena" name="confirmarContrasena" type={mostrarConfirmacion ? 'text' : 'password'} value={datos.confirmarContrasena} onChange={manejarCambio} placeholder="Repite tu contraseña" className="min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-300" />
            <button type="button" onClick={() => setMostrarConfirmacion((visible) => !visible)} className="text-slate-400 hover:text-green-700" aria-label="Mostrar u ocultar confirmación">{mostrarConfirmacion ? <EyeOff size={18} /> : <Eye size={18} />}</button>
          </div>
          <p className="mt-1.5 min-h-[18px] text-xs font-semibold text-red-700" role="alert">{errores.confirmarContrasena ?? ''}</p>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-slate-500"><span>Seguridad de la contraseña:</span><span className="h-1.5 flex-1 rounded-full bg-slate-200"><span className={`block h-full w-1/3 rounded-full ${colorSeguridad}`} /></span><span>Mínimo 8 caracteres</span></div>
        <button type="submit" className="mt-1 flex items-center justify-center rounded-xl bg-[#0B7A3B] p-3.5 font-bold text-white shadow-[0_8px_18px_rgba(11,122,59,0.18)] transition hover:bg-green-800 active:translate-y-px focus:outline-none focus:ring-4 focus:ring-green-200"><UserPlus size={19} className="mr-2" aria-hidden="true" />Crear cuenta</button>
      </form>

      <div className="mt-3 min-h-[32px]">
        {mensaje && <p className="rounded-lg bg-slate-100 px-3 py-2 text-center text-xs font-semibold text-slate-700" role="status">{mensaje}</p>}
      </div>
      <p className="mt-5 border-t border-slate-200 pt-1 text-center text-sm text-slate-500">¿Ya tienes una cuenta? <button type="button" onClick={onIniciarSesion} className="font-bold text-green-700 underline decoration-green-200 underline-offset-4 hover:text-green-900">Iniciar sesión</button></p>
    </section>
  )
}

export default FormularioRegistro
