import express from 'express'
import cors from 'cors' 
import  router  from './src/routes/routes.js'
import 'dotenv/config'
import dbConnect from './src/utils/dbConnect.js'

const app = express()

app.use(cors())
app.use(express.json())

// connecting to database

dbConnect()


app.use("/api", router)


app.listen(process.env.PORT, (err) => {

    if (err) {
        return "Error in listening proccess"
    }

    console.log(`Server is listening on port ${process.env.PORT}!`)
})