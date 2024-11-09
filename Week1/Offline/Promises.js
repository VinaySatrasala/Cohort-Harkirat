
const { log } = require("console");
const fs = require("fs");

// Async and Promises


// with promises

fs.readFile("a.txt" , "utf-8" , function(err , data){
    console.log(data);
});


// with promises

function print(data){
    console.log(data);
}
function dataPrint(){
    return new Promise(function(resolve){
        fs.readFile("a.txt" , "utf-8" , function(err , data){
            resolve(data);
        });
    });
}

dataPrint().then(print);


// -> a promise can be pending , resolved , rejected


let d = new Promise(function(resolve){
    resolve("foo");
});

function callBack(m){
    console.log("Primise state : " + c);
    console.log(m);
}

// console.log(d);
// d.then(callBack);



console.log("---");
function par(fn){
    fn("foo");
}

let c =new  Promise(par);

c.then(callBack);