// Realizando processo com callback
setTimeout(function() {
    console.log('Executando callback')

    setTimeout(function(){
        console.log('Executando callback')

         setTimeout(function(){
             console.log('Executando callback')
         }, 2000)
    }, 2000)
}, 200)

// Realizando processo com Promise


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishhh')
        }, tempo)
    })
}

esperarPor()
    .then(texto => console.log(texto))

