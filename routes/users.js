import express from "express"
import bcrypt from 'bcrypt'
import User from '../models/user.model.js'
import formidable from 'express-formidable'
import adminToken from '../middleware/requireAdminToken.js'

const router = express.Router()
const SALT_ROUNDS = 10

const encryptPassword = async (password) => {
    return bcrypt.genSalt(SALT_ROUNDS).then(salt => {
        return bcrypt.hash(password, salt)
    }).then((hash) => hash)
}

router.post('/', adminToken, formidable(), async (req, res) => {
    const { name, password, canVerify, userId } = req.fields

    if (userId && password) {
        const userExists = await User.findOne({ userId })
        if (userExists) {
            res.json({
                data: {}, message: "UserId already exists",
                status: 409
            })
        } else {
            let encryptedPassowrd = await encryptPassword(password)
            const user = new User({
                userId: userId,
                name: name ? name : '',
                password: encryptedPassowrd,
            })
            user.save().then((user) => {
                res.json({
                    data: {}, message: `User with id#${user.userId} added`,
                    status: 200
                })
            }
            ).catch(err => console.log(err))
        }
    }
    else {
        res.json({
            data: {}, message: `User id and password required for registration`,
            status: 400
        })
    }
})

export default router