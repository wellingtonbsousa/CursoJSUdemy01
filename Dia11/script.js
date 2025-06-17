//=========================
// Arrays
//=========================

let cart = ['Agua', 'Carne', 'Arroz', 'Feijão']
let numbers = [10,20, 33, 40, 5, 13, true]

// cart[4] = 'Suco'
// cart.push('Suco') -> Adiciona um elemento no fim (Melhor)
// cart.pop() -> Remove o último elemento
// cart.shift() -> Remove o primeiro elemento
// cart.unshift('Suco') -> adiciona um elemento no início 
// cart.sort() -> Ordena a lista
// cart.reverse() -> Ordena a lista reversamente
// console.log(cart.length)
// console.log(cart)

let y

// y = cart.includes('Agua') // maiúsculas <> minúsculas (case sesitive)
// y =  cart.indexOf('Carne') // Responde -1 quando não existir

// ----------------------------
// slice não altera o Array
// ----------------------------
// y = cart.slice(1) // Inicia no item 1 até o final
// y = cart.slice(1, 3) // Inicia no item 1 até o 2 (exclui o 3)
// ----------------------------
// splice altera o Array
// ----------------------------
// y = cart.splice(1) // Inicia no item 1 até o final
// y = cart.splice(1, 3) // Inicia no item 1 até o 3 (inclui o 3)

// ----------------------------
// Chain
// ----------------------------
// y = cart.splice(1, 3).sort().toString() // sucessivos metodos
// console.log(y)

// ----------------------------
// Aninhamento (Nesting)
// ----------------------------
// cart.push(numbers)
// console.log(cart)
// y = cart[4][1]
// console.log(y)

let cartNumbers = [cart, numbers]
console.log(cartNumbers)
y = cartNumbers[0][1]
console.log(y)
