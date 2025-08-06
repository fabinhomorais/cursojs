function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (minutos < 10) {
        minutos = '0' + minutos
    }
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msg.innerHTML = `Agora são ${hora}:${minutos} da manhã. Bom dia!`
        img.src = 'fotomanha.png'
        document.body.style.background = '#c9caab'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        msg.innerHTML = `Agora são ${hora}:${minutos} da tarde. Boa tarde!`
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        msg.innerHTML = `Agora são ${hora}:${minutos} da noite. Boa noite!`
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}