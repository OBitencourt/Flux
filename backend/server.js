import express from 'express'
import cors from 'cors' 
import  router  from './routes/routes.js'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())




app.use("/", router)


app.listen(process.env.PORT, (err) => {

    if (err) {
        return "Error in listening proccess"
    }

    console.log(`Server is listening on port ${process.env.PORT}!`)
})