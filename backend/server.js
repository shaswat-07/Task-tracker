import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'

import tasksRoutes from './route/tasksRoutes.js';
import connectDB from './config/db.js';
connectDB();


const app= express()
app.use(cors({
    origin: ['https://task-tracker-eight-theta-21.vercel.app/'],
    credentials: true

}))


app.use(express.json())


app.use('/api/tasks', tasksRoutes)

app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is listening to ${process.env.PORT || 5000}`)
})