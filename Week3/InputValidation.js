const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json());

app.post("/health-checkup" , function(req , res){
    const kidneys = req.body.kidneys;
    // const kidneyLength = kidneys.length;
    console.log(req);
    res.send("everything ok");
});
// global cathes
app.use(function(err , req , res , next){
    res.json(
        {
            msg : "some thing is up"
        }
    )
});
app.listen(3000);