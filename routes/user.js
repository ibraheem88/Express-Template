import express from "express"
import formidable from 'express-formidable'
import UserController from "../controllers/users.js"
import adminToken from '../middleware/requireAdminToken.js'

const UserControllerInstance = new UserController()
const router = express.Router()


router.post('/', formidable(), UserControllerInstance.signup)

export default router