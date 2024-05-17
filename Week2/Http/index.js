const express = require("express");
const app = express();

const PORT = 3000;

app.get("/",(req , res) =>{
    res.send("https://kjmvpffc-5173.inc1.devtunnels.ms/");
});

app.post("/hello" , (req , res)=>{
    console.log(req.headers);
    res.send("hello route");
});


app.listen(PORT , () =>{
    console.log(`Listening on port ${PORT}`);
})