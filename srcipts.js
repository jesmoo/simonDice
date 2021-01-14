const btnEmpezar = document.getElementById("btnEmpezar");
// colores
const rojo = document.getElementById("rojo");
const rojizo = document.getElementById("rojizo");
const rojillo = document.getElementById("rojillo");
const vino = document.getElementById("vino");
const vinillo = document.getElementById("vinillo");
const rojazo = document.getElementById("rojazo");
const rojorojo = document.getElementById("rojorojo");
const rojito = document.getElementById("rojito");
const negro = document.getElementById("negro");
// nivels
const MAXIMOlEVELS = 7;

class game {
  constructor() {
    // anclaje
    this.elegirColor = this.elegirColor.bind(this);
    this.inicializar = this.inicializar.bind(this);
    // juego
    this.inicializar();
    this.generarSecuencia();
    this.nextLevel();
  }
  togkeBtnEmpezar() {
    if (btnEmpezar.classList.contains("hide")) {
      btnEmpezar.classList.remove("hide");
    } else {
      btnEmpezar.classList.add("hide");
    }
  }
  inicializar() {
    // complementos
    this.togkeBtnEmpezar();
    // agrega una clase
    this.nivel = 1;
    //   al ponerle las , se hace referencia a si mismo, es decir rojo: rojo,
    this.colores = {
      rojo,
      rojizo,
      rojillo,
      vino,
      vinillo,
      rojazo,
      rojorojo,
      rojito,
      negro,
    };
  }
  // el .fill pone todos los arrays en 0
  generarSecuencia() {
    this.secuencia = new Array(MAXIMOlEVELS)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 9));
  }

  nextLevel() {
    this.subnivel = 0;
    this.iluminarSecuencia();
    this.agregarElementosClick();
  }
  // cambiar color
  transformarNumeroaColor(numero) {
    switch (numero) {
      // al ponerle un return el break no se ejucatar, ya que el return,
      //   cierra por asi decirlo, se lo pondre por visibilidade
      case 0:
        return "rojo";
        break;
      case 1:
        return "rojizo";
        break;
      case 2:
        return "rojillo";
        break;
      case 3:
        return "vino";
        break;
      case 4:
        return "vinillo";
        break;
      case 5:
        return "rojazo";
        break;
      case 6:
        return "rojorojo";
        break;
      case 7:
        return "rojito";
        break;
      case 8:
        return "negro";
        break;
    }
  }
  // cambiar a numero
  transformarColoraNumero(nombreColor) {
    switch (nombreColor) {
      case "rojo":
        return 0;
      case "rojizo":
        return 1;
      case "rojillo":
        return 2;
      case "vino":
        return 3;
      case "vinillo":
        return 4;
      case "rojazo":
        return 5;
      case "rojorojo":
        return 6;
      case "rojito":
        return 7;
      case "negro":
        return 8;
    }
  }
  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroaColor(this.secuencia[i]);
      // esto hara que los colores tengan un cierto espacio de iluminat
      setTimeout(() => this.iluminarColor(color), 1000 * i);
    }
  }
  iluminarColor(color) {
    this.colores[color].classList.add("iluminar");
    setTimeout(() => this.apagarColor(color), 350);
  }
  apagarColor(color) {
    this.colores[color].classList.remove("iluminar");
  }
  agregarElementosClick() {
    this.colores.rojo.addEventListener("click", this.elegirColor);
    this.colores.rojizo.addEventListener("click", this.elegirColor);
    this.colores.rojillo.addEventListener("click", this.elegirColor);
    this.colores.vino.addEventListener("click", this.elegirColor);
    this.colores.vinillo.addEventListener("click", this.elegirColor);
    this.colores.rojazo.addEventListener("click", this.elegirColor);
    this.colores.rojorojo.addEventListener("click", this.elegirColor);
    this.colores.rojito.addEventListener("click", this.elegirColor);
    this.colores.negro.addEventListener("click", this.elegirColor);
  }

  eliminarElementosClick() {
    this.colores.rojo.removeEventListener("click", this.elegirColor);
    this.colores.rojizo.removeEventListener("click", this.elegirColor);
    this.colores.rojillo.removeEventListener("click", this.elegirColor);
    this.colores.vino.removeEventListener("click", this.elegirColor);
    this.colores.vinillo.removeEventListener("click", this.elegirColor);
    this.colores.rojazo.removeEventListener("click", this.elegirColor);
    this.colores.rojorojo.removeEventListener("click", this.elegirColor);
    this.colores.rojito.removeEventListener("click", this.elegirColor);
    this.colores.negro.removeEventListener("click", this.elegirColor);
  }
  victoria() {
    swal("Jesmoo", "Has Ganado, suerte para la proxima", "success").then(
      this.inicializar
    );
  }

  perdioGame() {
    swal("Jesmoo", "Has perdido :c, suerte para la proxima", "error").then(
      () => {
        this.inicializar();
        this.eliminarElementosClick();
      }
    );
  }

  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.transformarColoraNumero(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.eliminarElementosClick();
        if (this.nivel === MAXIMOlEVELS + 1) {
          this.victoria();
        } else {
          setTimeout(() => this.nextLevel(), 1200);
        }
      }
    } else {
      this.perdioGame();
    }
  }
}

// alerta
// funcion que se activa al dar click al boton
function empezarJuego() {
  var juego = new game();
  setTimeout(() => juego, 1000);
}
