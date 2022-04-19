function soma(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

const valores = soma(3)(4)

console.log(valores(13))

function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y)
        }
    }
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

calcular(10)(5)(subtrair)

const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(multiplicar)

console.log(r1)