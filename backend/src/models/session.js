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
    sessionTime: {
        type: Number,
        required: [true, "The session time is requierd"]
    },
    finalDescription: {
        type: String,
        required: [false]
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
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const SessionModel = mongoose.model('session', sessionSchema)

export default SessionModel