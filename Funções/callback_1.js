

function exec(fn, a, b) {  //fn = função passada como parâmetro em outra função
    return fn(a, b)        //returnar a função
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

//executar função em um determinado evento

const cb = () => console.log('Executando o Callback...')
setInterval(cb, 1000)