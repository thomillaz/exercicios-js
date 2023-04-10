var resultado = document.getElementById('res')
var soma = document.getElementById('soma')
soma.addEventListener('click', somar)

function somar(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2

    resultado.innerHTML = `${s}`
}