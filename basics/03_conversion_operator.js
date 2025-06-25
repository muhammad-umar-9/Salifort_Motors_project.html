let score = 20;
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" -> 33
// "33abc" -> Nan
// true -> 1  , false->0

let isLoggedIn = "umar";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// empty string " " -> false
// "umar" -> true

// **************************** OPERATIONS ********************************* //

let value = 5;
let negValue = -value;
console.log(negValue);

// Arithmetic Operators
console.log(2 + 2);      // Addition: 4
console.log(5 - 3);      // Subtraction: 2
console.log(4 * 2);      // Multiplication: 8
console.log(10 / 2);     // Division: 5
console.log(10 % 3);     // Modulus (Remainder): 1
console.log(2 ** 3);     // Exponentiation: 8

// Assignment Operators
let assignVal = 10;
assignVal += 5;                  // assignVal = assignVal + 5; assignVal is 15
console.log(assignVal);
assignVal -= 3;                  // assignVal = assignVal - 3; assignVal is 12
console.log(assignVal);
assignVal *= 2;                  // assignVal = assignVal * 2; assignVal is 24
console.log(assignVal);
assignVal /= 4;                  // assignVal = assignVal / 4; assignVal is 6
console.log(assignVal);
assignVal %= 4;                  // assignVal = assignVal % 4; assignVal is 2
console.log(assignVal);

// Comparison Operators
console.log(5 == '5');   // Equal to: true (loose equality)
console.log(5 === '5');  // Strict equal to: false
console.log(5 != '5');   // Not equal to: false
console.log(5 !== '5');  // Strict not equal to: true
console.log(5 > 3);      // Greater than: true
console.log(5 < 3);      // Less than: false
console.log(5 >= 5);     // Greater than or equal to: true
console.log(3 <= 5);     // Less than or equal to: true

// Logical Operators
console.log(true && false); // AND: false
console.log(true || false); // OR: true
console.log(!true);         // NOT: false

// String Operators
console.log("Hello" + " World"); // Concatenation: "Hello World"

// Increment and Decrement Operators
let counter = 5;
console.log(++counter);    // Pre-increment: 6
console.log(counter++);    // Post-increment: 6 (then counter becomes 7)
console.log(--counter);    // Pre-decrement: 6
console.log(counter--);    // Post-decrement: 6 (then counter becomes 5)

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);      // "Yes"

console.log("1" + 2);         // "12" - string + number results in string concatenation
console.log("1" + 2 + 2);     // "122" - left to right: "1" + 2 = "12", then "12" + 2 = "122"
console.log(1 + 2 + "2");     // "32" - left to right: 1 + 2 = 3, then 3 + "2" = "32"

// Boolean value true
console.log(true);
// Unary plus operator converts true to number 1
console.log(+true);

// ***** PREFIX AND POSTFIX OPERATORS *****

// Prefix increment (++x)
let x = 5;
console.log("Initial x:", x);
console.log("Prefix ++x:", ++x);  // Increments x first, then returns the value (6)
console.log("After prefix operation, x:", x);  // x is now 6

// Prefix decrement (--x)
let y = 5;
console.log("Initial y:", y);
console.log("Prefix --y:", --y);  // Decrements y first, then returns the value (4)
console.log("After prefix operation, y:", y);  // y is now 4

// Postfix increment (x++)
let a = 5;
console.log("Initial a:", a);
console.log("Postfix a++:", a++);  // Returns the value first (5), then increments a
console.log("After postfix operation, a:", a);  // a is now 6

// Postfix decrement (x--)
let b = 5;
console.log("Initial b:", b);
console.log("Postfix b--:", b--);  // Returns the value first (5), then decrements b
console.log("After postfix operation, b:", b);  // b is now 4

// Practical example with a loop
console.log("Counting with prefix increment:");
let i = 0;
while (++i < 4) {  // i is incremented before the comparison
    console.log(i);  // Will print 1, 2, 3
}

console.log("Counting with postfix increment:");
let j = 0;
while (j++ < 4) {  // j is incremented after the comparison
    console.log(j);  // Will print 1, 2, 3, 4
}

