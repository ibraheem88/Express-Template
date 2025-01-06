import bcrypt from 'bcrypt'
import config from '../config/index.js'


const compareHash = (data, hash = '') => {
    if (data?.length > 0 && hash?.length > 0) {
        return bcrypt.compare(data, hash).then(data =>
            data)
    }
    else {
        return null
    }
}

const createHash = (data) => {
    return bcrypt.genSalt(config.SALT_ROUNDS).then(salt => {
        return bcrypt.hash(data, salt)
    }).then((hash) => hash)
}

export default { compareHash, createHash }