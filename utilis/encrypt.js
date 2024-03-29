import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

const compareHash = (data, hash = '') => {
    if (text?.length > 0 && hash?.length > 0) {
        return bcrypt.compare(data, hash).then(data =>
            data)
    }
    else {
        return null
    }
}

const createHash = (data) => {
    return bcrypt.genSalt(SALT_ROUNDS).then(salt => {
        return bcrypt.hash(data, salt)
    }).then((hash) => hash)
}

export default { compareHash, createHash }