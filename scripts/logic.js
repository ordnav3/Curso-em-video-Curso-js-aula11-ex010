function calc(){
    var txtvel = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtvel.value)


    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`

    if (vel > 60){
        res.innerHTML += '<p>Você esta <strong>Multado</strong> por excesso de velocidade</p>'
    }else{
        res.innerHTML += '<p>Você esta indo bem continue assim</p>'
    }

    res.innerHTML += '<p>Dirija sempre com sinto de segurança!<p>'
}