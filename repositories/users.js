import User from '../models/user.model.js'

export default class UserDataAccessLayer {
    constructor() {

    }

    //   async connect() {
    //     await this.client.connect();
    //     this.db = this.client.db(process.env.MONGODB_DB_NAME);
    //   }

    //   async disconnect() {
    //     await this.client.close();
    //   }

    async getUsers() {
        const collection = this.db.collection('users');
        const result = await collection.find({}).toArray();
        return result;
    }

    async findUser(email) {
        const user = await User.findOne({ email })
        return user
    }

    async addUser(userBody) {
        const user = new User(userBody)
        const newUser = await user.save()
        return newUser;
    }

    async updateUser(userId, updates) {
        const collection = this.db.collection('users');
        const result = await collection.updateOne({ _id: userId }, { $set: updates });
        return result.modifiedCount;
    }

    async deleteUser(userId) {
        const collection = this.db.collection('users');
        const result = await collection.deleteOne({ _id: userId });
        return result.deletedCount;
    }
}
