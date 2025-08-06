import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: [true, "The session title is required."]
    },
    finalDescription: {
        type: String,
        required: [false]
    },
    sessionTime: {
        type: Number,
        required: [true, "The session time is requierd"]
    },
    createdAt: {
        type: String,
        required: [true, "The day of creation is required"]
    },
    layer: {
        type: String,
        enum: ["Frontend", "Backend", "Fullstack"],
        required: [true, "Please say the project scope."]
    },
    techs: [
        {
            name: {type: String, required: [true]}
        }
    ]
})

const SessionModel = mongoose.model('session', sessionSchema)

export default SessionModel