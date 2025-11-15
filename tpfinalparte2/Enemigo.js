class Enemigo {
  constructor() {
    this.x = 640;
    this.y = 380;
    this.ancho = 20;
    this.alto = 40;
    this.vel = 5;
  }

  mover() {
    this.x -= this.vel;
  }

  dibujar() {
    fill(0, 150, 0);
    image(imgEnemigo, this.x, this.y - this.alto, this.ancho, this.alto);
  }
}
