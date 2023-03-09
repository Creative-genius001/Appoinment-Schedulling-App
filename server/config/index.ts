import dotenv from 'dotenv'

dotenv.config()

const {JWT_SECRET_KEY} = process.env;

export {JWT_SECRET_KEY};