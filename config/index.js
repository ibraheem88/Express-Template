import dotenv from 'dotenv'
dotenv.config()

var config = {};

config.jwt_secret = process.env.JWT_SECRET
config.salt_rounds = process.env.SALT_ROUNDS

//Mongo
config.mongo_uri = process.env.MONGODB_URL_LOCAL
config.port = process.env.PORT


export default config