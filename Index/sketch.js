let c1, c2;

function preload() {
  img = loadImage('Drive-thruTheater.jpeg');
  img2 = loadImage('tickets.png');
  fontBebas = loadFont('Bebas.ttf');
  fontRacing = loadFont('Racing.ttf');
  fontRampart = loadFont('Rampart.ttf');
  fontStyle = loadFont('Style.ttf');
  c2 = color(204, 102, 0);
  c1 = color(0, 102, 153);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  img.resize(windowWidth, windowHeight);
  image(img, 0, 0);
  gradientCanvas(490, 90, 785, 505, c1, c2);
  
  noStroke();
  fill(135, 206, 235);
  rect(489.5, 125, 235, 50);
  
  fill("white");
  textSize(40);
  stroke("white");
  textFont(fontBebas);
  text('Now Presenting', 510, 163);
  
  fill(43, 84, 126);
  textSize(35);
  stroke(43, 84, 126);
  textFont(fontStyle);
  text('Kimberly Yau\'s Project B', 600, 230);
  
  fill(43, 84, 126);
  textSize(65);
  stroke(43, 84, 126);
  textFont(fontRacing);
  text('CINEMA', 623, 300);
  text('EXPERIENCE', 570, 360);
  textSize(40);
  text('Click "NEXT" to proceed', 520, 410);
  
  noStroke();
  fill(135, 206, 235);
  rect(675, 440, 140, 62, 12);
  
  img2.resize(320, 320);
  image(img2, 950, 160);
}

function gradientCanvas(xPos, yPos, width, height, c1, c2) {
  noFill();

    for (let i = yPos; i <= yPos + height; i++) {
      let gradient = map(i, yPos, yPos + height, 0, 1);
      let c = lerpColor(c1, c2, gradient);
      stroke(c);
      line(xPos, i, xPos + width, i);
    }
}
