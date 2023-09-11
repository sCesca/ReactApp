
const aprovados = ['Samuel', 'Davi', 'Lucas']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibir = aprovado => console.log(aprovado)

aprovados.forEach(exibir)

