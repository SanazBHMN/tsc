"use strict";
// Literal types
let myName;
let username;
username = "Amy";
// functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello');
logMessage(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(2, 2));
