let segundosRestantes = 180;
let intervalo = null;

const timerElement = document.getElementById("timer");
function mostrarTiempo() {
    const minutos = Math.floor(segundosRestantes / 60);
    const segundos = segundosRestantes % 60;
    timerElement.textContent =
    String(minutos).padStart(2, "0") + ":" +
    String(segundos).padStart(2, "0");
}


function iniciarTemporizadorAutomatico() {
mostrarTiempo();

intervalo = setInterval(function () {
segundosRestantes--;
mostrarTiempo();
if (segundosRestantes <= 0) {
        clearInterval(intervalo);
        intervalo = null;
        alert("SYSTEM BREACHED — YOU HAVE BEEN HACKED");
        }
    }, 1000);
}

// Se ejecuta automáticamente al cargar la página
window.onload = iniciarTemporizadorAutomatico;