// var - Modelo de criar variaveis antigo, não vai ser utilizado no curso, ainda tem códigos que podem ser encontrados utilizando var

let nome = 'João';   //String
let nome2;  //Variavel com valor undefined, variavel sem valor, somente declarada, pode ser alterada em algum momento no código.

nome = 'Rodrigo';   //Outro valor atribuido a variavel

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

// Não podemos criar variáveis com palavras reservadas (Pela linguagem Javascript)
// Exemplo: let let, let if, let for.
// Variáveis precisam de nomes significativos.
// Não pode começar o nome de uma variável com um número.
// Não podem conter espaços ou traços.
// Utilizamos camelCase
// Exemplo: let nomeCompletoDoCliente;
// Case-sensitive
// Exemplo: let nomeCliente; , let nomecliente; são diferentes.
// Não podemos redeclarar variáveis com let, apenas modificar o valor.
// Não UTILIZE VAR UTILIZE LET
