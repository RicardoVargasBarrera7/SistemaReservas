import { Router } from 'express'
import { iniciarSesion, registrar } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.post('/registro', registrar)
authRouter.post('/login', iniciarSesion)

export default authRouter
