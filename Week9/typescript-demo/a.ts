const x:number = 12;
console.log(x);

// Declaring type to args
function greet(s:string){
    console.log(s);
}

greet("Hello");


// Declaring type to return value
function sum(num1:number, num2:number) : number{
    return num1+num2;
}
// Define a function type that takes a number and returns a string
type NumberToStringFunction = (num: number) => string;

// A function that takes another function as a parameter
function processNumberAndConvert(num: number, convertFn: NumberToStringFunction): string {
    // Call the passed function with the provided number
    return convertFn(num);
}

// A function that matches the NumberToStringFunction signature
function numberToString(num: number): string {
    return `The number is ${num}`;
}

// Call the processNumberAndConvert function, passing the numberToString function as an argument
const result = processNumberAndConvert(42, numberToString);

console.log(result); // Output: "The number is 42"
