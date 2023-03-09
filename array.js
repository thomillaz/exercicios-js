var valores = [8,1,7,2,9];

console.log(valores[3]);

console.log("Array invertido: " + valores.reverse());

for (var pos = 0; pos < valores.length; pos++){
    console.log("Posição " + pos + ": " + valores[pos]);
}

var arr1 = [1,2,3,4,5,6];
console.log(arr1.join(" | "));

var retirado = arr1.shift();
console.log(retirado);
console.log(arr1);

console.log("Posição do número 3: " + arr1.indexOf(3));

arr1.push(7);
console.log(arr1);

arr1.pop();
console.log(arr1);

var arr2 = [1,2,3,4,5,6,7];
arr2.splice(2,3);
console.log(arr2);

var nomes = ["Maria","João","Lucas","Pedro"];
var novos = nomes.splice(1,2,"Luiz","Ana");
console.log(nomes);
console.log(novos);

var pais = ["Brasil","Argentina","Colombia"];
pais.unshift("Uruguai");
console.log(pais);

// enquanto o splice altera o original, o slice não
var pessoa = ["Eduardo", "Joana","Wallace","Rosana"];
var pessoas1 = pessoa.slice(1,3);
console.log(pessoa);
console.log(pessoas1);

var gerente = ["Davi","Manuela"];
var empresa = pessoa.concat(gerente);
console.log(empresa);

// exer.: destinos possíveis
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);
listaDeDestinos.push(`Florianópolis`);
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);