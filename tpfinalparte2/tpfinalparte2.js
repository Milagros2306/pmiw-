// Milagros Donnantuoni, Comision 2

let juego;
let imgFondo, imgPersonaje, imgEnemigo;
let sonidoSalto, sonidoPunto, sonidoGameOver;
let estado = "menu";  

function preload() {
  imgFondo = loadImage("data/fondo.png");
  imgPersonaje = loadImage("data/personaje.png");
  imgEnemigo = loadImage("data/enemigo.png");

  sonidoSalto = loadSound("data/salto.mp3");
  sonidoPunto = loadSound("data/punto.mp3");
  sonidoGameOver = loadSound("data/gameover.mp3");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(255);

  if (estado === "menu") {
    mostrarMenu();
  }
  else if (estado === "jugando") {
    juego.actualizar();
    juego.dibujar();
  }
  else if (estado === "victoria") {
    mostrarVictoria();
  }
  else if (estado === "derrota") {
    mostrarDerrota();
  }
}

function keyPressed() {
  if (estado === "menu" && keyCode === ENTER) {
    juego.iniciar();
    estado = "jugando";
  }

  if (estado === "jugando" && key === " ") {
    juego.personaje.saltar();
  }

  if ((estado === "victoria" || estado === "derrota") && keyCode === ENTER) {
    juego.iniciar();
    estado = "jugando";
  }
}

function mostrarMenu() {
  textAlign(CENTER);
  fill(0);
  textSize(28);
  text("MINIJUEGO - Kpop Demon Hunters", width/2, 100);

  textSize(18);
  text("Instrucciones:\n- Espacio para saltar\n- Si chocás un cactus: perdés\n- Llegá a 1500 puntos para ganar\n\nPresioná ENTER para comenzar",
       width/2, 160);
}

function mostrarDerrota() {
  textAlign(CENTER);
  fill(255, 0, 0);
  textSize(32);
  text("¡Perdiste!", width/2, height/2);
  textSize(18);
  text("Presioná ENTER para volver a jugar", width/2, height/2 + 40);
}

function mostrarVictoria() {
  textAlign(CENTER);
  fill(0, 200, 0);
  textSize(32);
  text("¡Ganaste!", width/2, height/2);
  textSize(18);
  text("Presioná ENTER para volver a jugar", width/2, height/2 + 40);
}
