import cors from 'cors'
import express from 'express'
import 'dotenv/config'
import { probarConexion } from './database/conexion.js'
import authRouter from './routes/auth.routes.js'

const app = express()
const port = Number(process.env.PORT ?? 3000)

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)

app.get('/api/salud', (_request, response) => {
  response.json({
    estado: 'ok',
    mensaje: 'La API está funcionando.',
  })
})

app.listen(port, () => {
  console.log(`API ejecutándose en http://localhost:${port}`)

  probarConexion().catch((error: unknown) => {
    const mensaje = error instanceof Error ? error.message : 'Error desconocido'
    console.error(`No se pudo conectar con PostgreSQL: ${mensaje}`)
  })
})