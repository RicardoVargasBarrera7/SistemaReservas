import pool from '../database/conexion.js'

export type NuevoUsuario = {
  nombre: string
  apellido: string
  correo: string
  contrasenaHasheada: string
}

export type UsuarioCreado = {
  id: string
  nombre: string
  apellido: string
  correo: string
  rol: string
  fechaCreacion: Date
}

export type UsuarioAutenticacion = {
  id: string
  nombre: string
  apellido: string
  correo: string
  contrasena: string
  rol: string
}

export async function buscarUsuarioPorCorreo(correo: string): Promise<boolean> {
  const resultado = await pool.query(
    'SELECT 1 FROM usuarios WHERE correo = $1 LIMIT 1',
    [correo],
  )

  return resultado.rowCount !== null && resultado.rowCount > 0
}

export async function buscarDatosAutenticacion(correo: string): Promise<UsuarioAutenticacion | null> {
  const resultado = await pool.query<UsuarioAutenticacion>(
    `
      SELECT
        usuarios.id,
        usuarios.nombre,
        usuarios.apellido,
        usuarios.correo,
        usuarios.contrasena,
        roles.nombre AS rol
      FROM usuarios
      INNER JOIN roles ON roles.id = usuarios.rol_id
      WHERE usuarios.correo = $1
      LIMIT 1
    `,
    [correo],
  )

  return resultado.rows[0] ?? null
}

export async function crearUsuario(usuario: NuevoUsuario): Promise<UsuarioCreado> {
  const resultado = await pool.query<UsuarioCreado>(
    `
      INSERT INTO usuarios (nombre, apellido, correo, contrasena, rol_id)
      SELECT $1, $2, $3, $4, id
      FROM roles
      WHERE nombre = 'Cliente'
      RETURNING
        id,
        nombre,
        apellido,
        correo,
        (SELECT nombre FROM roles WHERE roles.id = usuarios.rol_id) AS rol,
        fecha_creacion AS "fechaCreacion"
    `,
    [usuario.nombre, usuario.apellido, usuario.correo, usuario.contrasenaHasheada],
  )

  if (resultado.rows.length === 0) {
    throw new Error('El rol Cliente no está configurado.')
  }

  return resultado.rows[0]
}
