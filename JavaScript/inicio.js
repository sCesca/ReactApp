/* 
| ------------------------- |

Variáveis

Variaveis do tipo var, podem ser declaradas e, além disso,
terem seus valores alterados mais de uma vez dentro de um
código

Enquanto a var é declarada e pode ter seu valor alterado
dentro de um único escopo, a variável do tipo let pode
ser usada apenas dentro de um bloco, mantendo seu valor e 
sua declaração exclusivamente disponível às variaveis 
e funcoes daquelas linhas de codigo

| ------------------------- |
Funções 

O instanciamento de objetos é feito a partir de funcoes,
ou seja, um objeto é criado a partir de uma função, de um molde/modelo.
Dentro do JS, o instanciamento é realizado a partir da palavra
- new -


*/

console.log(typeof Object) // function
console.log(typeof new Object) // object

const Cliente = function () {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente) // object

class Produto {} 
console.log(typeof Produto) // function
console.log(typeof new Produto()) // object
