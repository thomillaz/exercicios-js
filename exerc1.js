/* Escreva um algoritmo para ler o salário
mensal atual de um funcionário e o percentual
de reajuste. Calcular e escrever o valor do
novo salário. */

var salario = 6000;
var percentual = 10;
var aumento = 0;
var salarioComAumento = 0;

aumento = salario * percentual/100;
salarioComAumento = salario + aumento;

console.log("O salário reajustado é: " + salarioComAumento);