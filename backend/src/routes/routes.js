import express from 'express'
import { loginUser, signUpUser } from '../controllers/user.js'
import { createProject } from '../controllers/project.js'
import { createSession } from '../controllers/session.js'

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


/* SESSION ROUTES */
// Private

router.post("/session", createSession)


export default router