"use strict";
// Примитивные типы
let name1 = "John";
let age = 30;
let isActive = true;
let someValue = null;
let undefinedValue = undefined;
let uniqueSymbol = Symbol('unique');
let largeNumber = 100n;
// Type Assertion
let someValue1 = "Hello, TypeScript!";
let strLength = someValue1.length;
let someNum = "123";
let numValue = someNum;
let personData = { name: "Alice", age: 25 };
let person = personData;
let mixedArray = [1, "hello", true];
let numberArray = mixedArray;
let unknownValue = "Test";
if (typeof unknownValue === "string") {
    let stringValue = unknownValue;
}
// Неявно типизированная переменная
let dynamicValueNumber = 42; // тип number
let dynamicValueString = "Now I'm a string"; // тип string
let dynamicValueBool = true; // тип boolean
// Работа с null и undefined
let someValue2 = undefined;
let nullableValue = null;
let canBeNull = null;
let canBeUndefined = undefined;
// Union Types
let identifier = "ID123";
identifier = 456;
function printId(id) {
    console.log("ID:", id);
}
printId("A123");
printId(456);
// Перечисления
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move); // 1
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let color = Color.Red;
console.log(color); // "RED"
