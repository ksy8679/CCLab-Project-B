/*References:
https://p5js.org/reference/#/p5/strokeJoin
https://p5js.org/examples/math-noise-wave.html
https://medium.com/@yanhann10/drawing-waves-with-p5-js-444f447bdc39
https://htmlcolorcodes.com/es/
https://www.color-hex.com/color-palette/10313
https://www.youtube.com/watch?v=EAY7S1tWbzc
https://www.youtube.com/watch?v=qOHuT5njtRA&t=3s
https://www.youtube.com/watch?v=rp90Ef51Xqg
https://www.w3schools.com/howto/howto_css_animate_buttons.asp
https://www.color-hex.com/color-palettes/?keyword=lightning
a rounded rectangle css
https://www.geeksforgeeks.org/p5-js-quad-function/
*/

let rdy = false;

let colOrange = "#ff7259";
let colYellow = "#ffab41";
let colBlue = "#7bceee";
let colDarkblue = "#1b3045";
let colGray = "	#b1b1b1";
let ship, clouds;
/*let xCoordinates1 = [];
let xCoordinates2 = [];
let xCoordinates3 = [];
let xCoordinates4 = [];
let yCoordinates1 = [];
let yCoordinates2 = [];
let yCoordinates3 = [];
let yCoordinates4 = [];*///commented them because they can be used, but don't want to use them
let dots = [];
//let smokeBub = [];
let yOff = 0;
let BoatSailing;
let ShipSinking;
let Thunder;


 
function preload(){
  BoatSailing = loadSound('BoatSailing.mp3');
  Thunder = loadSound('Thunder.mp3');
  ShipSinking = loadSound('ShipSinking.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let d = 0; d < 1000; d++) {
    dots[d] = new Dot();
  }
  ship = new Ship(0, windowWidth / 3); //(xPos, yPos) of ship
  clouds = new Clouds(0, windowWidth / 3); //(xPos, yPos) of clouds
  iceberg = new Iceberg();
  BoatSailing.play();

  /*for (let i = 0; i < 25; i++) {
    smokeBub[i] = new Smoke(15, windowWidth / 3);
  }*/

  /*for (let i = 0; i < 100; i++) {
    xCoordinates1.push(random(-215, -225));
    xCoordinates2.push(random(-95, -105));
    xCoordinates3.push(random(16, 25));
    xCoordinates4.push(random(142, 150));
    yCoordinates1.push(random(20, 100));
    yCoordinates2.push(random(25, 105));
    yCoordinates3.push(random(30, 110));
    yCoordinates4.push(random(15, 115));
  }*/
}

function draw() {
  background(0);

  if (mouseIsPressed == true) {
    BoatSailing.stop();
    Thunder.playMode('untilDone');//play sound until done so it's not constantly playing
    Thunder.play();
  } else if (BoatSailing.isPlaying() == false) {
    BoatSailing.play();
    Thunder.stop();
  }

  gradientBackground(); //calls background gradient function

  if (keyIsPressed == true) {
  for (let d = 0; d < 200; d++) {
       dots[d].move();
       dots[d].display();
  }
} 
  
   if (key === 'r') {
  for (let d = 0; d < 200; d++) {
       dots[d].move();
       dots[d].display();
  }
} 
  
  /*for (let i = 0; i < smokeBub.length; i++) {
    smokeBub[i].display();
    smokeBub[i].move();
  }*/

  ship.move(); //calls move function within the ship class
  ship.display(); //calls display function within the ship class
  clouds.move();
  drawingContext.shadowBlur = 0;
  clouds.display(); //calls display function within the clouds class
  
  noStroke();
  textSize(20);
  fill('white');
  text('Keep mouse pressed to activate lightning and thunder sound', 15, 30);
  text('Press "r" = automatic and constant rain', 15, 50);
  text('Hold any key pressed = momentary rain', 15, 70);
  iceberg.display();

  Wave1();
  Wave2();
}

//-----(function in charge of background)---//
function gradientBackground() {
  colDarkBlue = color(colDarkblue);
  colGray = color(colGray);

  for (let y = 0; y < windowHeight; y++) {
    yCor = map(y, 0, windowHeight, 0, 1);
    createdCol = lerpColor(colDarkBlue, colGray, yCor);
    stroke(createdCol);
    line(0, y, windowWidth, y);
  }
}

