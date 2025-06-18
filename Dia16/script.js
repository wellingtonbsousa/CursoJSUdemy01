//=================================
// Precedência dos Operadores
// ** * / % + - < <= > >= == != === !== && ||
//=================================
let resultado = 3 + 4 * 5 // = 3 + (4 * 5)
console.log(resultado)

let num1 = 5
if ((num1 == 5 || num1 === 3) && num1 > 8) {
    console.log('Resultado correto!')
} else {
    console.log('Resultado incorreto!')
}

//=================================
// Switch e Case
//=================================
let dia = 10
switch(dia) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    case 7:
        console.log('Sábado')
        break
default:
    console.log('Número inválido')
}

//=================================
// Switch e Case (com strings)
//=================================
let userLevel = 'ze' // admin, editor, guest

switch(userLevel) {
    case 'admin':
        console.log('Full Access!')
        break
    case 'editor':
        console.log('Editor Level!')
        break
    case 'guest':
        console.log('Guest Level!')
        break
    default:
        console.log('Unknown User!')
}

//=================================
// Switch e Case (retornando horas)
//=================================
// hora <= 12: Bom dia
// hora < 18: Boa tarde
// hora >= 18: Boa noite

let dataAtual = new Date()
let horaAtual = dataAtual.getHours()
console.log(horaAtual)

switch(true) { // analise tudo que entrar
    case horaAtual < 12:
        console.log('Bom dia')
        break
    case horaAtual < 18:
        console.log('Boa tarde')
        break
    default:
        console.log('Boa noite')
}