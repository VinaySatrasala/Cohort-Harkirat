
const express = require("express");
const app = express();


const mongoose = require("mongoose");
// app.get("/head",function(req , res){
//     // console.log(req.headers);
//     // res.send("hello");
//     res.status(400).send('jhello')
// })


mongoose.connect(
    "mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/adminLogin"
      
  );
  
const admin = mongoose.model("admin",{username:String,password:String});
async function print(){
    const k =await admin.findOne();
    console.log(k);
}

console.log(print());
// app.listen(3000);
