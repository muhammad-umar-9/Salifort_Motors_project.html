"use strict"; //treat all as new as newer javascript version

//alert (3 + 3); //we are using node js not browser, so alert will not work

console.log(3 + 3); //this will work in node js, it will print 6 in the console

// primitives data types
// 1. string
const name = "Umar"; //string literal
const channel = "CodeWithUmar"; //string literal
// 2. number
const marks = 34; //number literal 
// 3. boolean
const isLoggedIn = true; //boolean literal
const isLoggedOut = false; //boolean literal    
// 4. null
const user = null; //null literal, it is used to represent no value or empty value
// 5. undefined
let userEmail; //undefined literal, it is used to represent a variable that has not been assigned a value yet
// 6. BigInt
const bigNumber = BigInt(1234567890123456789012345678901234567890); //BigInt literal, it is used to represent large integers
// 7. Symbol
const symbol1 = Symbol("This is my symbol"); //Symbol literal, it is used to create unique identifiers, it is not used much in practice
// 8. Object
const userDetails = {
    name: "Umar",
    age: 30,
    isLoggedIn: true
    }; //Object literal, it is used to store key-value pairs
// 9. Array
const userArray = ["Umar", "CodeWithUmar", 34, true]; //Array literal, it is used to store a list of values
// 10. Function
function greet() {
    console.log("Hello, World!");
} //Function literal, it is used to define a function
// 11. Date
const currentDate = new Date(); //Date literal, it is used to represent a date and time
// 12. RegExp
const regex = /[a-z]/; //RegExp literal, it is used to define a regular expression
// 13. Map
const userMap = new Map(); //Map literal, it is used to store key-value pairs
// 14. Set
const userSet = new Set(); //Set literal, it is used to store unique values
// 15. WeakMap
const weakMap = new WeakMap(); //WeakMap literal, it is used to store key
// 16. WeakSet
const weakSet = new WeakSet(); //WeakSet literal, it is used to store unique
// values that are objects and are not referenced elsewhere
// 17. ArrayBuffer
const buffer = new ArrayBuffer(16); //ArrayBuffer literal, it is used to represent
// a fixed-length binary data buffer
// 18. DataView
const dataView = new DataView(buffer); //DataView literal, it is used to read and write
// binary data in an ArrayBuffer
// 19. Float32Array
const floatArray = new Float32Array(4); //Float32Array literal, it is used to represent
// an array of 32-bit floating point numbers
// 20. Float64Array
const doubleArray = new Float64Array(4); //Float64Array literal, it is used to represent

console.log("Data Types in JavaScript:");
console.log("String:", name);
console.log("Channel:", channel);
console.log("Marks:", marks);
console.log("Is Logged In:", isLoggedIn);
console.log("Is Logged Out:", isLoggedOut);
console.log("User:", user);
console.log("User Email:", userEmail);
console.log("Big Number:", bigNumber);
console.log("Symbol:", symbol1);
console.log("User Details:", userDetails);
console.log("User Array:", userArray);
console.log("Greet Function:", greet);
console.log("Current Date:", currentDate);
console.log("Regex:", regex);
console.log("User Map:", userMap);
console.log("User Set:", userSet);
console.log("Weak Map:", weakMap);
console.log("Weak Set:", weakSet);
console.log("Buffer:", buffer);
console.log("Data View:", dataView);
console.log("Float32 Array:", floatArray);
console.log("Float64 Array:", doubleArray);
console.log("Data Types in JavaScript are versatile and allow for various operations and manipulations.");
// You can use these data types to create complex applications and handle different scenarios.
// Understanding these data types is crucial for effective programming in JavaScript.   
// Remember to choose the appropriate data type based on the requirements of your application.
// Happy coding! 😊
