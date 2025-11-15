class Juego {
  constructor() {
    this.personaje = new Personaje();
    this.vida = new Vida();
    this.puntaje = new Puntuacion();
    this.Enemigo = [];
  }

  iniciar() {
    this.personaje = new Personaje();
    this.vida = new Vida();
    this.puntaje = new Puntuacion();
    this.Enemigo = [];
  }

  actualizar() {
    
    if (frameCount % 90 === 0) {
      this.enemigo.push(new Enemigo());
    }

    for (let c of this.enemigo) {
      c.mover();

     
      if (this.personaje.chocar(c)) {
        sonidoGameOver.play();
        this.vida.perderVida();
        estado = "derrota";
      }
    }

    this.personaje.actualizar();

    this.puntaje.sumar();
    
    if (this.puntaje.valor >= 1500) {
      estado = "victoria";
    }
  }

  dibujar() {

    image(imgFondo, 0, 380, 640, 380);

    this.personaje.dibujar();

    for (let c of this.enemigo) {
      c.dibujar();
    }

    this.vida.dibujar();
    this.puntaje.dibujar();
  }
}
