import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoute from './Routes/eventRoute.js'
import { errorHandler, notFound } from './middleware/errorHandle.js'
const app = express()

app.use(express.json())

// error handlers

//.env config function
dotenv.config()

//mongo DB connect function
connectDB()

const PORT = process.env.PORT || 5000

//mount routes
app.use('/events', eventRoute)
app.use(notFound)
app.use(errorHandler)
app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
