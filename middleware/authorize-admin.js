import jwt from '../utilis/jwt.js'

const authorizeAdmin = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (!authorization) {
            return res.json({ message: "Authorization Token Needed", status: 401, data: {} })
        }
        const token = authorization.replace("Bearer ", "")
        const payload = await jwt.verify(token, next)

        if (payload?.role !== 1) {
            return res.json({ message: "Unauthorized", status: 403, data: {} })
        }

        const { user_id } = payload
        req.user_id = user_id
        next()
    } catch (err) {
        next(err)
    }
}

export default authorizeAdmin