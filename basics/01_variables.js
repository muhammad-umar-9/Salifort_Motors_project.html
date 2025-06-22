const accountId = 1234567890; // This is a constant variable, it cannot be reassigned
// It is a good practice to use uppercase for constant variables

let accountEmail = "umar@gmail.com"; // This is a variable that can be reassigned
// It is a good practice to use camelCase for variable names

var account = "umar"; // This is a variable that can be reassigned, but it is not recommended to use var
// It is a good practice to use camelCase for variable names

console.log(accountId);
console.log(accountEmail);
console.log(account);

// You can also use template literals to print variables
console.log(`My account id is ${accountId} and my email is ${accountEmail}`);
// Template literals are enclosed by backticks (`) and can contain placeholders for variables   
// using ${variableName} syntax
// This allows for easier string interpolation and multi-line strings
 
/*
prefer using let or const instead of var
- const is used for variables that should not change
- let is used for variables that can change
- var is function scoped and can lead to unexpected behavior
- let and const are block scoped and are the preferred way to declare variables in modern JavaScript
*/
