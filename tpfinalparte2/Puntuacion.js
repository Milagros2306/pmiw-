class Puntuacion {
  constructor() {
    this.valor = 0;
  }

  sumar() {
    this.valor += 2;
    if (this.valor % 100 === 0) {
    sonidoPunto.play();
    }
  }

  dibujar() {
    fill(0);
    textSize(18);
    text("Puntaje: " + this.valor, 500, 30);
  }
}