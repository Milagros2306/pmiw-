// https://youtu.be/lQusghjhHg4?feature=shared
// milagros donnantuoni comision 2

let referencia; 
let columnas = 20;
let filas = 20;
let maxDiametro = 25;
let modoColor = false;
let usarCuadrados = false;

function preload() {
  referencia = loadImage('data/opArt.jpg'); 
}

function setup() {
createCanvas(800, 400); 
  referencia.resize(400, 400);
  noStroke();
}

function draw() {
background(0);
  image(referencia, 0, 0); 
  translate(400, 0); 
  
  for (let i = 0; i < columnas; i++) { // columnas
    for (let j = 0; j < filas; j++) { // filas
      let x = map(i, 0, columnas - 1, 0, width / 2);
      let y = map(j, 0, filas - 1, 0, height);
      let d = calcularDiametro(i, j); // función que retorna valor
      dibujarForma(x, y, d);            // función sin retorno
    }
  }
}

function calcularDiametro(col,fil) {
 let centroX = columnas / 2.0;
  let  centroY = filas / 2.0;
  let distancia = dist(col, fil, centroX, centroY);
  let d = map(distancia, 0, dist(0, 0, centroX, centroY), 2, maxDiametro);
  return d;
}
function dibujarForma( x, y, diametro) {
  if (modoColor) {
    fill(random(255), random(255), random(255));
  } else {
    fill(255);
  }
  
  if (usarCuadrados) {
    rectMode(CENTER);
    rect(x, y, diametro, diametro);
  } else { 
    ellipse(x, y, diametro, diametro);
  }
}
function keyPressed() {
  if (key === 'c') {
    modoColor = !modoColor; // alternar color
  } else if (key === 'f') {
    usarCuadrados = !usarCuadrados; // alternar forma
  } else if (key === 'r') {
    reiniciar(); // volver al estado original
  }
} 
 function mousePressed() {
  columnas = int (random(10, 30));
  filas = int (random(10, 30));
}

// reinicio
function reiniciar() {
  columnas = 20;
 filas = 20;
 maxDiametro = 25;
 modoColor = false;
 usarCuadrados = false;
 }

  
