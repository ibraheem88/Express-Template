import express from "express"
import UserController from "../controllers/users.js"
import authorizeAdmin from '../middleware/authorize-admin.js'

const UserControllerInstance = new UserController()
const router = express.Router()


router.post('/', authorizeAdmin, UserControllerInstance.signup)
router.get('/', authorizeAdmin, UserControllerInstance.getUsers)
router.delete('/:id', authorizeAdmin, UserControllerInstance.deleteUser)

export default router