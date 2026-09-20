import { compare, hash } from 'bcryptjs'
import {
  buscarDatosAutenticacion,
  buscarUsuarioPorCorreo,
  crearUsuario,
  type UsuarioCreado,
} from '../models/usuario.model.js'

export type DatosRegistro = {
  nombre: string
  apellido: string
  correo: string
  contrasena: string
}

export async function registrarUsuario(datos: DatosRegistro): Promise<UsuarioCreado> {
  const correo = datos.correo.trim().toLowerCase()
  const correoExiste = await buscarUsuarioPorCorreo(correo)

  if (correoExiste) {
    throw new Error('CORREO_DUPLICADO')
  }

  const contrasenaHasheada = await hash(datos.contrasena, 12)

  return crearUsuario({
    nombre: datos.nombre.trim(),
    apellido: datos.apellido.trim(),
    correo,
    contrasenaHasheada,
  })
}

export type DatosLogin = {
  correo: string
  contrasena: string
}

export async function autenticarUsuario(datos: DatosLogin): Promise<Omit<UsuarioCreado, 'fechaCreacion'> | null> {
  const usuario = await buscarDatosAutenticacion(datos.correo.trim().toLowerCase())

  if (!usuario) {
    return null
  }

  const contrasenaValida = await compare(datos.contrasena, usuario.contrasena)

  if (!contrasenaValida) {
    return null
  }

  return {
    id: usuario.id,
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    correo: usuario.correo,
    rol: usuario.rol,
  }
}
