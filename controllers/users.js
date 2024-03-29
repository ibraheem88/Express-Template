import UserService from "../services/users.js"

export default class UserController {

    constructor() {
        this.UserSerivceInstance = new UserService();
    }

    signup = async (req, res, next) => {
        try {
            const { email, name, password } = req?.fields

            const userBody = { name, password, email }

            // if (email && password) {
            const user = await this.UserSerivceInstance.signup(userBody);
            return res.json({
                data: user,
                message: `User ${user.email} added`,
                status: 200
            })
            // }
            // else {
            res.json({
                data: {}, message: `Email and Password Required for Signup`,
                status: 400
            })
            // }
        } catch (err) {
            next(err);
        }
    }
}