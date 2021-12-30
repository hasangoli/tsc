"use strict";
// Basic Types
let id = 5;
let company = "TSC";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let array = [1, true, "string"];
// Tuple
let person = [1, "Ryan", true];
// Tuple Array
let employee;
employee = [
    [1, "Ryan"],
    [2, "Roach"],
    [3, "Levi"],
];
// Union
let p_id; // using | means that type can be string OR number
p_id = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let c_id = 1;
let customerId1 = c_id;
let customerId2 = c_id;
// Functions
const addNum = (x, y) => x + y;
// Void
const log = (message) => console.log(message);
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const ryan = new Person(1, "Ryan McCoy");
// Subclasses
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Roach", "Developer");
// Generics
const getArray = (items) => new Array().concat(items);
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["John", "Ryan", "Roach"]);
numArray.push(1);
strArray.push("hello");
