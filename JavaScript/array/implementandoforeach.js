
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Samuel', 'Davi', 'Lucas']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice}) ${nome} - (${array})`)
}) 

