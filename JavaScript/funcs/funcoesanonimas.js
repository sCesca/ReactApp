const soma = function(x, y) {
    return x + y
}

const imprime_resultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprime_resultado(3, 4)
imprime_resultado(3, 4, soma)
imprime_resultado(3, 4, function(x, y) {
    return x - y
})
imprime_resultado(3, 4, (x, y) => x * y)