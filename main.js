// RELOGIO
const blocoSeTempo = document.querySelectorAll('.time');

function plotarTempo(){
    const data = new Date();

    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');
    const segundo = data.getSeconds().toString().padStart(2, '0');

    blocoSeTempo[0].innerHTML = hora;
    blocoSeTempo[1].innerHTML = minuto;
    blocoSeTempo[2].innerHTML = segundo;
}

setInterval(plotarTempo, 1000);

plotarTempo();