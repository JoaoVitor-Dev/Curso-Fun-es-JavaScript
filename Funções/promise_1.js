let p = new Promise(function(CumprirPromessa){
    CumprirPromessa('Ana', 'João', 'Carlos', 'Daniel')
})

p 
    .then(valor => valor[0])
    .then(valor => console.log(valor))
