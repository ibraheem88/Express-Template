import mongoose from "mongoose";
import config from './index.js'

mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://"+process.env.USER+":"+process.env.PASSWORD+"@"+process.env.HOSTNAME+process.env.MONGODB_URL,{useNewUrlParser: true})
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.log('Error connecting to MongoDB:', error));
mongoose.connect(config.mongo_uri, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Error connecting to MongoDB:', error))