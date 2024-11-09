function sum(a , b , func){
    func(a+b);
    return a + b;
}

function disp1(){
    console.log("disp1 : ");
}

function disp2(data){
    console.log("disp2 : "+ data);
}


// can call sum using which display function to use

sum(1,2,disp2);


setTimeout(disp1, 1000);


setInterval(disp1 , 1000);