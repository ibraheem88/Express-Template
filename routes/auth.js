import express from "express"
import AuthController from "../controllers/auth.js"

const AuthControllerInstance = new AuthController()
const router = express.Router()

router.post('/login', AuthControllerInstance.login)

export default router