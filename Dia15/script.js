//=================================
// NOT Operator
//=================================
let num1 = -10
if (!(num1 > 0)) {
    console.log('Digite um número positivo!')
}

//=================================
// NOT Operator com usuario
//=================================
let usuarioLogado = false
if (!usuarioLogado) {
    console.log('Você precisa estar logado!')
}

//=================================
// NOT Operator verificando lista
//=================================
let listaProdutos = []
if (!listaProdutos.length) {
    console.log('A lista está vazia!')
}

//=================================
// Desafio: Usuario escolhe a cor Azul
// Se escolheu outra cor -> 'Não temos essa cor!'
//=================================
let cor = 'Verde'
// if (!(cor === 'Azul')) {
if (cor !== 'Azul') {
    console.log('Não temos essa cor!')
}
