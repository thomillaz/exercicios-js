/* Faça um algoritmo que leia três notas
de um aluno, calcule e escreva a média
final. Considerar que a média é ponderada
e que o peso das notas é 2, 3 e 5.
Fórmula para o cálculo da média final é:

mediaFinal = n1 * 2 + n2 * 3 + n3 * 5
             ------------------------
                         10    
*/

var n1 = 10;
var n2 = 5;
var n3 = 6;
var mediaFinal;

mediaFinal = (n1 * 2 + n2 * 3 + n3 * 5)/10;

console.log("A média final é " + mediaFinal);