const express = require("express");
const zod = require("zod")
const app = express();
// const bodyParser = require('body-parser');

const schema = zod.array(zod.number());
app.use(express.urlencoded());
app.use(express.json());

app.post("/health-checkup",  function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body.kidneys;

  console.log(req.body);
  const response = schema.safeParse(kidneys)
  res.send({
    response
  })
});


app.listen(3000);