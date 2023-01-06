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
