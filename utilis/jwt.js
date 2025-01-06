import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const verify = async (token, next) => {
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        return payload
    } catch (err) {
        //next()
    }
}

const sign = (payload) => jwt.sign(payload, process.env.JWT_SECRET)

export default { verify, sign }