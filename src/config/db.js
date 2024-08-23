import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.DB_URL;

export const connectUsingMongoose = async () => {
    try{
        await mongoose.connect(`${url}/vms`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB connection established");
    } catch(err) {
        console.log(err);
        console.log("Something went wrong with db connection");
    }
}
