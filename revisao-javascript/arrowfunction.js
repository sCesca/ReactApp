

// o this, na function arrow é constante
// pertencerá ao procedimento mais amplo

let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

ola = () => 'Ola'
ola = _ => 'ola'

console.log(ola())

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000

    ) 
}

new Pessoa

