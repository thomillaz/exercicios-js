function carregaHora() {
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var divHora = document.getElementById('horaAtual')

    divHora.innerHTML = `${hora}hr(s) e ${min}min(s)`

    var imagem = document.getElementById('imgHora')

    if(hora >= 5 && hora < 12){
        imagem.style.backgroundImage = "url('manha.jpg')"
        document.body.style.background = '#fcb962'
    }else if(hora >= 12 && hora < 18){
        imagem.style.backgroundImage = "url('tarde.jpg')"
        document.body.style.background = '#ce8677'
    }else{
        imagem.style.backgroundImage = "url('noite.jpg')"
        document.body.style.background = '#33416b'
    }
}