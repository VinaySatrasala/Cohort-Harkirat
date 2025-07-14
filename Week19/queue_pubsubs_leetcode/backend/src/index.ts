import express from "express"
import {createClient} from "redis"
const app = express();
app.use(express.json());

const client = createClient();
client.on('error',(err)=>{console.log(err)});

app.post("/submit",async (req,res)=>{
    const body = req.body;

    try{
        await client.lPush("submissions",JSON.stringify(body));
        res.status(200).send({
            "message" : "Added to redis"
        })
    }catch(e){
        res.status(500).send({
            "message" : "Somthing went wrong"
        })
    }
})

async function startServer() {
    try{
        await client.connect();
        app.listen(3000,()=>{
            console.log("On port 300")
        });
    }catch(error){
        console.error("Error connecting to redis : ",error)
    }
}


startServer();