import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config()
import user_routes from './routes/users.js'
import auth_routes from './routes/auth.js'

const app = express()
const PORT = 6000

mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://"+process.env.USER+":"+process.env.PASSWORD+"@"+process.env.HOSTNAME+process.env.MONGODB_URL,{useNewUrlParser: true})
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.log('Error connecting to MongoDB:', error));
mongoose.connect(process.env.MONGODB_URL_LOCAL, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Error connecting to MongoDB:', error))

app.use(express.json())
app.use('/users', user_routes)
app.use('/auth', auth_routes)

app.listen(PORT, () => {
    console.log("Server Running on Port: " + PORT)
})