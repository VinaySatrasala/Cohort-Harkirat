function asyncfn(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hii in promise");
        } , 3 * 1000);
    });
}


async function main(){
    // thread wait here for val until the the call with awit is done
    // the code below await will be on waited but log 1 will be triggered immediatly but log2 will wait until await

    // with awit
    let val = await asyncfn();
    // val will directly assigned to the result passed in resolve function if await is not specified then promise will be assined to val
    console.log("await: "+typeof(val));
    console.log("log2");


    val = asyncfn();
    console.log("without await :" + val);
}


main();

console.log("log1");