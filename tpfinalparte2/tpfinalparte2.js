// https://youtu.be/mo5SE_JSNFI

//Milagros Donnantuoni Comision 2

let imgPersonaje;
let imgEnemigo;
let imgFondo;
let sonidoSalto;
let sonidoPunto;
let sonidoGameOver;
let juego;
let estado = "menu";

function preload() {
  imgPersonaje = loadImage("data/personaje.png");
  imgEnemigo = loadImage("data/enemigo.png");
  imgFondo = loadImage("data/fondo.png");

  sonidoSalto = loadSound("data/salto.mp3");
  sonidoPunto = loadSound("data/punto.mp3");
  sonidoGameOver = loadSound("data/gameover.mp3");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  if (estado === "menu") {
    mostrarMenu();
  } else if (estado === "jugando") {
    juego.actualizar();
    juego.dibujar();
  } else if (estado === "victoria") {
    mostrarVictoria();
  } else if (estado === "derrota") {
    mostrarDerrota();
  }
}

function mostrarMenu() {
  background(200);
  textSize(25);
  text("MINIJUEGO - Kpop Demon Hunters", 100, 150);
  textSize(18);
  text("Instrucciones:", 100, 200);
  text("• Espacio para saltar", 100, 230);
  text("• Si chocás un cactus: perdés", 100, 260);
  text("• Llegá a 2500 puntos para ganar", 100, 290);
  text("Presioná la tecla ENTER para comenzar", 100, 330);
  textSize(14);
  text("Créditos: Juego creado por Milagros", 100, 370);
}

function mostrarVictoria() {
  background(180, 255, 180);
  textSize(30);
  text("¡GANASTE!", 230, 200);
  textSize(18);
  text("Puntaje final: " + juego.puntaje.valor, 240, 250);
  text("Presioná R para reiniciar", 210, 300);
}

function mostrarDerrota() {
  background(255, 180, 180);
  textSize(30);
  text("GAME OVER", 230, 200);
  textSize(18);
  text("Presioná R para reiniciar", 230, 250);
}

function keyPressed() {
  if (key === ' ') {
    if (estado === "jugando") juego.personaje.saltar();
  }
  if (keyCode === ENTER) {
    if (estado === "menu") {
      estado = "jugando";
    }
  }
  if (key === 'r' || key === 'R') {
    if (estado === "victoria" || estado === "derrota") {
      juego.iniciar();
      estado = "menu";
    }
  }
}
