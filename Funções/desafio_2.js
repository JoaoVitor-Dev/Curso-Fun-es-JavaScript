const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: true},
    { nome: 'Impressora', qtde: 0, preco: 649.50, fragil: false},
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]

// 1. frafil: true
const getFragil = item => item.fragil == true

const GetFragilTrue = carrinho
    .filter(getFragil)

console.log(GetFragilTrue)

//2 . qtde: 4, preço: 27.10 -> total

const GetQtde = item => item.qtde == 4

const GetPreco = item => item.preco == 27.10

const GetResult = carrinho
    .filter(GetQtde)
    .filter(GetPreco)

console.log(GetResult)

//3. media totais

const GetPrecos = item => item.preco * item.qtde

const TotalItens = carrinho.map(GetPrecos)

console.log(TotalItens)

const soma = function (a, b) {
    return a + b
}

const MediaTotal = TotalItens
    .reduce(soma, 0)/TotalItens.length

console.log("a media total é " + MediaTotal)

//Funcionamento do reduce

Array.prototype.meuReduce = function(fn, inicial) {

    let acc = inicial

    for(let i = 0; i < this.length; i++) {

        if(!acc) {

            acc = this[i]

            continue
        }

        acc = fn(acc, this[i], i, this)
    }

    return acc

}