const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const app = express();
app.use(express.json());
app.use(cors());


app.get("/todos" , async (req , res) => {
    const todos = await Todo.find({});
    res.json({
        "todos" : todos
    });
});

app.post("/todos",async (req , res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            "msg" : "Wrong inputs"
        });
        return;
    }
    console.log(req.body);
    console.log(req.headers);
    await Todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    });

    res.json({
        msg: "Todo added successfully....!"
    });
});

app.put("/completed",async (req , res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "Wrong inputs"
        });
    }
    `Takes two arguments
    serachThing : options with which object can identified uniquely
    ChangeOptions : The things that need to be changed`

    await Todo.updateOne({_id : req.body.id} , {completed : true});

    res.json({
        msg : "Todo marked as completed"
    });
});
app.listen(3000 , ()=>{
    console.log("On PORT 3000")
})