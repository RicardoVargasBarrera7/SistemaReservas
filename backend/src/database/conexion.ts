import 'dotenv/config'
import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.POSTGRES_HOST ?? 'localhost',
  port: Number(process.env.POSTGRES_PORT ?? 5432),
  user: process.env.POSTGRES_USER ?? 'postgres',
  password: process.env.POSTGRES_PASSWORD ?? process.env.MYSQL_PASSWORD ?? '',
  database: process.env.POSTGRES_DATABASE ?? 'sistema_reservas',
  max: 10,
})

export async function probarConexion(): Promise<void> {
  const conexion = await pool.connect()

  try {
    await conexion.query('SELECT 1')
    console.log('Conexión con PostgreSQL establecida.')
  } finally {
    conexion.release()
  }
}

export default pool
