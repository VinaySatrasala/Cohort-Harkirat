const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/todo-app");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const Todo = mongoose.model("todo" , todoSchema);
module.exports = {
    Todo : Todo
}