function Wave2() {
  stroke(69, 160, 255);
  fill(69, 160, 255);
  
  beginShape();
  let xOff = yOff;


  for (let x = 0; x <= windowWidth; x += 10) {
    let y = map(noise(xOff, yOff), 0, 1, 600, 720);
    vertex(x, y);
    xOff += 0.05;
  }

  yOff += 0.01;
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);
}

function Wave1() {
  stroke(101, 130, 255);
  fill(101, 130, 255);
  beginShape();
  let xOff = yOff;

  for (let x = 0; x <= width; x += 10) {// Iterate over horizontal pixels
    let y = map(noise(xOff, yOff), 0, 1, 550, 705);// Calculate a y value according to noise, map
    vertex(x, y);
    xOff += 0.09;// Increase x dimension for noise
  }
  
  yOff += 0.01;// Increase y dimension for noise
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);
}

//-------(Class to create the ship)--------//
class Ship {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.xPos = 0;
    this.yPos = 0;
    this.increment = 1;
  }

  move() {
    this.xPos = this.x += this.increment; //alway adds 1 to x-position=>makes ship move
    if (this.x > 700) {
      ShipSinking.playMode('untilDone');
      ShipSinking.play();//play ship wrecking sound
      this.increment = 0.09;//make ship slow down
      this.yPos = this.y += 0.1;//alway adds 1 to y-position=>makes ship sink
    } 
    
    if (this.y > 770) {
      this.y = 770;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    stroke(81, 134, 190);
    rotate(PI / 2.1);
    fill(81, 134, 190);
    rect(-220, 170, 80, 40);
    rect(-212, 50, 80, 40);
    rect(-204, -70, 90, 40);
    rect(-196, -195, 90, 40);

    stroke("black");
    fill("black");
    rect(-220, 170, 15, 40);
    rect(-212, 50, 15, 40);
    rect(-204, -70, 15, 40);
    rect(-196, -195, 15, 40);
    pop();

    push();
    translate(this.x, this.y);
    noStroke();
    fill(96, 6, 30);
    quad(-500, -100, 500, -100, 400, 100, -480, 100);
    fill("white");
    strokeWeight(1);
    stroke("black");
    rect(-290, -140, 550, 20);
    rect(-350, -120, 680, 20);
    quad(-500, -100, 500, -100, 490, -80, -498, -80);
    fill("black");
    quad(-498, -80, 490, -80, 410, 80, -481, 80);

    circle(-310, -110, 8);
    circle(-260, -110, 8);
    circle(-210, -110, 8);
    circle(-160, -110, 8);
    circle(-110, -110, 8);
    circle(-60, -110, 8);
    circle(-10, -110, 8);
    circle(40, -110, 8);
    circle(90, -110, 8);
    circle(140, -110, 8);
    circle(190, -110, 8);
    circle(240, -110, 8);
    circle(290, -110, 8);

    circle(-260, -130, 6);
    circle(-210, -130, 6);
    circle(-160, -130, 6);
    circle(-110, -130, 6);
    circle(-60, -130, 6);
    circle(-10, -130, 6);
    circle(40, -130, 6);
    circle(90, -130, 6);
    circle(140, -130, 6);
    circle(190, -130, 6);
    circle(240, -130, 6);
    pop();
  }
}
//--------(class that makes the Clouds)--------//
class Clouds {
  
  display() {
    push();
    noStroke();
    fill(123, 125, 125);
    ellipse(50, 50, 50, 20);
    ellipse(70, 60, 50, 20);
    ellipse(30, 60, 50, 20);
    ellipse(50, 70, 50, 20);

    ellipse(20, 200, 50, 20);
    ellipse(40, 210, 50, 20);
    ellipse(0, 210, 50, 20);
    ellipse(20, 220, 50, 20);

    ellipse(255, 100, 70, 30);
    ellipse(230, 115, 70, 30);
    ellipse(280, 115, 70, 30);

    ellipse(500, 50, 50, 20);
    ellipse(490, 60, 50, 20);
    ellipse(515, 60, 50, 20);

    ellipse(750, 150, 120, 50);
    ellipse(790, 170, 120, 50);
    ellipse(710, 170, 120, 50);
    ellipse(750, 190, 120, 50);

    ellipse(1150, 30, 120, 50);
    ellipse(1100, 50, 120, 50);

    ellipse(990, 150, 70, 30);

    ellipse(1300, 105, 70, 30);
    ellipse(1330, 120, 70, 30);
    ellipse(1290, 120, 70, 30);

    ellipse(1550, 200, 100, 40);
    ellipse(1580, 185, 100, 40);
    ellipse(1520, 185, 100, 40);

    ellipse(1750, 50, 70, 50);
    ellipse(1790, 70, 70, 50);
    ellipse(1710, 70, 70, 50);
    ellipse(1750, 90, 70, 50);
    pop();
  }
  
