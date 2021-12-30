// Basic Types
let id: number = 5;
let company: string = "TSC";
let isPublished: boolean = true;
let x: any = "Hello";
let ids: number[] = [1, 2, 3, 4, 5];
let array: any[] = [1, true, "string"];

// Tuple
let person: [number, string, boolean] = [1, "Ryan", true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Ryan"],
  [2, "Roach"],
  [3, "Levi"],
];

// Union
let p_id: string | number; // using | means that type can be string OR number
p_id = 22;

// Enum
enum Direction1 {
  Up,
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

// Objects
type User = { id: number; name: string };
const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let c_id: any = 1;
let customerId1 = <number>c_id;
let customerId2 = c_id as number;

// Functions
const addNum = (x: number, y: number): number => x + y;

// Void
const log = (message: string | number): void => console.log(message);

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // ? make property optional
}
const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(3, "Roach", "Developer");

// Generics
const getArray = <T>(items: T[]): T[] => new Array().concat(items);
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["John", "Ryan", "Roach"]);
numArray.push(1);
strArray.push("hello");
