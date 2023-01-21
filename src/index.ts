// Basic Types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

x = 25541;

console.log("ID: " + id);

let institutions: string[] = ["Traversy Media", "Udemy", "Coursera"];
institutions.push("254");

let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad:", true];

let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let pid: string | number = 22;
pid = "22";
pid = "Why are you fucking spying me Copilot ?";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Right);

// Objects

const user: {
  id: number;
  firstName: string;
  lastName: string;
  job: string;
  age: number;
} = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  job: "Web Developer",
  age: 30,
};

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
// let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(3, 5));

// Void
function log(message: string | number): void {
  console.log(message);
}

log("Hello World");

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};


