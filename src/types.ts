// Примитивные типы
let name1: string = "John";
let age: number = 30;
let isActive: boolean = true;
let someValue: null = null;
let undefinedValue: undefined = undefined;
let uniqueSymbol: symbol = Symbol('unique');
let largeNumber: bigint = 100n;

// Type Assertion
let someValue1: any = "Hello, TypeScript!";
let strLength: number = (someValue1 as string).length;

let someNum: any = "123";
let numValue: number = <number>someNum;

interface Person {
  name: string;
  age: number;
}
let personData: any = { name: "Alice", age: 25 };
let person: Person = personData as Person;

let mixedArray: any[] = [1, "hello", true];
let numberArray: number[] = mixedArray as number[];

let unknownValue: unknown = "Test";
if (typeof unknownValue === "string") {
  let stringValue: string = unknownValue as string;
}

// Неявно типизированная переменная
let dynamicValueNumber = 42; // тип number
let dynamicValueString = "Now I'm a string"; // тип string
let dynamicValueBool = true; // тип boolean

// Работа с null и undefined
let someValue2: undefined = undefined;
let nullableValue: null = null;
let canBeNull: number | null = null;
let canBeUndefined: number | undefined = undefined;

// Union Types
let identifier: string | number = "ID123";
identifier = 456;

function printId(id: string | number): void {
  console.log("ID:", id);
}
printId("A123");
printId(456);

// Перечисления
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // 1

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let color: Color = Color.Red;
console.log(color); // "RED"
