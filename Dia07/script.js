//=========================
// Operadores de Comparação
//=========================

// Igualdade Solta (verifica somente o dado)
//console.log(3 == '3')

// Igualdade Estrita (verifica o dado e o tipo)
//console.log(3 === 3)

// Desigualdade Solta (verifica somente o dado)
//console.log(3 != '4')

// Desigualdade Estrita (verifica o dado e o tipo)
// console.log(3 !== '3')

// Maior que
// console.log(8 > 5)

// Menor que
// console.log(3 < 5)

// Maior e igual
// console.log(6 >= 5)

// Menor e igual
// console.log(3 <= 5)

//=============================================
// Coerção de tipo (Atribuição forçada de tipo)
//=============================================
let total
total = 3 + 5
// console.log(total, typeof total)

total = 3 + '5' // Converte sempre para String
// console.log(total, typeof total)

total = 5 - 3
// console.log(total, typeof total)

total = '5' - '3' // Converte sempre para Number
// console.log(total, typeof total)

total = '5' * '3' // Converte sempre para Number
// console.log(total, typeof total)

total = '5' / '3' // Converte sempre para Number
// console.log(total, typeof total)

//=============================================
// Concatenação
//=============================================

let firstName = 'Wellington'
let lastName = 'Sousa'

console.log(firstName + ' ' + lastName)
console.log(firstName, lastName)