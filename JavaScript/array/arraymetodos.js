const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos,pop() // massa sai
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // coloca no primeiro
console.log(pilotos)

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa sai
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array a partir do indice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // do indice 1 ate o indice 3
console.log(algunsPilotos2)