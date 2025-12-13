class Vida {
  constructor() {
    this.vivo = true;
  }

  perderVida() {
    this.vivo = false;
  }

  dibujar() {
    fill(255, 0, 0);
    textSize(18);
    text("Vidas: " + (this.vivo ? "1" : "0"), 20, 30);
  }
}