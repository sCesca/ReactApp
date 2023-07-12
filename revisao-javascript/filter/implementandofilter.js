
Array.prototype.filter2 = function(callback) {
    const vec = []

    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            vec.push(this[i])
        }
    }
    
    return vec
}

const produtos = [

    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "Celular", preco: 3499, fragil: true },
    { nome: "Carro", preco: 49999, fragil: false },
    { nome: "Moto", preco: 10499, fragil: false }

]

const retPrco = elemento => elemento.preco > 2000
const retFragi = elemento => elemento.fragil === true

console.log(produtos.filter2(retPrco).filter2(retFragi))