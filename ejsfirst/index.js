import express from "express";

const app = express();
const port = 3000;


app.get("/",(req,res)=>{


    const d = new Date();
    const day = d.getDay();   
    let type = "Its a week day."
    let adv = "It's time to work hard"
