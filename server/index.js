import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'


dotenv.config()
const app = express()
const port = process.env.PORT || 5000


const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send("Api is working")
})


mongoose.set('strictQuery', false)
const connectedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        })
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}


//middleware
app.use(express())
app.use(cookieParser())
app.use(cors(corsOptions))

//routes

app.listen(port,() => {
    connectedDB()
    console.log(`Server is running on port ${port}`)
})