const z = require("zod");

// Type checking of input provided by user

`{
    title : String,
    description : String
}`


const createTodo = z.object({
    title : z.string(),
    description : z.string()
});

const updateTodo = z.object({
    title : z.string(),
    description : z.string()
});


module.exports = {
    createTodo : createTodo, 
    updateTodo : updateTodo
};