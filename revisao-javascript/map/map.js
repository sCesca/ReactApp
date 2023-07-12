
const nums = [1, 2, 3, 4]

// for com propósito, mapeando o vetor da callback
let resultado = nums.map(function(elemento) {
    return elemento * 10
})

console.log(resultado)

const soma10 = elemento => elemento + 10
resultado = nums.map(soma10)
console.log(resultado)

const triplo = elemento => elemento * 3
resultado = nums.map(triplo)
console.log(resultado)

const dinheiro = elemento => `R$${parseFloat(elemento).toFixed(2).replace('.', ',')}`
resultado = nums.map(dinheiro)
console.log(resultado)

resultado = nums.map(soma10).map(triplo).map(dinheiro)
console.log(resultado)