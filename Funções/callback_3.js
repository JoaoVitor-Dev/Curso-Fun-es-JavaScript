const { text } = require("stream/consumers")

const nums = [1, 2, 3, 4, 5]
// array exemplo

const dobro = n => n * 2
// contante dobro recebendo uma arrow function que multiplica n * 2

console.log(nums.map(dobro))
// exibir no console o array nums em função dobro, sendo conectados pela função map do js

console.log('                      ')

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
//Array exemplo

const primeiraLetra = texto => texto[0]
//contante recendo uma arrow function com um parâmetro que captura o primeito elemento de um array

const letras = nomes.map(primeiraLetra)
//contante recendo array parametrizado para exibir apenas a primeira letra 

console.log(nomes, letras)
//exibir array e resultado da função no console


const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const getNome = item => item.nome

console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco

console.log(carrinho.map(getTotal))