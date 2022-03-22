// Anonymous functions 
(function (a, b, c) {    //exemplo de função anônima
    return a + b + c
})

// Function expresssion --------------------------------------------------------------
const soma = function (a, b) {     //função soma
    return a + b 
}

const resultado = soma(8, 59)  //Váriavel recebendo a função soma
console.log(resultado)

const NoteSoma = soma
console.log(NoteSoma(5, 5))  // Váriavel recebendo a função soma e executando a partir do console.
