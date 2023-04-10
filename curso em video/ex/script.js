/*window.alert('Hello, world!');
window.confirm('Gostando de Javascript?')
var nome = window.prompt('Qual seu nome?')
window.alert(`É um prazer te conhecer, ${nome}`)

var n1 = Number(window.prompt('Digite um número: '))
var n2 = Number(window.prompt('Digite outro número: '))

window.alert(`A soma entre ${n1} e ${n2} é ${n1+n2}.`)

var nome = window.prompt('Qual é seu nome? ')
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.`)
document.write(`<br />${nome.toUpperCase()} e ${nome.toLocaleLowerCase()}`)*/

var num = 1545.5
document.write(num.toFixed(2).replace('.', ',')) //vai colocar duas casas depos da vírgula e trocar ponto por vírgula
document.write(`<br />${num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)