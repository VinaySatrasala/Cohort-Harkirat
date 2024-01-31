import { useState } from "react"


export function CreateTodo(){
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    return (
        <div>
            <input type="text" placeholder="title" onChange={
                function(e){
                    setTitle(e.target.value);
                }
            }/>
            <br></br>
            <input type="text" placeholder="description" onChange={
                function(e){
                    console.log(e.target.value);
                    setDescription(e.target.value);
                }
            }/>
            <br></br>
            <br />
            <button onClick={
                function(){
                    fetch("http://localhost:3000/todos" , {
                        method : "POST",
                        body : JSON.stringify({
                            title : title,
                            description : description
                        }),
                        headers : {
                            "Content-Type" : "application/json"
                        }
                    }).then(
                        async function(res){
                            const json = await res.json();
                            alert(json.msg);
                        }
                    )
                }
            }>Add TODO</button>
        </div>
    )
}