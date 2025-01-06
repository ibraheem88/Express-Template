import dotenv from 'dotenv'
dotenv.config()

var config = {};

config.JWT_SECRET = process.env.JWT_SECRET
config.SALT_ROUNDS = process.env.SALT_ROUNDS

//Mongo
config.MONGO_URI = process.env.MONGODB_URL_LOCAL
config.PORT = process.env.PORT


export default config