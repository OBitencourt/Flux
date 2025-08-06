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
        required: [true, "The project description is necessary."]
    },
    steps: [
        {
            _id: { 
                type: mongoose.Schema.ObjectId,
                auto: true
            },
            name: String,
            index: Number
        }
    ],
    layer: {
        type: String,
        enum: ["Frontend", "Backend", "Fullstack"],
        required: [true, "Please say the project scope."]
    },
    techs: [
        {
            name: {type: String, required: true, unique: true}
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const ProjectModel = mongoose.model('project', projectSchema)

export default ProjectModel