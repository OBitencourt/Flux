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