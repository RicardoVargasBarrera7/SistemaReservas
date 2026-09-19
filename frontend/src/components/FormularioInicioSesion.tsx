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

  if (!datos.correo.trim()) {
    errores.correo = 'El correo es obligatorio.'
  } else if (!patronCorreo.test(datos.correo)) {
    errores.correo = 'Escribe un correo válido.'
  }

  if (!datos.contrasena) {
    errores.contrasena = 'La contraseña es obligatoria.'
  }

  return errores
}

function FormularioInicioSesion() {
  const [datos, setDatos] = useState<DatosInicioSesion>(datosIniciales)
  const [errores, setErrores] = useState<ErroresInicioSesion>({})
  const [mensaje, setMensaje] = useState('')

  function manejarCambio(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setDatos((datosActuales) => ({
      ...datosActuales,
      [name]: value,
    }))
  }

  function manejarEnvio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const erroresDeValidacion = validarInicioSesion(datos)
    setErrores(erroresDeValidacion)

    if (Object.keys(erroresDeValidacion).length > 0) {
      setMensaje('Revisa los campos marcados antes de continuar.')
      return
    }

    setMensaje(
      'Formulario válido. La comprobación de credenciales se realizará con la API.',
    )
  }

  return (
    <section className="auth-panel">
      <div className="marca marca-acceso">
        <span className="escudo" aria-hidden="true">⚽</span>
        <span>
          <strong>Cancha <em>Sintética</em></strong>
          <small>SISTEMA DE RESERVAS</small>
        </span>
      </div>
      <p className="eyebrow">Iniciar sesión</p>
      <h2>Bienvenido de nuevo.</h2>
      <p className="form-description">
        Ingresa a tu cuenta para gestionar tus reservas.
      </p>

      <form className="auth-form" onSubmit={manejarEnvio} noValidate>
        <label>
          Correo electrónico
          <input
            name="correo"
            type="email"
            value={datos.correo}
            onChange={manejarCambio}
            autoComplete="email"
          />
          {errores.correo && <span className="field-error">{errores.correo}</span>}
        </label>

        <label className="opcion-recordar">
          <input type="checkbox" />
          <span>Recordarme</span>
        </label>

        <label>
          Contraseña
          <input
            name="contrasena"
            type="password"
            value={datos.contrasena}
            onChange={manejarCambio}
            autoComplete="current-password"
          />
          {errores.contrasena && (
            <span className="field-error">{errores.contrasena}</span>
          )}
        </label>

        <button type="submit" className="submit-button">
          <span aria-hidden="true">→</span> Iniciar sesión
        </button>
      </form>

      <p className="enlace-registro">¿No tienes una cuenta? <a href="#registro">Crear cuenta</a></p>

      {mensaje && <p className="state-message">{mensaje}</p>}
    </section>
  )
}

export default FormularioInicioSesion
