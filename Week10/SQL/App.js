const {Client} = require("pg");
 
const client = new Client({
    host : "localhost",
    port : 5432,
    database : "JPA_DB",
    user : "postgres",
    password : "vinay1234",
})

client.connect();
const query_cre = `    CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`
async function dbcall(){
    const res = await client.query(query_cre);
    // const users = res.fields;
    // users.forEach((e)=>{
    //     console.log(e.columnID + " " + e.)
    // })
    console.log(res);

}

dbcall();
