const express = require("express");

const app = express();
app.use(express.json());
function userMiddleWare(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "harkirat" || password != "pass") {
    res.status(400).json({ msg: "Somethings up with your inputs1" });
    return;
  }
  next();
}

function kidneyMiddleWare(req , res , next){
    const kidneyId = req.query.kidneyId;
    if (kidneyId != 1 && kidneyId != 2) {
        console.log(kidneyId);
        res.status(400).json({ msg: "Somethings up with your inputs2" });
        return;
    }

    next();
}

app.get("/health-checkup",userMiddleWare,kidneyMiddleWare, function (req, res) {  
  // do something with kidney here
  console.log(req.headers);
  res.json({
    msg: "Your kidney is fine.......!",
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