  move() {//this instance makes the lightnings when mouse if pressed
    if (mouseIsPressed === true) {
      noFill();
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = "black";
      stroke(random(0, 255));
      strokeWeight(10);
      strokeJoin(ROUND);
      beginShape();
      vertex(50, 70);
      vertex(0, 100);
      vertex(50, 100);
      vertex(0, 130);
      endShape();

      beginShape();
      vertex(255, 120);
      vertex(305, 160);
      vertex(255, 170);
      vertex(310, 220);
      endShape();

      beginShape();
      vertex(750, 210);
      vertex(710, 250);
      vertex(770, 250);
      vertex(700, 310);
      endShape();

      beginShape();
      vertex(1100, 65);
      vertex(1170, 100);
      vertex(1150, 170);
      vertex(1250, 250);
      line(1150, 170, 1150, 260);
      line(1170, 100, 1050, 280);
      endShape();

      beginShape();
      strokeWeight(4);
      vertex(500, 60);
      vertex(470, 90);
      vertex(510, 100);
      vertex(470, 150);
      line(490, 125, 520, 135);
      endShape();

      beginShape();
      vertex(1300, 130);
      vertex(1350, 150);
      vertex(1300, 150);
      vertex(1360, 180);
      endShape();
      line(1330, 130, 1300, 180);

      beginShape();
      vertex(990, 160);
      vertex(970, 185);
      vertex(995, 200);
      endShape();
      
      beginShape();
      vertex(990, 160);
      vertex(1010, 185);
      vertex(975, 200);
      vertex(1010, 220);
      endShape();
    }
  }
}

//------(class in charge of creating the smoke)-------//
/*class Smoke {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.xPos = 0;
    this.yPos = 0;
    this.increment = 1;
  }

  move() {
    this.xPos = this.x += this.increment; //alway adds 1 to x-position=>makes ship move
    if (this.x > 700) {
      //if x-position is greater than 2366(screen), return to -500
      this.increment = 0.1;//make ship slow down
    }

    this.yPos = this.y -= this.increment; //alway adds 1 to y-position=>makes ship move
    if (this.y < -3200) {
      //if y-position is smaller than -500, return to 300
      this.y = -300;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(166, 172, 175, 20);
    noStroke();
    for (let i = 0; i < 15; i++) {
      ellipse(xCoordinates1[i], yCoordinates1[i] * i, 25, 25);
      ellipse(xCoordinates2[i], yCoordinates2[i] * i, 25, 25);
      ellipse(xCoordinates3[i], yCoordinates3[i] * i, 25, 25);
      ellipse(xCoordinates4[i], yCoordinates4[i] * i, 25, 25);
    }
    pop();
  }
}*/

class Iceberg {
  display() {
    noStroke();
    fill(197, 250, 255);
    triangle(1500, 170, 1100, 1000, 1900, 1000);
    fill(197, 243, 255);
    triangle(1400, 90, 900, 1000, 1800, 1000);
    fill(220, 245, 254);
    triangle(1600, 130, 1200, 1000, 2000, 1000);
  }
}

class Dot {
  constructor() {
    this.xPlane = random(random(-windowWidth, 2900), random(-windowHeight, 2900));
    this.yPlane = random(random(-windowWidth, 2900), random(-windowHeight, 2900));
    //this.zPlane = random(0,windowHeight);
    //this.angle = 0;
  }
  
  move() {
    
    this.ySpeed = random(5,10);
    this.increment = 0.5;
    this.yPlane = this.yPlane + this.ySpeed*this.increment;
    //this.zPlane = this.zPlane-10;
    
    if (this.yPlane > windowHeight) {
      this.yPlane = random(0, -windowHeight);
      this.increment = 0;
     }
    /*if (this.zPlane > 800) {
      this.zPlane = 0;
    }
    
    this.xPos = map(this.xPlane/this.yPlane,0,1,0,800);
    this.yPos = map(this.zPlane/this.yPlane,0,1,0,800);
    
    this.angle += 0.05;
    this.size = map(sin(this.angle), -1, 1, -2, 4);*/
  }
  
  display() {
    noStroke();
    fill(238,238,238);
    ellipse(this.xPlane,this.yPlane,-3,10);
  }
}