import UserDataAccessLayer from "../repositories/users.js";
import encrypt from "../utilis/encrypt.js";

export default class UserService {

  constructor() {
    // Create instance of Data Access layer using our desired model
    this.UserDataAccess = new UserDataAccessLayer();
  };

  async signup(userBody) {
    const userExists = await this.UserDataAccess.findUser(userBody.email)
    if (userExists) {
      throw Error("Email Already Registered")
    } else {
      let encryptedPassowrd = await encrypt.createHash(userBody.password)
      const user = this.UserDataAccess.addUser({ ...userBody, password: encryptedPassowrd })
      return user
    }
  }

  async getUsers(params) {
    const resp = await this.UserDataAccess.getUsers({}, params);
    return resp;
  }

  async deleteUser(id) {
    const user = await this.UserDataAccess.deleteUser(id);

    if (!user) {
      throw Error("User not found!");
    }

    // if (!user.logo_url.includes("default.png")) {
    //   fs.deleteFile('./public' +
    //     user.logo_url
    //   )
    // }

    return user;
  }

}

