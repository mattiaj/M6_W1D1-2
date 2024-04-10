import express from 'express';
import {config} from 'dotenv';
import mongoose from 'mongoose';
import { apiRoute } from './services/routes/api.router.js';

config();

const app = express();

app.use(express.json());


app.use("/", apiRoute);


const initServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        
        app.listen(process.env.PORT, () => {
            console.log(`Il server è collegato alla porta ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("forse qualcosa è andato storto")
    }
}

initServer();