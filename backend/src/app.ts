import cors from 'cors'
import express from 'express'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/api/salud', (_request, response) => {
  response.json({
    estado: 'ok',
    mensaje: 'La API está funcionando.',
  })
})

app.listen(port, () => {
  console.log(`API ejecutándose en http://localhost:${port}`)
})