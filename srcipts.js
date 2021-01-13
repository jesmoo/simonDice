const btnEmpezar = document.getElementById("btnEmpezar");
const rojo = document.getElementById("rojo");
const rojizo = document.getElementById("rojizo");
const rojillo = document.getElementById("rojillo");
const vino = document.getElementById("vino");
const vinillo = document.getElementById("vinillo");
const rojazo = document.getElementById("rojazo");
const rojorojo = document.getElementById("rojorojo");
const rojito = document.getElementById("rojito");
const negro = document.getElementById("negro");

class game {
  constructor() {
    this.inicializar();
    this.generarSecuencia();
  }
  inicializar() {
    // agrega una clase
    btnEmpezar.classList.add("hide");
  }
  // el .fill pone todos los arrays en 0
  generarSecuencia() {
    this.secuencia = new Array(6).fill(0).map();
  }
}

// funcion que se activa al dar click al boton
function empezarJuego() {
  var juego = new game();
}
