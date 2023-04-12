var btn = document.getElementById('verificar')
btn.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'resImg')

        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //img.setAttribute('src', 'menina.jpg')
                img.style.backgroundImage = "url('./menina.jpg')"
            } else if (idade < 21) {
                //img.setAttribute('src', 'moca.jpg')
                img.style.backgroundImage = "url('moca.jpg')"
            } else if (idade >= 21 && idade < 50) {
                //img.setAttribute('src', 'mulher.jpg')
                img.style.backgroundImage = "url('./mulher.jpg')"
            } else {
                //img.setAttribute('src', 'idosa.jpg')
                img.style.backgroundImage = "url('./idosa.jpg')"
            }
        } else {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //img.setAttribute('src', 'menino.jpg')
                img.style.backgroundImage = "url('./menino.jpg')"
            } else if (idade < 21) {
                //img.setAttribute('src', 'moco.jpg')
                img.style.backgroundImage = "url('./moco.jpg')"
            } else if (idade >= 21 && idade < 50) {
                //img.setAttribute('src', 'homem.jpg')
                img.style.backgroundImage = "url('./homem.jpg')"
            } else {
                //img.setAttribute('src', 'idoso.jpg')
                img.style.backgroundImage = "url('./idoso.jpg')"
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }
}