//=================================
// Truthy and Falsy
// if and else, loop, operadores lógicos
//=================================

// let texto = 'Wellington' // Truthy
// texto = '' // Falsy
// texto = 0 // Falsy
// texto = null // Falsy
// texto = NaN // Falsy
// texto = -1 // Truthy
// texto = '0' // Truthy

// if (texto) {
//     console.log('Truthy')
// } else {
//     console.log('Falsy')
// }

//=================================
// Operador Ternário
//=================================
// let idade = 19
//if (idade < 18) {
//    console.log('Menor de idade')
//} else {
//    console.log('Maior de idade')
//}

// let resultado = idade < 18 ? 'Menor' : 'Maior'
// console.log(resultado)

// idade < 18 ? console.log('Menor') : console.log('Maior')

// console.log(idade < 18 ? 'Menor' : 'Maior')

//=================================
// Desafio
//=================================

let nota = 95
// let avaliacao

//if (nota >= 90) {
//    avaliacao = 'Excelente'
//} else if (nota >= 70) {
//    avaliacao = 'Bom'
//} else if (nota >= 50) {
//    avaliacao = 'Satisfatório'
//} else {
//    avaliacao = 'Insatisfatório'
//}
//console.log(avaliacao)

console.log(nota >= 90 ? 'Excelente' : nota>= 70 ? 'Bom' : nota >= 50 ? 'Satisfatório' : 'Insatisfatório')