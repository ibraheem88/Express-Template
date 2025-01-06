import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import './config/mongo.js'
import ErrorHandler from "./middleware/error-handler.js";
import router from "./routes/index.js";
import config from "./config/index.js";

dotenv.config()

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use("/api", router);

app.use(ErrorHandler)

app.listen(config.PORT, () => {
    console.log("Server Running on Port: " + config.PORT)
})
