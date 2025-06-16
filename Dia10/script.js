//=========================
// Data e Hora
//=========================
// let agora = new Date()
// console.log(agora)

// let dataEspecifica = new Date(2024, 5, 20, 10, 35, 0) // mês inicia 0
// console.log(dataEspecifica)

// let dataString = new Date('2024/10/20 10:35:00')
// console.log(dataString)

//=========================
// Data e Hora - Metodos
//=========================
// let data = new Date()
// console.log(data)

// console.log(data.getDate()) // Dia do mês
// console.log(data.getDay()) // dia da semana de 0 a 6 (0-Domingo)
// console.log(data.getMonth()) // mes (0-11) 0-janeiro
// console.log(data.getFullYear()) // ano
// console.log(data.getHours()) // hora
// console.log(data.getMinutes()) // minutos
// console.log(data.getSeconds()) // segundos

//=========================
// Data e Hora - Metodos  - Configuração
//=========================
//let data = new Date()
//data.setDate(25)
//data.setMonth(7)
//data.setFullYear(1961)
//console.log(data)

//=========================
// Data e Hora - Metodos  - Diferença de dias entre datas especificas
//=========================
// let inicio = new Date('2023/10/15')
// let fim = new Date('2023/11/15')
// let totalDias = (fim - inicio) / (1000 * 3600 * 24)
// console.log(totalDias)

//=========================
// Data e Hora - Metodos  - Idioma
//=========================

let data
data = Intl.DateTimeFormat('pt-BR').format(data)
console.log(data)
