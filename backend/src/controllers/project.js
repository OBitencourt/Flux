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


    return res.status(200).json({message: "Project saved with success", newProject})
}

export const getProjects = async (req, res) => {
    const {
        userId
    } = req.params

    const userProjects = await ProjectModel.find({ userId: userId })

    if (!userId) {
        return res.status(401).json({message: "UserId was not received in params."})
    }

    if (!userProjects) {
        return res.status(401).json({message: "There is no projects created on this user account"})
    }

    return res.status(200).json({message: "Projects find with success", userProjects})
}