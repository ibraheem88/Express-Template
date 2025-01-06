import UserService from "../services/users.js"

export default class UserController {

    constructor() {
        this.UserSerivceInstance = new UserService();
    }

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: "Email and Password are required",
                    status: 400,
                });
            }
            const resp = await this.AuthServiceInstance.login(email?.toLowerCase(), password);

            return res.json({
                data: resp,
                message: "Login Successful",
                status: 200,
            });
        }
        catch (err) {
            next(err)
        }
    }

}