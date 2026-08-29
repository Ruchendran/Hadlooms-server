import express from 'express';
import cors from 'cors';
import {dbConnection} from "./db.js";
import path from "path";
const index = express();
index.use(express.json({limit: '50mb'}));
index.use(cors());
import {authRoute} from "./auth/auth.js"
index.use("/auth",authRoute);
const startServer = async ()=>{
   await dbConnection();
    index.listen(3000,()=>{
        console.log('Server is running on port http://localhost:3000');
    })
};
const data:string ='sss'
startServer();