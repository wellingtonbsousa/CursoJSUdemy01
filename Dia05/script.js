// Formatos de Linguagens
//=======================
// Static
//=======================
// Ex: C, C++, Java, TypeScript( let lastName: string = 'Sousa')

//=======================
// Dynamic (O Javascript detecta o tipo de variável portanto: Dynamic)
// Ex: Python, JavaScript, Ruby, PHP
//=======================
// let firstName = 'Wellington'
// let age = 35
//=======================

//=======================
// Convertions or Casting
//=======================

//=======================
// String para Number
//=======================

//let age = '35.2'
//console.log(age, typeof age)

// ParseInt - Analisa e retorna um número inteiro
//age1 = parseInt(age)
//console.log(age1, typeof age1)

// ParseFloat - Fracionário
//age2 = parseFloat(age)
//console.log(age2, typeof age2)

// Unário (+) -> Serve para Integer ou Float
//age3 = +age
//console.log(age3, typeof age3)

// Number -> Serve para Integer ou Float
//age4 = Number(age)
//console.log(age4, typeof age4)


//=======================
// Number para String
//=======================
//let age = 35.2
//console.log(age, typeof age)

//age1 = age.toString()
//console.log(age1, typeof age1)

//age2 = String(age)
//console.log(age2, typeof age2)

//=======================
// Number para Boolean
//=======================

// Number 0 -> false
// Number 1... -> true
let age = 35
age = Boolean(age)
console.log(age, typeof age)