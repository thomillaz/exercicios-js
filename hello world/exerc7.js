/* Faça um algoritmo que efetue o cálculo
da quantidade de litros de combustível gastos
em uma viagem, sabendo-se que o carro faz 12Km
com um litro. Deverão ser fornecidos o tempo
gasto na viagem e a velocidade média.

Utilizar as seguintes fórmulas:

-> distância =  tempo * velocidade

-> litros usados = distância
                   ---------
                       12
                       
O algoritmo deverá apresentar os valores da
velocidade média, tempo gasto na viagem,
distância percorrida e a quantidade de litros
utilizados na viagem.
*/
var tempo = 3;
var velocidade = 80;
var distancia = tempo * velocidade;
var litros = distancia/12;

console.log("A velocidade média foi de " + velocidade + "Km/h.");
console.log("O tempo gasto na viagem foi de " + tempo + "hrs, com a distância percorrida de " + distancia + "Km e com uso de " + litros + " litros.");