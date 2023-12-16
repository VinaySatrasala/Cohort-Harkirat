// jeneral timeout


function greet(){
    console.log("hello...!");
}


setTimeout(greet , 1 * 1000);



function PriomisifiedTimeout(time){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("calling");
        } , 1 * time);
    });
}

PriomisifiedTimeout(2000).then(function(data){
    console.log(data);
})



// you should not pass arguments to a function while function itself passing like an argument like passing a func in timeout