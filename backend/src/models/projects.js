import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: [true, "The project title is required."]
    },
    description: {
        type: String,
        required: [false]
    },
    sessionTime: {
        type: Number,
        required: [true, "The session time is requierd"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
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

const ProjectModel = mongoose.model('session', projectSchema)

export default ProjectModel