import User from '../models/user.model.js'

export default class UserDataAccessLayer {
    constructor() {

    }

    async getUsers(filters, params) {
        const result = User.find(filters).skip(params.limit * (params.page - 1)).limit(params.limit);
        return result;
    }

    async findUser(filters) {
        const user = await User.findOne(filters)
        return user
    }

    async findById(id) {
        const user = await User.findById(id);
        return user;
    }

    async addUser(userBody) {
        const user = new User(userBody)
        const newUser = await user.save()
        return newUser;
    }

    async updateUser(id, updates) {
        const user = await User.findByIdAndUpdate(id, updates, { new: true })
        return user
    }

    async deleteUser(id) {
        const deletedUser = await User.findByIdAndDelete(id)
        return deletedUser
    }
}
