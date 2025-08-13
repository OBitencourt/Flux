import SessionModel from "../models/session.js";

export const createSession = async (req, res) => {

    const {
        userId,
        title,
        sessionTime,
        finalDescription,
        layer,
        techs
    } = req.body

    if (!userId || !title || !finalDescription || !sessionTime || !layer || !techs ) {
        return res.status(400).json({message: "There is some data empty."})
    }

    const newSession = await SessionModel.create({
        userId,
        title,
        sessionTime,
        finalDescription,
        layer,
        techs
    })

    newSession.save()

    return res.status(200).json({message: "New session created with success.", newSession})
}

export const getSessions = async (req, res) => {
    
    const { userId } = req.params

    if(!userId) {
        return res.status(401).json({message: "No userId provided."})
    }

    const userSessions = await SessionModel.find({ userId: userId })

    if(!userSessions) {
        return res.status(400).json({message: "User does not have any session."})
    }

    return res.status(200).json({message: "Succes on getting sessions!", userSessions})
}