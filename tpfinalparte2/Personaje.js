class Personaje {
  constructor() {
    this.x = 100;
    this.y = 380;
    this.tamano = 30;
    this.velY = 0;
    this.gravedad = 0.8;
  }

  saltar() {
    if (this.y >= 380) {
      this.velY = -15;
      sonidoSalto.play();
    }
  }

  actualizar() {
    this.y += this.velY;
    this.velY += this.gravedad;

    if (this.y > 380) {
      this.y = 380;
    }
  }

  dibujar() {
    fill(0, 120, 255);
    image(imgPersonaje, this.x, this.y - this.tamano, this.tamano, this.tamano);
  }

  chocar(enemigo) {
  return (
    this.x < enemigo.x + enemigo.ancho &&
    this.x + this.tamano > enemigo.x &&
    this.y > enemigo.y - enemigo.alto
  );
}

  }
}
