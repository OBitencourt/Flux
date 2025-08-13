import express from 'express'
import { loginUser, signUpUser } from '../controllers/user.js'
import { createProject, getProjects } from '../controllers/project.js'
import { createSession } from '../controllers/session.js'
import { checkToken } from '../middlewares/checkToken.js'

const router = express.Router()

// Health route

router.get("/health", (req,res) => {
    console.log("Health route is working")
    res.send("health")
})

/* USER ROUTES */

router.post("/user", signUpUser)
router.post("/user/login", loginUser)


/* PROJECT ROUTES */
// Private

router.post("/project", createProject)
router.get("/project/:userId", checkToken, getProjects)

/* SESSION ROUTES */
// Private

router.post("/session", createSession)


export default router