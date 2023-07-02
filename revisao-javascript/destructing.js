
// Desestruturando um objeto 
const C = {
    nome: 'Samuel Fagundes Cesca',
    endereco: {
        rua: 'Rua dos Girassois',
        bairro: 'Rosa e Silva',
        numero: 38
    }
}

const { nome: nome_cliente, endereco: {rua, bairro, numero} } = C

console.log('Ola meu nome é: ' + nome_cliente + ', moro na rua: ', rua)

// Desestruturando um Array
const a = [1, 2, 3]

const [b] = [a[2]]

const matriz = [[1,2,3], [4,5,6]]

const [, [,, dia]] = matriz

console.log(b)
console.log(dia)

// Desestruturando dentro do parametro de uma função

// ! com objeto
const Intervalo = {
    max: 100,
    min: 50
}

function rand({max = 1000, min = 0}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand(Intervalo))

// ! com array

function rand_a([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand_a([50, 40]))
console.log(rand_a([0, 100]))