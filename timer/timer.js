const segundoDisplay = document.querySelector('#segundo')
const minutoDisplay = document.querySelector('#minuto')
const milisegundoDisplay = document.querySelector('#milisegundo')

let startTime = 0;
let tempoAnterior = 0;
let intervalo;

function startTimer(button, isRunning) {
    if (isRunning) {
        button.classList.toggle('stop');
    }

    if (button.classList.contains('stop')) {
        // TIMER RODANDO
        startTime = performance.now() - tempoAnterior;

        intervalo = setInterval(() => {
            const tempoAtual = performance.now();
            const tempoDecorrido = tempoAtual - startTime;

            const minuto = Math.floor(tempoDecorrido / 60000);
            const segundo = Math.floor((tempoDecorrido % 60000) / 1000);
            const milisegundo = Math.floor(tempoDecorrido % 1000);

            minutoDisplay.innerHTML = minuto.toString().padStart(2, '0');
            segundoDisplay.innerHTML = segundo.toString().padStart(2, '0');
            milisegundoDisplay.innerHTML = milisegundo.toString().padStart(3, '0');
        }, 10);
    } else {
        // TIMER PARADO
        clearInterval(intervalo);
        tempoAnterior = performance.now() - startTime;
    }
}

function resetTimer() {
    clearInterval(intervalo); 
    tempoAnterior = 0;        
    startTime = 0;            

    minutoDisplay.innerHTML = '00';
    segundoDisplay.innerHTML = '00';
    milisegundoDisplay.innerHTML = '000';
    
    const button = document.querySelector('.button-timer');
    if (button.classList.contains('stop')) {
        startTimer(button, false); 
    }
}
