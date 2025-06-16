//=========================
// Template Literals
//=========================

let firstName = 'Wellington'
let lastName = 'Sousa'
let age = 63

//console.log('Olá, meu nome é ' + firstName + ' ' + lastName + ' e eu tenho ' + age + ' anos de idade')

// console.log(`Olá, meu nome é ${firstName} ${lastName} e eu tenho ${age} anos de idade`)

//=========================
// String Methods
//=========================

let texto = ' Estou aprendendo JavaScript'
//console.log(texto)
//console.log(texto.charAt(4)) // Retorna o caractere da posição 4
//console.log(texto.includes('JavaScript'))
//console.log(texto.indexOf('aprendendo'))
//console.log(texto.slice(0,5))
//console.log(texto.toUpperCase())
//console.log(texto.toLocaleLowerCase())
//console.log(texto.trim())
//console.log(texto.repeat(5))
//console.log(texto.replace('Estou', 'Eu estou'))

//=========================
// Numeric Methods
//=========================

// let num1 = 3.3785
// console.log(num1)
// console.log(num1.toFixed(2))
// console.log(num1.toString(2))
// console.log(num1.toPrecision(2))

//=========================
// metodos Matematicos
//=========================

let num1 = 2.5
// console.log(Math.round(num1)) // arredonda de acordo com as casas
// console.log(Math.ceil(num1)) // arredonda sempre pra cima
// console.log(Math.floor(num1)) // arredonda sempre pra baixo
// console.log(Math.sqrt(num1)) // raiz quadrada
// console.log(Math.ceil(num1)) // arredonda sempre pra cima
// console.log(Math.pow(num1, 3)) // potencia
// console.log(Math.abs(num1)) // valor absoluto
// console.log(Math.random() * 10 + 1) // gera numero randomico
// console.log(Math.round(Math.random() * 100 + 1)) // arredonda o rando

//============================
// Objetos (multiplos valores)
//============================

let carName = 'Cybertruck'
let carRange = 340
let carMaxSpeed = 112
let carHorsePower = 600

let car = {
    carName: 'Cybertruck',
    carRange: 340,
    carMaxSpeed: 112,
    carHorsePower: 600
}

console.log(car)
