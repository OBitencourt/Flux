import express from 'express'
const router = express.Router()

// Health route

router.get("/health", (req,res) => {
    console.log("Health route is working")
    res.send("health")
})


export default router