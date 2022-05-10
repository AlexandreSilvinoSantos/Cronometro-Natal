import Countdown from "./countdown.js";

const tempoParaNatal = new Countdown("25 December 2022 00:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaNatal.total[index];
});
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
