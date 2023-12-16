import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import clientRouter from './routes/client.js'
import categoryRouter from './routes/category.js'
import courseRouter from './routes/course.js'
import contentMasterRouter from './routes/contentMater.js'
import contentDetailRouter from './routes/contentDetail.js'
import orderRouter from './routes/order.js'
import customerRouter from "./routes/customer.js";
import getUrl from "./routes/getUrl.js"
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://leminhhieu0937659254:1@course-sell.jmev6kg.mongodb.net/`)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express()
app.use(express.json())
app.use(cors())


app.use("/client", clientRouter)
app.use("/category", categoryRouter)
app.use("/course", courseRouter)
app.use("/content-master", contentMasterRouter)
app.use("/contentDetail", contentDetailRouter)
app.use("/order", orderRouter)
app.use("/customer", customerRouter);
app.use("/geturl", getUrl)
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} `)
})