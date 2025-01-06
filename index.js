import dotenv from "dotenv";
import express from "express";
import './config/mongo.js'
import ErrorHandler from "./middleware/error-handler.js";
import router from "./routes/index.js";

dotenv.config()

const app = express()


app.use(express.json())
app.use("/api", router);

app.use(ErrorHandler)

app.listen(process.env.PORT, () => {
    console.log("Server Running on Port: " + process.env.PORT)
})
