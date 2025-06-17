//=========================
// Arrays (Concatenate)
//=========================
// let cart = ['Agua', 'Carne', 'Arroz', 'Feijão']
// let numbers = [10,20, 33, 40, 5, 13, true]
// let y = cart.concat(numbers)
// console.log(y)

//=========================
// Arrays (Static Methods)
//=========================
// let num1 = 10
// let num2 = 20
// let num3 = 30

// let allNumbers = Array.of(num1, num2, num3)
// console.log(allNumbers)

// let y
// y = Array.from('122') // Só para strings
// console.log(y)

//=========================
// Arrays (Nested Arrays)
//=========================

// let numbers = [10, 11, 12, [20, 21, 22], 30, 31, 32, [40, 41, 42]]
// console.log(numbers)
// let y
// y = numbers.flat()
// console.log(y)

//=========================
// Exercicio
// partindo das duas arrays apresentar uma array como abaixo
// print [10, 20, 30, 40, 50, 60, 70, 80, 90]
//=========================
let num1 = [10, 20, 30, 40, 50]
let num2 = [90, 80, 70, 60, 50]

let y = num1.concat(num2.slice(0, 4)).sort()
console.log(y)
