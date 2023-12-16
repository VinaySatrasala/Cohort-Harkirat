// Promisify a function

// sum without promise
function sum(a , b){
    return a+b;
}


// promisifing sum


function sump(a,b){
    return new Promise(function(resolve){
        resolve(a+b);
    });
}


console.log(sum(1,2));


sump(1,2).then(function(ans){
    console.log(ans);
})