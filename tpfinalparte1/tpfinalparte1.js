// Milagros Donnantuoni comision 2
// https://youtu.be/bBLJjGYArgM?feature=shared


let pantalla = 0;
let imagenes = [];
let sonidos = [];
let botones = [];

function preload(){ 
  
 imagenes[0] = loadImage('data/portada.jpg');
  imagenes[1] = loadImage('data/ensayo.jpg');
  imagenes[2] = loadImage('data/ataque.jpg');
  imagenes[3] = loadImage('data/backstage.jpg');
  imagenes[4] = loadImage('data/batalla.jpg');
  imagenes[5] = loadImage('data/revelacion.jpg');
  imagenes[6] = loadImage('data/traicion.jpg');
  imagenes[7] = loadImage('data/final1.jpg');
  imagenes[8] = loadImage('data/final2.jpg');
  imagenes[9] = loadImage('data/final3.jpg');

  sonidos[0] = loadSound('data/inicio.mp3'); // pantalla de inicio
  sonidos[1] = loadSound('data/ruidos misteriosos.mp3');
  sonidos[2] = loadSound('data/aventura.mp3');   // incluye pantalla 2,3,5,6,7,8,9,11
  sonidos[2] = loadSound('data/batalla.mp3');
  sonidos[3] = loadSound('data/reencuentro.mp3');
  sonidos[4] = loadSound('data/final1.mp3');
  sonidos[5] = loadSound('data/final2.mp3');
  sonidos[6] = loadSound('data/final3.mp3');
  
}
function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);
  textSize(18);
}

function draw() {
  background(0);
  mostrarPantalla(pantalla);
}

// --- Función con parámetro ---
function mostrarPantalla(num) {
  if (imagenes[num]) {
    image(imagenes[num], 0, 0, width, height);
  }

  fill(255);

  // Pantalla 0 – INICIO
  if (num === 0) {
    text("🎵 HUNTRIX: KPOP Demon Hunters", width / 2, height / 2 - 40);
    mostrarBoton("Comenzar", width / 2 - 60, height / 2 + 20);
    mostrarBoton("Créditos", width / 2 - 60, height / 2 + 80); 
    
  text("CRÉDITOS");
  text("Proyecto: Huntrix- Kpop demon Hunters", width / 2, 120);
  text("Creado por Milagros Donnantuoni", width / 2, 160);
  text("Profesor: Matías Jauregui Lorda ", width / 2, 200);
  text("Artista de la imagen del fanart de rumi demonio es de : Evelina0o", width / 2, 240);
  text("Basado en la pelicula: Kpop Demon Hunters", width / 2, 280);
  mostrarBoton("Volver al inicio", width / 2 - 60, height - 80);
}
  // Pantalla 1 – ENSAYO DE HUNTRIX
  else if (num === 1) {
    texto("Ensayo de Huntrix");
    texto("Se oyen ruidos misteriosos");
    mostrarOpciones(["Ignorar ruidos", "Investigar ruido"]);
  }

  // Pantalla 2 – LUCES ROJAS
  else if (num === 2) {
 texto("¡Ataque demoníaco!");
 mostrarOpciones(["Usar canto protector", "Escapar al backstage"]);
  }

  // Pantalla 3 – BACKSTAGE OSCURO
  else if (num === 3) {
    texto("Aparece Jinu");
    mostrarOpciones(["Hablar con Jinu", "Atacarlo"]);
  }

  // Pantalla 4 – DUELO MUSICAL
  else if (num === 4) {
    texto("Batalla musical");
    mostrarOpciones(["Cantar 'Golden'", "Cantar 'Takedown'"]);
  }

  // Pantalla 5 – HERENCIA DEMONÍACA
  else if (num === 5) {
    texto("Rumi descubre su herencia demoníaca");
    mostrarOpciones(["Confesar la verdad", "Negarlo y huir"]);
  }

  // Pantalla 6 – TRAICIÓN / RUMORES
  else if (num === 6) {
    texto("Rumores y Jinu la traicionarla.");
    mostrarOpciones(["Pedir perdón a Mira y Zoey", "Culpar a Jinu"]);
  }

  // Pantalla 7 – RUPTURA DEL GRUPO
  else if (num === 7) {
    texto("El grupo se rompe y Rumi debe decidir.");
    mostrarOpciones(["Buscar ayuda en Jinu", "Luchar sola"]);
  }

  // Pantalla 8 – JINU REVELA SU PASADO
  else if (num === 8) {
    texto("Jinu revela su pasado oscuro");
    mostrarOpciones(["Aceptar su ayuda", "Rechazarlo"]);
  }

  // Pantalla 9 – DESPERTAR DE GWI-MA
  else if (num === 9) {
    texto("¡Gwi-Ma despierta! Rumi debe actuar.");
    mostrarOpciones(["Formar dúo con Jinu", "Intentar sellar sola"]);
  }

  // Pantalla 10 – REENCUENTRO DE HUNTRIX
  else if (num === 10) {
    texto("Huntrix se reencuentra para el canto final");
    mostrarOpciones(["Cantar 'What is sounds like'", "Usar alma de Jinu"]);
  }

  // Pantalla 11 – RUMI SOLA CONTRA GWI-MA
  else if (num === 11) {
    texto("Rumi lucha sola contra Gwi-Ma");
    mostrarBoton("Final 2 – Caída del Mundo", width / 2 - 100, height - 60);
  }

  // --- FINALES ---
  else if (num === 12) {
    texto("🌟 FINAL 1 – La Luz del Honmoon\nHuntrix derrota a Gwi-Ma y Jinu y rumi terminan juntos.");
    mostrarBoton("Volver al inicio", width / 2 - 60, height - 60);
  }

  else if (num === 13) {
    texto("💀 FINAL 2 – Caída del Mundo\nRumi se convierte en demonio y el mundo cae.");
    mostrarBoton("Volver al inicio", width / 2 - 60, height - 60);
  }

  else if (num === 14) {
    texto("💫 FINAL 3 – Redención de las Sombras\nEl sello se mantiene, pero Rumi pierde a Jinu.");
    mostrarBoton("Volver al inicio", width / 2 - 60, height - 60);
  }
}

