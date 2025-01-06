import UserService from "../services/users.js"

export default class UserController {

    constructor() {
        this.UserSerivceInstance = new UserService();
    }

    signup = async (req, res, next) => {
        try {
            const body = req?.body
            console.log(body)

            if (!body.email) {
                throw Error("Email is Required Field");
            }

            if (!body.password) {
                throw Error("Password is Required Field");
            }


            const user = await this.UserSerivceInstance.signup(body);
            return res.json({
                data: user,
                message: `User ${user.email} added`,
                status: 200
            })

        } catch (err) {
            next(err);
        }
    }

    getUsers = async (req, res, next) => {
        try {
            const params = req.query
            const data = await this.UserSerivceInstance.getUsers(params);

            return res.status(200).json({
                data: data,
                message: "Users Loaded Successfully",
                status: 200,
            });
        } catch (err) {
            next(err);
        }
    };

    deleteUser = async (req, res, next) => {
        try {
            const id = req.params?.id;

            if (!id) {
                return res.status(400).json({
                    message: "User id Required!",
                    status: 400,
                });
            }
            const resp = await this.UserSerivceInstance.deleteUser(id);
            return res.json({
                data: resp,
                message: "User Deleted",
                status: 200,
            });
        } catch (err) {
            next(err);
        }
    };
}