import mongoose from "mongoose";
import config from './index.js'

mongoose.set('strictQuery', true);

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Error connecting to MongoDB:', error))