// --- FUNCIONES AUXILIARES ---
function texto(t) {
  fill(255);
  text(t, width / 2, 60);
}

function mostrarBoton(texto, x, y) {
  fill(180, 100, 255);
  rect(x, y, 160, 40, 10);
  fill(255);
  text(texto, x + 80, y + 20);
}

function mostrarOpciones(opciones) {
  for (let i = 0; i < opciones.length; i++) {
    mostrarBoton(opciones[i], width / 2 - 100, 250 + i * 60);
  }
}
function reproducirSonido(num) {
  for (let s of sonidos) {
    if (s.isPlaying()) s.stop();
  }
  sonidos[num].play(); 
}


// --- CONTROL DE PANTALLAS Y SONIDOS ---
function mousePressed() {
  if (pantalla === 0) {
    pantalla = 1;
    reproducirSonido(0); 
  }

  else if (pantalla === 1) {
    pantalla = mouseY < 280 ? 2 : 3;
    reproducirSonido(1); 
  }

  // Pantallas con mismo sonido (2,3,5,6,7,8,9,11)
  else if ([2, 3, 5, 6, 7, 8, 9, 11].includes(pantalla)) {
    pantalla = mouseY < 280 ? 5 : 6;
    reproducirSonido(2); 
  }

  else if (pantalla === 10) {
    pantalla = mouseY < 280 ? 12 : 13;
    reproducirSonido(3); 
  }

  // Finales con sonidos distintos
  else if (pantalla === 12) {
    reproducirSonido(4); // final bueno
  }

  else if (pantalla === 13) {
    reproducirSonido(5); // final malo
  }

  else if (pantalla === 14) {
    reproducirSonido(6); // final alternativo
  }

  else if (pantalla === 15) {
    reproducirSonido(0); 
  }
} 
