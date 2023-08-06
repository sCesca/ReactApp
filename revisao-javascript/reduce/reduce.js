
const alunos = [
    { nome: 'Samuel Fagundes Cesca', nota: 7.8, bolsista: true },
    { nome: 'Davi Fagundes Cesca', nota: 5.0, bolsista: false },
    { nome: 'Roberto Fagundes Cesa', nota: 8.8, bolsista: true },
    { nome: 'Alexandre Fagundes Cesa', nota: 9.0, bolsista: false }
    
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)