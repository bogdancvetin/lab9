"use strict";
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function printMatrix(matrix) {
    console.log("Матрица:");
    matrix.forEach(row => console.log(row.join(" ")));
}
printMatrix(matrix);
function getUserInput(prompt, callback) {
    process.stdout.write(prompt);
    process.stdin.once("data", (data) => callback(data.toString().trim()));
}
let stringArray = ["Apple", "Banana", "Cherry", "Date"];
console.log("Массив строк:", stringArray);
console.log("Длина массива:", stringArray.length);
getUserInput("Введите индекс элемента для изменения (0-3): ", (positionInput) => {
    const position = parseInt(positionInput);
    if (isNaN(position) || position < 0 || position >= stringArray.length) {
        console.error("Некорректная позиция!");
        process.exit();
    }
    getUserInput("Введите новое значение для элемента: ", (newValue) => {
        stringArray[position] = newValue;
        console.log("Массив после изменения:", stringArray);
        const [first, second, ...rest] = stringArray;
        console.log("Первый элемент:", first);
        console.log("Второй элемент:", second);
        console.log("Оставшиеся элементы:", rest);
        handleJaggedArrayInput();
    });
});
function handleJaggedArrayInput() {
    const rows = [2, 3, 4];
    const jaggedArray = [];
    function inputRow(rowIndex) {
        if (rowIndex >= rows.length) {
            console.log("Ступенчатый массив:");
            jaggedArray.forEach((row) => console.log(row.join(" ")));
            process.exit();
            return;
        }
        console.log(`Введите ${rows[rowIndex]} числа для строки ${rowIndex + 1}:`);
        getUserInput(`Введите элементы через пробел: `, (rowInput) => {
            const row = rowInput
                .split(" ")
                .map((value) => parseFloat(value))
                .filter((value) => !isNaN(value));
            if (row.length !== rows[rowIndex]) {
                console.error(`Ошибка: ожидалось ${rows[rowIndex]} элементов.`);
                inputRow(rowIndex);
            }
            else {
                jaggedArray.push(row);
                inputRow(rowIndex + 1);
            }
        });
    }
    inputRow(0);
}
