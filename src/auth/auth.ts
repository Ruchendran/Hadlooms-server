import express from "express";
import  {getDb} from "../db.js";
import  {registerTableQuery} from "./auth-table.js";
const authRoute = express.Router();
import type { Request, Response, NextFunction } from "express";
authRoute.post("/login",(req:Request,res:Response,next:NextFunction)=>{
    console.log("request triggered");
})

//new user registration.
authRoute.post("/register",async(req:Request,res:Response,next:NextFunction)=>{
    // console.log("request triggered",req.body);
    const inserValues=(values:object)=>{

    }
    const db = getDb();
    await db.query(registerTableQuery);
    const [regis] = await db.query("show tables like 'register'");
    if(regis.length === 0){
        await db.query(registerTableQuery);
    }else{
        console.log("Table already exists");
    }
    const {username,email,password} = req.body;
    res.send("User registered successfully");
    
})

export {authRoute};
