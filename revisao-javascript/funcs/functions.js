
const Pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

Pessoa.falar() // bom dia!
const falar = Pessoa.falar
falar() // undefined

const falar_de_pessoa = Pessoa.falar.bind(Pessoa)
falar_de_pessoa() // bom dia!


function Pessoa_1() {
    this.idade = 20

    const self = this

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa_1