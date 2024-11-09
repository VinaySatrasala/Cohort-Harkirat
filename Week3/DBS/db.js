const { application } = require("express");
const mongoose = require("mongoose");

const express = require("express");
const app = express();


mongoose.connect(
    "mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/adminLogin"
);

const Admin = mongoose.model("admin", {
    username: String,
    password: String
});



const user = new Admin({
    username : "vinay0111",
    password: "123vin"
});

async function print(){
    // const add = await user.save();
    // console.log(add["_id"]);

    console.log(await Admin.find());
}

  
// print();

app.post("/head",function(req , res){
    console.log(req.headers);
    res.send("hello");
})
app.listen(3000);
