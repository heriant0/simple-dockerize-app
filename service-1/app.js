import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoute from "./routes/userRoute.js";

// load .env
dotenv.config()

const APP_PORT = process.env.APP_PORT

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(BASE_URL_PORT, ()=> {
    console.log(`Service-1 running on port ${APP_PORT}`)
});