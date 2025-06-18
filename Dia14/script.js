//=========================
// AND
//=========================

let idadeParticipante = 19
let registroOnLine = false

// if (idadeParticipante >= 18 && registroOnLine == true) {
if (idadeParticipante >= 18 && registroOnLine) {
    console.log('Bem vindo ao evento!')
} else {
    console.log('Precisa ser maior de 18 e fazer o registro online!')
}

//=========================
// OR
//=========================
let estudante = false
let cupom = false

if (estudante || cupom) {
    console.log('Você tem desconto!')
} else {
    console.log('Sem desconto!')
}

//=========================
// AND  e OR
//=========================
// Desconto para famílias maiores que 4 e que venham terça ou quarta
let quantidade = 5
let dia = 'Quinta'

if (quantidade > 4 && dia === 'Terça' || dia === 'Quarta') {
    // === -> identico
    console.log('Conta com desconto')
} else {
    console.log('Conta sem desconto')
}

//=============================
// Nesting do if (Aninhamento)
//=============================
// nivel = true ou false
//  >= 90 -> Ouro
//  >= 75 -> Prata
//  < 75  -> Bronze
// nivel = false
//  voce tem que terminar o nivel primeiro
let nivel = true
let pontos = 60

if (nivel) {
    if (pontos >= 90) {
        console.log('Medalha de Ouro!')
    } else if (pontos >= 75) {
        console.log('Medalha de Prata!')
    } else {
        console.log('Medalha de bronze!')
    }
} else {
    console.log('Você tem que terminar o nível primeiro!')
}

//=============================
// Desafio - Acesso ao sistema
//=============================
let usuarioValido = true
let senhaCorreta = true
let temPermissao = true

if (usuarioValido) {
    if (senhaCorreta) {
        if (temPermissao) {
            console.log('Acesso permitido!')
        } else {
            console.log('Acesso negado. Usuário sem permissão!')
        }
    } else {
        console.log('Senha incorreta. Tente novamente!')
    }
} else {
    console.log('Usuário não encontrado!')
}