const numbers = [1, 2, 3, 4, 5, 6] //array de exemplo

const greaterThanZero = el => el > 3 //Arrow function que recebe um determinado elemento 
//e verifica se esse elemento é maior do que três

console.log(numbers.filter(greaterThanZero));
//filter aplicando a função greaterThanZero no Array numbers

const even = el => el % 2 === 0 //função que filtrará apenas os elementos pares de um Array

console.log(numbers.filter(even))

const students = [
    { name: 'Jake', score: 6.4},
    { name: 'Susan', score: 8.6},
    { name: 'Emma', score: 9.4},
    { name: 'Peter', score: 9.1}
]

const greatScore = students => students.score >= 9 
//função que filtra os alunos(objeto) no Array com score(nota) maior ou igual ao 9

console.log(students.filter(greatScore))

