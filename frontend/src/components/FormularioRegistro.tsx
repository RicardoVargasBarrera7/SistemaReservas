import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type RegisterFormData = {
  nombre: string
  apellido: string
  correo: string
  contrasena: string
  confirmacionContrasena: string
}

type RegisterFormErrors = Partial<Record<keyof RegisterFormData, string>>

const initialFormData: RegisterFormData = {
  nombre: '',
  apellido: '',
  correo: '',
  contrasena: '',
  confirmacionContrasena: '',
}

function validarFormulario(formData: RegisterFormData): RegisterFormErrors {
  const errors: RegisterFormErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!formData.nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio.'
  }

  if (!formData.apellido.trim()) {
    errors.apellido = 'El apellido es obligatorio.'
  }

  if (!formData.correo.trim()) {
    errors.correo = 'El correo es obligatorio.'
  } else if (!emailPattern.test(formData.correo)) {
    errors.correo = 'Escribe un correo válido.'
  }

  if (!formData.contrasena) {
    errors.contrasena = 'La contraseña es obligatoria.'
  } else if (formData.contrasena.length < 8) {
    errors.contrasena = 'Debe tener al menos 8 caracteres.'
  }

  if (!formData.confirmacionContrasena) {
    errors.confirmacionContrasena = 'Confirma tu contraseña.'
  } else if (formData.contrasena !== formData.confirmacionContrasena) {
    errors.confirmacionContrasena = 'Las contraseñas no coinciden.'
  }

  return errors
}

function FormularioRegistro() {
  const [formData, setFormData] = useState<RegisterFormData>(initialFormData)
  const [errors, setErrors] = useState<RegisterFormErrors>({})
  const [message, setMessage] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validarFormulario(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setMessage('Revisa los campos marcados antes de continuar.')
      return
    }

    setMessage(`Formulario recibido para ${formData.nombre} ${formData.apellido}.`)
  }

  return (
    <section className="register-panel">
      <p className="eyebrow">Crear cuenta</p>
      <h2>Regístrate para reservar tu cancha.</h2>
      <p className="form-description">
        Por ahora los datos solo viven en el navegador. Aún no se envían a un servidor.
      </p>

      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <label>
          Nombre
          <input
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          {errors.nombre && <span className="field-error">{errors.nombre}</span>}
        </label>

        <label>
          Apellido
          <input
            name="apellido"
            type="text"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
          {errors.apellido && <span className="field-error">{errors.apellido}</span>}
        </label>

        <label className="full-width">
          Correo electrónico
          <input
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          {errors.correo && <span className="field-error">{errors.correo}</span>}
        </label>

        <label>
          Contraseña
          <input
            name="contrasena"
            type="password"
            value={formData.contrasena}
            onChange={handleChange}
            required
          />
          {errors.contrasena && <span className="field-error">{errors.contrasena}</span>}
        </label>

        <label>
          Confirmar contraseña
          <input
            name="confirmacionContrasena"
            type="password"
            value={formData.confirmacionContrasena}
            onChange={handleChange}
            required
          />
          {errors.confirmacionContrasena && (
            <span className="field-error">{errors.confirmacionContrasena}</span>
          )}
        </label>

        <button type="submit" className="submit-button">
          Crear cuenta
        </button>
      </form>

      {message && <p className="state-message">{message}</p>}
    </section>
  )
}

export default FormularioRegistro