var p1 = window.document.getElementsByTagName('p')[0]
window.document.write('Está escrito assim: ' + p1.innerText)
p1.style.color = 'blueviolet'

var d = window.document.getElementById('msg')
// var d = window.document.querySelector('div#msg')
d.innerText = 'Aguardando...'

var nome = window.prompt('Qual é seu nome? ')
d.innerText = `Muito prazer, ${nome}!`