import ProjectModel from "../models/project.js";

export const createProject = async (req, res) => {
    const {
        userId,
        title,
        description,
        steps,
        layer,
        techs,
        createdAt
    } = req.body

    const newProject = await ProjectModel.create({
        userId,
        title,
        description,
        steps,
        layer,
        techs,
        createdAt
    })
    
    if (!steps || !userId || !title || !description || !layer || !techs) {
        return res.status(400).json({message: "There is something wrong with your request."})
    }

    await newProject.save()


    return res.status(200).json({message: "Project saved with success", newProject})
}