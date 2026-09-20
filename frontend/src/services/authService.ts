export type DatosRegistroApi = {
  nombre: string
  apellido: string
  correo: string
  contrasena: string
}

type RespuestaApi = {
  mensaje?: string
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export async function registrarUsuario(datos: DatosRegistroApi): Promise<RespuestaApi> {
  const respuesta = await fetch(`${API_URL}/api/auth/registro`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  })

  const resultado = (await respuesta.json()) as RespuestaApi

  if (!respuesta.ok) {
    throw new Error(resultado.mensaje ?? 'No se pudo completar el registro.')
  }

  return resultado
}

export async function iniciarSesion(datos: { correo: string; contrasena: string }): Promise<RespuestaApi> {
  const respuesta = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  })

  const resultado = (await respuesta.json()) as RespuestaApi

  if (!respuesta.ok) {
    throw new Error(resultado.mensaje ?? 'No se pudo iniciar sesión.')
  }

  return resultado
}
