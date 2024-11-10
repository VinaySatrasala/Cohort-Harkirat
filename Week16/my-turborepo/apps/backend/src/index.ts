import express from "express";
import {url} from "@repo/common/index"
const app = express();

app.get("/",(req,res)=>{
    console.log(url);
    res.send("Hellfvffggo.....!");
})


app.listen(3000)