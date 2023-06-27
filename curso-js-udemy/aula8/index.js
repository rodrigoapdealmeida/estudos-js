/*
Exercício: Rodrigo Almeida tem 23 anos, pesa 60 kg tem 1.7 de altura
e seu IMC é de x. Rodrigo Almeida nasceu em 1999.
*/

const nome = 'Rodrigo';
const sobrenome = 'Almeida';
const idade = 24;
const peso = 60;
const alturaEmM = 1.7; 
let imc;    //peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + 'kg, tem ' + alturaEmM + ' e seu IMC é de ' + imc + '.');
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento);

// Usando template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM} e seu IMC é de ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);