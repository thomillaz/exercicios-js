/* Para fazer uma promoção, os comerciantes
estão procurando aumentar suas vendas oferecendo
desconto. Faça um algoritmo que possa receber
um valor de um produto e que escreva o novo valor
tendo em vista que o desconto foi de 9%.
*/
var valor = 1000;
var desc = 9/100;
var valorFinal = valor - (valor * desc);

console.log("O valor do produto com desconto é " + valorFinal);