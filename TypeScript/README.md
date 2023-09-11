
## O que é TypeScript?

    Desenvolvido em 2012 pela Microsoft, a linguagem visa adicionar novos recursos ao JavaScript, como tipagem estática e orientação a objetos.
    TypeScript nada mais é do que um "superset" de JavaScript, ou seja, no final, o código será transcompilado em JavaScript antes de ser executado

    Para utilizá-lo basta o instalar globalmente via npm:

    - npm install -g typescript

    Para compilar um arquivo .ts:

    - tsc my-code.ts
    (cria um arquivo my-code.js)

    Para compilar utilizando tsconfig.json:

    - tsc --init
    (gera um arquivo tsconfig.json e possibilita a compilação apenas com o comando tsc)

## Vantagens de se utilizar TypeScript

    - Adiciona recursos importantíssimos à linguagem, como a tipagem estática, forte e automática, orientação à objetos e a monitoração de erros em tempo real.

## Tipos básicos da linguagem

    - number (int e float)
    
    - string
    
    - boolean
    
    - Array - você pode definir o tipo de um array utilizando Array<T> ou T[]
        - Array<number> ou number[]
    
    - Tuple - uma lista com o número de elemntos fixo e com elementos específicos
        - [boolean, string]

    - {} - object

    - enum - { Red = 0, Blue = 1, Green = 2 }

    - functions
        - (props: number) => string (um número no parâmetro e uma string em seu retorno)

    - any - permite qualquer tipo
    
    - void - representa o nada, utilizado em retorno de funções

    - never - é o tipo de retorno para uma função ou para uma arrow function que sempre lança uma exceção ou uma que nunca retorna

    - null

## Casting

    var derived: MyInterface;
    (<ImplementaçãoDeClasse>derived).metodoEspecifico();

    var derived: MyInterface;
    (derived as ImplementaçãoDeClasse).metodoEspecifico

    Obs: para não gerar confusão quando tratado com arquivos jsx, utiliza-se por padrão o as em vez de <>

## REFERÊNCIAS

    - https://tecnoblog.net/responde/o-que-e-typescript-guia-para-iniciantes/
    - TypeScript Notes for Professionals - GoalKicker.com