
const carrinho = [
    '{"nome": "borracha", "preco": 3.50}',
    '{"nome": "caderno", "preco": 10.50}',
    '{"nome": "caneta", "preco": 2.50}',
    '{"nome": "lápis", "preco": 1.50}'
]

const objetificacao = json => JSON.parse(json)
const precificacao =  obj => `R$${parseFloat(obj["preco"]).toFixed(2).replace('.', ',')}`

const resultado = carrinho.map(objetificacao).map(precificacao)

console.log(resultado)