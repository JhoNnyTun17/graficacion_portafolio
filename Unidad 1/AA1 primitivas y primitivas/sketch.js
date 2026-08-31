function setup() {
  createCanvas(400, 400);
}

function draw() {
  // 1. Fondo (Cielo de la Tierra / Celaje)
  background(135, 206, 235);

  stroke(0);           // Borde negro
  strokeWeight(2);     // Grosor del borde
  fill(20, 20, 20);    // Color negro del cabello

  // Púas / picos del cabello
  triangle(120, 150, 170, 120, 80, 80);   // Pico izquierdo lateral
  triangle(140, 120, 190, 100, 130, 40);   // Pico izquierdo superior
  triangle(180, 100, 230, 110, 200, 30);   // Pico central
  triangle(210, 110, 260, 130, 270, 50);   // Pico derecho superior
  triangle(230, 140, 280, 170, 310, 100);  // Pico derecho lateral

  // Traje naranja (Gi)
  fill(255, 102, 0);
  rect(130, 240, 140, 160);

  // Camiseta interior azul
  fill(0, 51, 153);
  rect(160, 240, 80, 50);

  
  fill(255, 102, 0);
  triangle(130, 240, 270, 240, 200, 280);

  // Cinturón azul
  fill(0, 51, 153);
  rect(140, 350, 120, 25);


  // Cabeza / Piel
  fill(255, 224, 189);
  ellipse(200, 180, 110, 120);

  // Ojo izquierdo
  fill(255);
  ellipse(175, 175, 18, 22);
  fill(0);
  circle(177, 175, 8); // Pupila

  // Ojo derecho
  fill(255);
  ellipse(225, 175, 18, 22);
  fill(0);
  circle(223, 175, 8); // Pupila

  // Insignia / Símbolo en el pecho (Círculo blanco)
  fill(255);
  circle(235, 310, 35);

  stroke(0);
  strokeWeight(3);

  // Ceja izquierda (expresión seria/molesta)
  line(160, 160, 185, 167);

  // Ceja derecha
  line(215, 167, 240, 160);

  // Nariz
  line(200, 182, 196, 190);
  line(196, 190, 202, 190);

  // Boca
  strokeWeight(2);
  line(185, 205, 215, 205);
}
