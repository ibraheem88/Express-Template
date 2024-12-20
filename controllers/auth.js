import express from "express"
import bcrypt from 'bcrypt'
import dotenv from "dotenv"
import formidable from 'express-formidable'
dotenv.config()
import User from '../models/user.model.js'
import jsonwebtoken from "jsonwebtoken"
const router = express.Router()

const comparePassword = (password, hash = '') => {
    if (password?.length > 0 && hash?.length > 0) {
        return bcrypt.compare(password, hash).then(password =>
            password)
    }
    else {
        return null
    }
}

router.post('/login', formidable(), async (req, res) => {
    const { userId, password } = req.fields
    let userExists;
    userExists = await User.findOne({ userId })

    const passwordMatch = await comparePassword(password, userExists?.password)

    if (userExists && passwordMatch) {
        let token = jsonwebtoken.sign({ userId, role: userExists.role }, process.env.JWT_SECRET)
        res.json({
            data: { token, userId: userExists.userId }, message: "Login Successful",
            status: 200
        })
    }
    else {
        res.json({ message: "Invalid Username or Password", status: 401, data: {} })
    }
}

)

export default router