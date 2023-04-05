function relogio (){
    const espacoRelogio = document.querySelector (".relogio");
    const horaAgora = new Date ();

    const horas = horaAgora.getHours();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();

    const formatoHora = horas.toString().padStart(2, "0");
    const formatoMinuto = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}:${formatoMinuto}:${formatoSegundos}`;

}

setInterval(relogio, 1000)