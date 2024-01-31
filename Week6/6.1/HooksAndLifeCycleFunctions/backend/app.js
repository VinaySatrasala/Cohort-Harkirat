const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/",function(req , res){
    res.json({
        todos : [{
            title : "1",
            description : "Go to Gym"
        } , {
            title : "1",
            description : "Go to Gym"
        } , {
            title : "1",
            description : "Go to Gym"
        } , {
            title : "1",
            description : "Go to Gym"
        }]
    });
});

app.listen(3000,()=>{
    console.log("On 3000");
})