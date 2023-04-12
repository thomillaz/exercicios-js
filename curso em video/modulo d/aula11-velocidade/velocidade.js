btn = document.getElementById('verificar')
btn.addEventListener('click', calcular)

function calcular(){
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)

    res.innerHTML = `Sua velocidade atual é de ${vel}`

    if(vel > 60){
        res.innerHTML += `<p>Você está MULTADO por excesso de velocidade</p>`
    }
}