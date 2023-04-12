verificar = document.getElementById('verificar')
verificar.addEventListener('click', origem)

function origem(){
    var txtori = document.getElementById('txtorigem')
    var ori = txtori.value
    var res = document.getElementById('resultado')

    if(ori.toUpperCase() == 'BRASIL'){
        res.innerHTML = 'Você é brasileiro!'
    }else{
        res.innerHTML = 'Você é estrangeiro!'
    }
}