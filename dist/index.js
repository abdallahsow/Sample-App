"use strict";
// Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
x = 25541;
console.log("ID: " + id);
let institutions = ["Traversy Media", "Udemy", "Coursera"];
institutions.push("254");
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Brad:", true];
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let pid = 22;
pid = "22";
pid = "Why are you fucking spying me Copilot ?";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Right);
// Objects
const user = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    job: "Web Developer",
    age: 30,
};
// Type Assertion
let cid = 1;
let customerId = cid;
// let customerId = cid as number;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 5));
