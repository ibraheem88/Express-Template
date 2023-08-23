import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: { type: String, required: true },
    name: String,
    password: { type: String, required: true },
})

const User = mongoose.model('User', userSchema)
export default User