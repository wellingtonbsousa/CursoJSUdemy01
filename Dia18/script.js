//===================================
// Objects and Key Pairs (Dictionary)
// Objects <> Arrays
//===================================

// Array
// let ouraWellingtonInfo2 = [9.7, 7.53, '86%', 59, 84]

// Object
//const ouraWellingtonInfo = {
//    timeInBed: 9.7, // timeInBed -> key Pair, 9.7 -> Dado
//    totalSleep: 7.53,
//    sleepEfficiency: '86%',
//    restingHeartRate: 59,
//    sleepScore: 84
//}

// console.log(ouraWellingtonInfo2)
//console.log(ouraWellingtonInfo)
//console.log(ouraWellingtonInfo.sleepEfficiency) // ou
//console.log(ouraWellingtonInfo['timeInBed'])

// Adicionando Key Pairs
//ouraWellingtonInfo.remSleep = '2h15m'
//console.log(ouraWellingtonInfo)

// Atualizar valores (dados)
//ouraWellingtonInfo.sleepScore = 90 // ou
//ouraWellingtonInfo['sleepScore'] = 91
//ouraWellingtonInfo.sleepScore++ // operadores // ou
//ouraWellingtonInfo.sleepScore += 4
//console.log(ouraWellingtonInfo)

// Aninhar key Pairs
//const ouraWellingtonInfo = {
//    timeInBed: 9.7, // timeInBed -> key Pair, 9.7 -> Dado
//    totalSleep: 7.53,
//    sleepEfficiency: '86%',
//    restingHeartRate: {
//        maxHeartRate: 81,
//        minHeartRate: 59
//    },
//    sleepScore: 84
//}

// Aninhar Array
//const ouraWellingtonInfo = {
//    timeInBed: 9.7, // timeInBed -> key Pair, 9.7 -> Dado
//    totalSleep: 7.53,
//    sleepEfficiency: '86%',
//    restingHeartRate: {
//        maxHeartRate: 81,
//        minHeartRate: 59
//    },
//    sleepScore: 84,
//    notes: ['Tomei café', 'Li um livro']
//}

//console.log(ouraWellingtonInfo)
//console.log(ouraWellingtonInfo.restingHeartRate.maxHeartRate)
//console.log(ouraWellingtonInfo.notes[0])

//===================================
// Desafio -> Obejcts, Nested, Array
//===================================
const biblioteca = {
    fantasia: [
        {
            anoPublicacao: 1954,
            autor: 'J.R.R. Tolkien',
            titulo: 'Senhor dos Anéis'
        },
        {
            anoPublicacao: 1997,
            autor: 'J.K. Rowling',
            titulo: 'Harry Potter'
        },
    ],
    ficcaoCientifica: [
        {
            anoPublicacao: 1965,
            autor: 'Frank Herbert',
            titulo: 'Duna'
        },
        {
            anoPublicacao: 1951,
            autor: 'Isaac Asimov',
            titulo: 'Fundação'
        }
    ]

}
console.log(biblioteca)