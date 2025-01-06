import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Number, default: 2, required: true }
})

// to hide password
userSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
};

userSchema.set('toObject', {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    },
});

const User = mongoose.model('User', userSchema)
export default User