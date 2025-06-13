// Data Types
// ==================
// Primitive Types
// ==================

// String
let firstName = 'Wellington'
console.log(firstName, ' - ', typeof firstName)

// Number
let age = 35
console.log(age, ' - ', typeof age)

// Boolean
let isAdult =  false
console.log(isAdult, ' - ', typeof isAdult)

// Null
let adress = null
console.log(adress, ' - ', typeof adress)

// Undefined
let color
console.log(color, ' - ', typeof color)

// Symbol
let id = Symbol('id')
let meuObjeto = {
    [id]: 123456
}
console.log(meuObjeto[id], ' - ', typeof meuObjeto[id])

// ==================
// Reference
// ==================

// Arrays
let numbers = [10,20,30,35,50]
console.log(numbers, ' - ', typeof numbers)

// Functions
function myName() {
    console.log('Wellington')
}
console.log(myName, ' - ', typeof myName)

// Date
let now = new Date()
console.log(now, ' - ', typeof now)
