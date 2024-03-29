import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config()
import user from './routes/user.js'
import ErrorHandler from "./middleware/ErrorHandler.js";

const app = express()


mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://"+process.env.USER+":"+process.env.PASSWORD+"@"+process.env.HOSTNAME+process.env.MONGODB_URL,{useNewUrlParser: true})
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.log('Error connecting to MongoDB:', error));
mongoose.connect(process.env.MONGODB_URL_LOCAL, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Error connecting to MongoDB:', error))


app.use(express.json())
app.use('/users', user)

app.use(ErrorHandler)

app.listen(process.env.PORT, () => {
    console.log("Server Running on Port: " + process.env.PORT)
})
