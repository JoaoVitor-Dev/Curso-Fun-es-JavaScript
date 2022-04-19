// Arrow function

const felizNatal = () => console.log('Feliz Natal!!')
felizNatal()

const saudacao = nome => `Bom dia ${nome}!`
console.log(saudacao('Maria'))

const somar = nummeros =>{
    let total = 0
    for(let n of nummeros) {
        total += n
    }
    return total
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}