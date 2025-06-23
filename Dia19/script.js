//===================================
// Functions
//===================================

//function somar (num1, num2) {
    // console.log(num1 + num2)
//    return num1 + num2
//}

//somar(10, 4)

//function subtrair (num1, num2) {
//    console.log(num1 - num2)
//}

//subtrair(5, 2)

//let resultado = somar(10,4)
//console.log(resultado)

//===================================
// Parametros Padrão
//===================================
//function calcularTotal(preco, desconto = 0.1) {
//    let valorDesconto = preco * desconto
//    let totalCompra = preco - valorDesconto
//    return totalCompra
//}
//console.log(calcularTotal(100)) // Se não passar usa o padrao
//console.log(calcularTotal(100, 0.2)) // Se passar usa o que passar

//===================================
// Parametros Rest
//===================================
function listaCompras(...itens) {
    console.log(itens)
    console.log('Itens da lista: ' + itens)
}
listaCompras('Pao', 'Carne', 'Milho')
