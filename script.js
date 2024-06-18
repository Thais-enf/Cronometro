let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");
let mili = document.getElementById("mili");
let segundos = document.getElementById("segundos");
let minutos = document.getElementById("minutos");
let horas = document.getElementById("horas");

let startTimer;
let ms = 0;
let seg = 0;
let min = 0;
let hr = 0;

function start() {
    if (!startTimer) {
        startTimer = setInterval(function () {
            ms += 10;

            if (ms == 1000) {
                ms = 0;
                seg++;

                if (seg == 60) {
                    seg = 0;
                    min++;

                    if (min == 60) {
                        min = 0;
                        hr++;
                    }
                }
            }

            atualizaValor();
        }, 10);

        btnStart.classList.add("ativo");
        btnStop.classList.remove("ativo");
    }
}

function stop() {
    clearInterval(startTimer);
    startTimer = null;
    btnStop.classList.add("ativo");
    btnStart.classList.remove("ativo");
}

function reset() {
    clearInterval(startTimer);
    startTimer = null;
    ms = 0;
    seg = 0;
    min = 0;
    hr = 0;
    atualizaValor();
    btnStart.classList.remove("ativo");
    btnStop.classList.remove("ativo");
}

function atualizaValor() {
    mili.innerHTML = ms < 100 ? "0" + (ms / 10) : ms / 10;
    segundos.innerHTML = seg < 10 ? "0" + seg : seg;
    minutos.innerHTML = min < 10 ? "0" + min : min;
    horas.innerHTML = hr < 10 ? "0" + hr : hr;
}

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);
