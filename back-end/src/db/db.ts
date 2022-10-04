import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(String(process.env.MONGODB_URL), (e) => {
    try {
        console.log('Connected to database')
    } catch (e) {
        console.log(e)
    }
})