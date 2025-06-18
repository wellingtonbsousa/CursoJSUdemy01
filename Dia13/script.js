//=========================
// If e Else
//=========================
let hour = 19

if (hour <= 12) {
    console.log('Bom dia!')
} else if (hour <=18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

// Shorthand do if (não precisa das chaves)
if (hour <= 12) console.log('Bom dia!')
else if (hour <=18) console.log('Boa tarde!')
else console.log('Boa noite!')

// Desafio (pontuação):
// se for 90 ou mais exibir "Excelente"
// se for 75 ou mais (menor que 90) exibir "Muito bom!"
// se for inferior a 75 exibir "Você pode melhorar"

let pontuacao = 70
if (pontuacao >=90) {
    console.log('Excelente!')
} else if (pontuacao >=75) {
    console.log('Muito bom!')
} else {
    console.log('Voce pode melhorar')
}