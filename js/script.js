function carregar() {

    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var minuto = data.getMinutes();
    var hora = data.getHours();
    hora = 18;

    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >= 0 && hora < 6) {
        // BOA MADRUGADA
        img.src = 'img/madrugada.png';
        img.alt = 'Foto da madrugada';
        document.body.style.backgroundColor = '#131722';
    }
    else if (hora >= 6 && hora < 12) {
        // BOM DIA
        img.src = 'img/manha.png';
        img.alt = 'Foto do dia';
        document.body.style.backgroundColor = '#E2CD9F';
    }
    else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'img/tarde.png';
        img.alt = 'Foto da tarde';
        document.body.style.backgroundColor = '#B9846F';
    }
    else {
        // BOA NOITE
        img.src = 'img/noite.png';
        img.alt = 'Foto da noite';
        document.body.style.backgroundColor = '#0B3B43';
    }

}