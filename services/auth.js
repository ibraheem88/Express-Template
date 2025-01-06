import UserDataAccessLayer from "../repositories/user.js";
import encrypt from "../utilis/encrypt.js";
import jwt from "../utilis/jwt.js";

export default class AuthService {
    constructor() {
        this.UserDataAccess = new UserDataAccessLayer();
    }

    async login(email, password) {
        const user = await this.UserDataAccess.findUser({ email });
        const passwordMatch = await encrypt.compareHash(password, user?.password);

        if (!user || !passwordMatch) {
            throw Error("Invalid Password or Email");
        }

        const token = jwt.sign({ user_id: user._id, role: user.role });

        return { ...user.toObject(), token }
    }

}