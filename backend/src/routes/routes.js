import express from 'express'
import { loginUser, signUpUser } from '../controllers/user.js'
import { createProject } from '../controllers/project.js'

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

router.post("/project", createProject)

export default router