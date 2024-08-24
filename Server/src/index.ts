import express, { Application, Request, Response } from "express";
import "dotenv/config";

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.get('/',(req:Request,res:Response)=>{
    return res.send("Hiii Raj");
})

app.listen( PORT, ()=>{
    console.log( `Server started at port ${PORT}`);   
})