#### O que o operador typeof faz?

O operador typeof mostra o tipo daquele elemento passado na sequência.

#### Qual a diferença entre arrays e objetos?

objectos - são um conjunto de valores separados por uma chave, então você consegue buscar o valor exato de uma chave buscando por ela.  
array - são uma sequência de valores que não são organizados por chaves, para buscar um valor você deverá utilizar o index dele. É muito comum termos um array de objetos dentro do js.

#### O que é o strict mode?

É uma forma de colocar o formato de strict dentro de uma função. Veio a partir do ES5.

#### Qual a importância de utilizar um debbuger?

O debugger auxilia na busca de erros e também na identificação do por que deles.

#### O que é o escopo dentro do javascript?

O escopo é o formato de encapsular(deixar dentro) valor em um local. O contexto daquela função/local vai determinar a acessibilidade das variáveis ali.

#### O que é o um callback?

Callback é uma função que será executada apos outra função/lógica ter terminado, pode ser confundido com promises.

#### Diferença entre var, let e const?

var - é global, a menos que você utilize 'use strict', além de você poder setar um valor e fazer a troca desse valor, pode ser redeclarada, aceita hoisting, pode ser declarada sem ser inicializada(ter valor)  
let - é restrito ao escopo, você pode setar um valor e fazer a troca desse valor, foi liberado em es2015/es6, não pode ser redeclarada, pode ser declarada sem ser inicializada(ter valor)  
const - é restrito ao escopo, você pode setar um valor e não pode fazer a troca dele, a não ser em objetos ou arrays, entretanto há formar de bloquear utilizando o freeze, não pode ser redeclarada

#### Quais são os tipos primitivos em javascript?

string, number, array, any, boolean, symbol, object (array, function)

#### Qual a diferença entre == e ===?

== > faz uma comparação com os valores somente então Number(1) == String(‘1’) é verdadeiro, não levando em consideração os tipos  
=== > faz uma comparação com os valores e tipos então Number(1) == String(‘1’) é false, levando em consideração os tipos

#### Qual a diferença entre null e undefined?

null é um valor que você utiliza para declarar vazio(o type of de null é object)  
undefined é um valor que o javascript declara para coisas vazia(criar um variável e não ter valor == undefined)

#### Diferença entre arrow function e function normal?

arrow function não tem o .this bindado nele, e também não suporta prototype  
função normal terá prototype e tem o .this ativo nele

#### Diferença entre function declaration(function a(){})e function expression(let fn = function () {})

function declaration(function a(){}) pode ser executada antes de sua declaração, e você não pode passar a função para outra função. Você precisa usar function expression porque é uma variável.  
function expression(function a(){}) não pode ser executada antes de sua declaração

#### Qual a diferença entre promise e callback?

Em promise você não tem que fazer nada para esperar o valor. O melhor exemplo é uma request get, você faz o get e quando a página retorna a promessa lhe envia o conteúdo. Você poderia usar uma await para controlar a lógica também  
Em Callback você precisa fazer algo para lidar com o próximo passo.

#### O que é closures?

Closures é quando uma função se lembra de seu evento de escopo. Mesmo quando seu escopo é executado no exterior (se você usar uma variável global dentro de sua função, ela se lembrará de seu var global)

#### O que é synthetic events?

Eventos cross browser. stopPropagation, eventDefault

#### O que é strict mode?

Para mostrar erro no modo dev e não na produção, não deixando variáveis redeclaradas e não deixando que as vars globais sejam criadas

#### O que é prototypal inheritance?

Cada objeto tem uma propriedade chamada de prototype onde você pode adicionar métodos e propriedades a ele.

#### O que é hoisting?

É o motor do javascript que cria uma variável ou uma função antes de sua "criação".

#### O que é currying?

É um tipo de programação funcional para fazer sequências de funções e esperar por valores. Função retornando funções.
