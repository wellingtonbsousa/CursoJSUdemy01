//===================================
// Nested Functions (Aninhada)
//===================================
//function saudacao(nome) {
//    function mensagem() {
//        console.log('Olá ' + nome)
//    }
//    return mensagem()
//}
//saudacao('Wellington')

//================================================
// Gerar App para gerar os 6 números da mega sena
//================================================
//function gerarNumeros() {
//    console.log(Math.floor(Math.random() * 60) + 1) 
//}
//function rodarSorteio() {
//    gerarNumeros()
//    gerarNumeros()
//    gerarNumeros()
//    gerarNumeros()
//    gerarNumeros()
//    gerarNumeros()
//}
//rodarSorteio()

//================================================
// Function Declaration (Associa o nome)
//================================================
function somar(num1, num2) {
    return num1 + num2
}
console.log(somar(10, 2))

//================================================
// Function Expression (Associa a uma variável)
//================================================
const subtrair = function (num1, num2) {
    return num1 - num2
}
console.log(subtrair(20, 10))

//================================================
// Arrow Function
//================================================
const subtrair2 = (num1, num2) => num1 - num2
console.log(subtrair2(20, 5))

//================================================
// Arrow Function (sem implicity return)
//================================================
const subtrair3 = (num1, num2) => {
    return num1 - num2
}
console.log(subtrair3(20, 20))
