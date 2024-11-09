// const user = {Name : "Vinay" , age : 21};

// Both are same
// console.log(user["Name"]);

// console.log(user.Name);

// if not present then will be undefined

// if(user["sex"] == undefined){
//     console.log("hello");
//     user.sex = "male";
// }

// console.log(user);



// str1 = "nnay";
// const freq = {n :"vin" , age : 60};


// for (const key in freq) {
//     console.log(key);
// }

// let str = "vinay";

// let a = 10;
// let ev = setInterval(function(){
//   console.log(a);
//   a--;
//   if(a == 0){
//     clearInterval(ev);
//   }
// },1 * 1000);


// function mapExample(arr) {
//   console.log("Original Array:", arr);

//   let newArr = arr.map(function(item) {
//     return item * 2;
//   });
//   console.log("After map:", newArr);
// }
// mapExample([1, 2, 3]);

// function shiftExample(arr) {
//   console.log("Original Array:", arr);

//   arr.shift();
//   console.log("After shift:", arr);
// }
// shiftExample([1, 2, 3]);


// function dateMethods() {
//   const currentDate = new Date();
//   console.log("Current Date:", currentDate);

//   // Getting various components of the date
//   console.log("Date:", currentDate.getDate());
//   console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
//   console.log("Year:", currentDate.getFullYear());
//   console.log("Hours:", currentDate.getHours());
//   console.log("Minutes:", currentDate.getMinutes());
//   console.log("Seconds:", currentDate.getSeconds());

//   // Setting components of the date
//   currentDate.setFullYear(2022);
//   console.log("After setFullYear:", currentDate);

//   currentDate.setMonth(5); // Setting month to June (zero-indexed)
//   console.log("After setMonth:", currentDate);

//   // Getting and setting time in milliseconds since 1970
//   console.log("Time in milliseconds since 1970:", currentDate.getTime());

//   const newDate = new Date(2023, 8, 15); // Creating a new date
//   console.log("New Date:", newDate);
// }

// // Example Usage for Date Methods
// dateMethods();



let arr = [1,2,3,4];

arr.splice(1,1)

console.log(arr);


