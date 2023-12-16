const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "harkirat" || password != "pass") {
    res.status(400).json({"msg": "Somethings up with your inputs1"})
    return
  }

  if (kidneyId != 1 && kidneyId != 2) {
    console.log(kidneyId);
    res.status(400).json({"msg": "Somethings up with your inputs2"})
    return
  } 
  // do something with kidney here
  console.log(req.headers);
  res.json({
    msg: "Your kidney is fine!"
  })

  
});

app.listen(3000 , function(){
    console.log("Listening on port 3000");
});