import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is required and the server didn't received it..."]
    },
    email: {
        type: String,
        required: [true, "The email is required and the server didn't received it..."]
    },
    password: {
        type: String,
        required: [true, "The password is requierd and the server didn't received it..."]
    }
})

const UserModel = mongoose.model('user', userSchema)

export default UserModel