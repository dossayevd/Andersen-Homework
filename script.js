/* 1 Задача */
let firstNumber = +prompt('Введите первое число');
let secondNumber = +prompt('Введите второе число');

if (
  (!isNaN(firstNumber) || firstNumber !== '') &&
  (isNaN(secondNumber) || secondNumber === '')
) {
  console.log('Некорректный ввод!');
} else if (
  (isNaN(firstNumber) || firstNumber === '') &&
  (!isNaN(secondNumber) || secondNumber !== '')
) {
  console.log('Некорректный ввод!');
} else {
  console.log(firstNumber.toString(secondNumber));
}
// /* 1 Задача */

/* 2 Задача */

// let firstNumber;
// let secondNumber;

// function result() {
//   firstNumber = +prompt('Введите первое число');

//   if (isNaN(firstNumber) || firstNumber === '') {
//     return console.log('Некорректный ввод!');
//   }

//   secondNumber = +prompt('Введите второе число');

//   if (isNaN(secondNumber) || secondNumber === '') {
//     return console.log('Некорректный ввод!');
//   } else {
//     console.log(
//       `Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}.`
//     );
//   }
// }

// result();
/* 2 Задача */
