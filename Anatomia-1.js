// Function declaration

function sayhello() {    //declaração de uma função
    console.log('Hello')
}

sayhello()

function sayhello(name) {
    console.log(`Hello ${name}`) //interpolanto
}

sayhello('Mike')

function returnHi() {
    return 'Hi!'     //função de retornando algo
}

console.log(returnHi())


function returnHiTo(name) {
    return `Hi ${name}!` //função retornando um dado interpolado
}

console.log(returnHiTo('João'))