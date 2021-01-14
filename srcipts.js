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
const MAXIMOlEVELS = 3;

class game {
  constructor() {
    this.inicializar();
    this.generarSecuencia();
    this.nextLevel();
  }
  inicializar() {
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
    this.colores.rojo.addEventListener("click", this.elegirColor.bind(this));
    this.colores.rojizo.addEventListener("click", this.elegirColor.bind(this));
    this.colores.rojillo.addEventListener("click", this.elegirColor.bind(this));
    this.colores.vino.addEventListener("click", this.elegirColor.bind(this));
    this.colores.vinillo.addEventListener("click", this.elegirColor.bind(this));
    this.colores.rojazo.addEventListener("click", this.elegirColor.bind(this));
    this.colores.rojorojo.addEventListener(
      "click",
      this.elegirColor.bind(this)
    );
    this.colores.rojito.addEventListener("click", this.elegirColor.bind(this));
    this.colores.negro.addEventListener("click", this.elegirColor.bind(this));
  }
  eliminarElementosClick() {
    this.colores.rojo.removeEventListener("click", this.elegirColor.bind(this));
    this.colores.rojizo.removeEventListener(
      "click",
      this.elegirColor.bind(this)
    );
    this.colores.rojillo.removeEventListener(
      "click",
      this.elegirColor.bind(this)
    );
    this.colores.vino.removeEventListener("click", this.elegirColor.bind(this));
    this.colores.vinillo.removeEventListener(
      "click",
      this.elegirColor.bind(this)
    );
    this.colores.rojazo.removeEventListener(
      "click",
      this.elegirColor.bind(this)
    );
    this.colores.rojorojo.removeEventListener(
      "click",
      this.elegirColor.bind(this)
    );
    this.colores.rojito.removeEventListener(
      "click",
      this.elegirColor.bind(this)
    );
    this.colores.negro.removeEventListener(
      "click",
      this.elegirColor.bind(this)
    );
  }
  victoria() {
    Swal.fire({
      title: "Custom width, padding, background.",
      width: 600,
      padding: "3em",
      background: "#fff url(/images/trees.png)",
      backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
    });
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
        if (this.nivel === this.secuencia.length + 1) {
          this.victoria();
        } else {
          // console.log("aaaaa");
          setTimeout(() => this.nextLevel(), 1200);
        }
      }
    } else {
    }
  }
}

// alerta
// funcion que se activa al dar click al boton
function empezarJuego() {
  btnEmpezar.classList.add("hide");
  setTimeout(() => (window.juego = new game()), 1000);
}
