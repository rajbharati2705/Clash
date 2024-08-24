import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname =path.dirname(fileURLToPath(import.meta.url))

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//seting view engine
app.set("view engine","ejs")
app.set("views",path.resolve(__dirname ,"./views"));

app.get('/',(req:Request,res:Response)=>{
    //return res.send("Hiii Raj");
    return res.render("welcome");
})

app.listen( PORT, ()=>{
    console.log( `Server started at port ${PORT}`);   
})