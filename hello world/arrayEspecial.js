var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);



var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);
console.log(numerosFiltrados);



function buscarValores(valor){
    return valor < 5;
}
var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);



var r1 = numeros.filter((valor) =>{
    return valor > 5;
});
console.log(r1);

// mesma coisa que o anterior, mas simplificado
var r2 = numeros.filter(valor => valor > 5);
console.log(r2);



var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 2},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]
var pessoasListagem = funcionarios.filter(
    function(valor){
        return valor.nome.length < 5
    }
)
console.log(pessoasListagem);