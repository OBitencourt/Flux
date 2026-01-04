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

    return res.status(200).json({message: "Projects found with success", userProjects})
}

export const getSingleProject = async (req, res) => {
    const {
        projectId
    } = req.params

    console.log(req.headers.authorization)

    if (!projectId) {
        return res.status(401).json({message: "Project ID was not received in params"})
    }

    const project = await ProjectModel.findById(projectId)


    if (!project) {
        return res.status(401).json({message: "Project does not exist/There is no project with this id"})
    }
    return res.status(200).json({message: "Project found with success", project})
}