"use strict";
var Status1;
(function (Status1) {
    Status1["Active"] = "Active";
    Status1["Inactive"] = "Inactive";
    Status1["Suspended"] = "Suspended";
})(Status1 || (Status1 = {}));
const tuple = [
    42,
    "Hello, TypeScript!",
    true,
    { name: "Alice", age: 30 },
    Status1.Active,
];
console.log("Кортеж целиком:", tuple);
console.log("Первый элемент:", tuple[0]);
console.log("Третий элемент:", tuple[2]);
console.log("Четвертый элемент:", tuple[3]);
const [num, str, bool, person1, status1] = tuple;
console.log("\nДекомпозиция элементов:");
console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);
console.log("Person:", person1);
console.log("Status:", status1);
const readonlyTuple = [...tuple];
console.log("\nReadonly кортеж:", readonlyTuple);
const anotherTuple = [
    42,
    "Hello, TypeScript!",
    true,
    { name: "Alice", age: 30 },
    Status1.Active,
];
function compareTuples(t1, t2) {
    return (t1[0] === t2[0] &&
        t1[1] === t2[1] &&
        t1[2] === t2[2] &&
        t1[3].name === t2[3].name &&
        t1[3].age === t2[3].age &&
        t1[4] === t2[4]);
}
console.log("\nСравнение кортежей:");
console.log("Кортежи равны:", compareTuples(tuple, anotherTuple));
const optionalTuple1 = [10];
const optionalTuple2 = [20, "Optional"];
const optionalTuple3 = [30, "Optional", false];
console.log("\nНеобязательные элементы кортежей:");
console.log("Кортеж 1:", optionalTuple1);
console.log("Кортеж 2:", optionalTuple2);
console.log("Кортеж 3:", optionalTuple3);
