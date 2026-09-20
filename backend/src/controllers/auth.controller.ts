import type { Request, Response } from 'express'
import { autenticarUsuario, registrarUsuario } from '../services/auth.service.js'

type SolicitudRegistro = {
  nombre?: unknown
  apellido?: unknown
  correo?: unknown
  contrasena?: unknown
}

function esTexto(valor: unknown): valor is string {
  return typeof valor === 'string'
}

export async function registrar(req: Request, res: Response): Promise<void> {
  const { nombre, apellido, correo, contrasena } = req.body as SolicitudRegistro

  if (
    !esTexto(nombre) ||
    !esTexto(apellido) ||
    !esTexto(correo) ||
    !esTexto(contrasena)
  ) {
    res.status(400).json({ mensaje: 'Nombre, apellido, correo y contraseña son obligatorios.' })
    return
  }

  if (!correo.includes('@')) {
    res.status(400).json({ mensaje: 'Escribe un correo válido.' })
    return
  }

  if (contrasena.length < 8) {
    res.status(400).json({ mensaje: 'La contraseña debe tener al menos 8 caracteres.' })
    return
  }

  try {
    const usuario = await registrarUsuario({ nombre, apellido, correo, contrasena })

    res.status(201).json({
      mensaje: 'Usuario registrado correctamente.',
      usuario,
    })
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'CORREO_DUPLICADO') {
      res.status(409).json({ mensaje: 'El correo ya está registrado.' })
      return
    }

    console.error('Error al registrar usuario:', error)
    res.status(500).json({ mensaje: 'No se pudo registrar el usuario.' })
  }
}

export async function iniciarSesion(req: Request, res: Response): Promise<void> {
  const { correo, contrasena } = req.body as { correo?: unknown; contrasena?: unknown }

  if (!esTexto(correo) || !esTexto(contrasena)) {
    res.status(400).json({ mensaje: 'Correo y contraseña son obligatorios.' })
    return
  }

  const usuario = await autenticarUsuario({ correo, contrasena })

  if (!usuario) {
    res.status(401).json({ mensaje: 'Correo o contraseña incorrectos.' })
    return
  }

  res.status(200).json({ mensaje: 'Inicio de sesión correcto.', usuario })
}
