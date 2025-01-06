import jwt from 'jsonwebtoken'
import config from '../config/index.js'

const verify = async (token, next) => {
    try {
        const payload = jwt.verify(token, config.JWT_SECRET)
        return payload
    } catch (err) {
        //next()
    }
}

const sign = (payload) => jwt.sign(payload, config.JWT_SECRET)

export default { verify, sign }