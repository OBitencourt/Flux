import mongoose from "mongoose";

const dbConnect = async () => {
    const connect = await mongoose.connect("mongodb://localhost:27017/flux")

    if(!connect) {
        throw new Error ("It was not possible to connect to flux database...")
    } else {
        console.log("Connected successfully!")
    }
}


export default dbConnect