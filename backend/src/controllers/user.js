import UserModel from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUpUser = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body

    const emailAlreadyExists = await UserModel.findOne({email: email})

    if(emailAlreadyExists) {
        return res.status(400).json({message: "This email is already being used."})
    }

    const salt = 10
    const cryptPassword = await bcrypt.hash(password, salt)

    const newUser = await UserModel.create({
        name,
        email,
        password: cryptPassword
    })

    const returnedUser = {
        name,
        email
    }

    const token = jwt.sign({email}, process.env.SECRET_KEY, { expiresIn: '24h'})

    return res.status(200).json({message: "User created with success!", returnedUser, token})
}


export const loginUser = async (req, res) => {

    const {
        email,
        password
    } = req.body

    if (!email) {
        return res.status(400).json({message: "Please put the email."})
    }
    if (!password) {
        return res.status(400).json({message: "Please put the password."})
    }

    const user = await UserModel.findOne({ email: email })
    const userId = user._id

    const passwordsMatches = await bcrypt.compare(password, user.password)

    if(!passwordsMatches) {
        return res.status(400).json({message: "Password is wrong."})
    }

    const token = jwt.sign({userId}, process.env.SECRET_KEY, { expiresIn: '24h'})
    
    

    return res.status(200).json({message: "Login made with success", userId, token})
    
}