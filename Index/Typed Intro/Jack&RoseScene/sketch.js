/*References
https://editor.p5js.org/fenfenrita/sketches/ryXtDYXu7
https://3.bp.blogspot.com/-ryaPDN_SMh8/WO4qaVdi5xI/AAAAAAAAH-s/4EGPAHx99vQc7meoC_lD26v_9qnU-NzegCLcB/s1600/IMG_7102.JPG
*/

let colOrange = "#ff7259";
let colYellow = "	#ffab41";
let colBlue = "#7bceee";
let dove = [];

function preload() {
  img = loadImage("dove.png");
  TitanicOST = loadSound("TitanicOST.mp3");
  Birds = loadSound("Birds.mp3");
}

function setup() {
  TitanicOST.play();
  createCanvas(windowWidth, windowHeight);
  backgroundColor = createSlider(0, windowHeight, 0, 5);
  backgroundColor.position(10, 10);
  sun = new Sun();
  ship = new Ship();
  rose = new Rose();
  jack = new Jack();
  clouds = new Clouds(0,0);
  
  for (let i = 0; i < 7; i++) {
    dove[i] = new Dove(width/2,height/4);
  }
}

function draw() {
  gradient = backgroundColor.value();
  sunset();
  sun.display();
  clouds.display();
  clouds.move();
  
  for (let i = 0; i < dove.length; i++) {
    dove[i].move();
    dove[i].display();
  }

  jack.display();
  rose.display();
  ship.display();
  
  noStroke();
  fill("white");
  textSize(20);
  text('Click to create more birds', 170, 27);
  
  if (mouseIsPressed === true) {
    Birds.playMode('untilDone');
    Birds.play();
  } else {
    TitanicOST.playMode('untilDone');
    TitanicOST.play();
  }
}

function sunset() {
  colOrange = color(colOrange);
  colYellow = color(colYellow);
  colBlue = color(colBlue);

  for (let y = 0; y < gradient; y++) {
    let yCor = map(y, 0, gradient, 0, 1);
    let createdCol = lerpColor(colOrange, colYellow, yCor);
    stroke(createdCol);
    line(0, y, windowWidth, y);
  }

  for (let y = gradient; y < windowHeight; y++) {
    yCor = map(y, 0, windowHeight, 0, 1);
    createdCol = lerpColor(colBlue, colYellow, yCor);
    stroke(createdCol);
    line(0, y, windowWidth, y);
  }
}

class Ship {
  display() {
    strokeWeight(10);
    strokeJoin(ROUND);
    stroke("white");
    noFill();
    beginShape();
    vertex(0, 610);
    vertex(1050, 600);
    vertex(1010, 900);
    endShape();

    strokeWeight(6);
    line(0, 650, 1045, 640);
    line(0, 690, 1040, 680);
    line(0, 730, 1035, 720);
    line(0, 770, 1030, 760);
    line(0, 810, 1025, 800);
    line(0, 850, 1020, 840);
    line(0, 890, 1015, 880);

    line(100, 1000, 100, 610);
    line(200, 1000, 200, 610);
    line(300, 1000, 300, 610);
    line(400, 1000, 400, 605);
    line(500, 1000, 500, 605);
    line(600, 1000, 600, 605);
    line(700, 1000, 700, 605);
    line(800, 1000, 800, 605);
    line(900, 1000, 900, 605);

    fill("white");
    circle(100, 592, 22);
    circle(200, 592, 22);
    circle(300, 591, 22);
    circle(400, 590, 22);
    circle(500, 589, 22);
    circle(600, 588, 22);
    circle(700, 587, 22);
    circle(800, 586, 22);
    circle(900, 585, 22);

    fill("black");
    stroke("black");
    beginShape();
    vertex(0, 900);
    vertex(1100, 900);
    vertex(1090, 1000);
    vertex(0, 1000);
    endShape();
  }
}

class Rose {
  display() {
    
    noStroke();
    fill(255,251,182);
    quad(800, 430, 860, 430, 870, 380, 780, 380);//jack's hair
    ellipse(831, 360, 110, 110);//jack's hair
    
    
    fill(255, 223, 196);
    rect(820, 410, 25, 35);//jack's neck
    ellipse(835, 375, 80, 110);//jack's face
    fill(255,251,182);
    arc(802, 320, 50, 70, 0, 0.70*PI);//jack's bangs
    arc(845, 322, 50, 30, 0, PI + QUARTER_PI, CHORD);//jack's bangs

    noStroke();
    fill(225, 125, 23);
    ellipse(900, 465, 130, 300); //hair
    rect(835, 465, 130, 200); //hair

    strokeJoin(ROUND);
    fill(112, 0, 0);
    stroke(112, 0, 0);
    ellipse(900, 850, 200, 500); //lower part of dress
    quad(870, 610, 930, 610, 950, 450, 850, 450); //upper part of the dress

    noStroke();
    fill("black");
    rect(800, 445, 7, 175);//jack's suspender
    
    noStroke();
    fill(244, 244, 239);
    quad(765, 445, 770, 495, 860, 595, 880, 595); //jack's left arm this is because it has to show
    quad(965, 530, 965, 560, 940, 615, 930, 600); //jack's right arm

    fill(255, 223, 196);
    circle(872, 600, 30); //jack's left hand
    circle(935, 600, 30); //jack's right hand

    fill(112, 0, 0);
    stroke(112, 0, 0);
    quad(850, 450, 855, 470, 750, 465, 750, 455); //left arm
    quad(950, 450, 950, 470, 1050, 465, 1050, 455); //right arm

    noStroke();
    fill(255, 223, 196);
    ellipse(730, 460, 45, 30); //left hand
    ellipse(1070, 460, 45, 30); //left hand
    arc(900, 447, 70, 50, 0, PI);
    quad(885, 447, 915, 447, 915, 420, 885, 420); //neck
    ellipse(900, 380, 80, 110); //face

    fill(225, 125, 23);
    arc(906, 333, 50, 35, 0, PI + QUARTER_PI, CHORD); //bangs
    arc(880, 330, 50, 58, 0, 0.75 * PI); //bangs
  }
}

class Jack {
  display() {
    noStroke();
    fill(67, 47, 33);
    quad(780, 900, 810, 900, 810, 650, 780, 650); //left leg
    quad(820, 900, 850, 900, 850, 650, 820, 650); //right leg
    rect(780, 600, 70, 70); //connecting legs

    fill(244, 244, 239);
    quad(780, 620, 850, 620, 865, 445, 765, 445); //body
  }
}

class Sun {
  constructor() {
    this.angle = 0;
    this.increment = 1;
    this.angle = this.angle + this.increment;
    this.size = sin(this.angle);
    this.raysColor1 = color(255, 151, 0);
    this.raysColor1.setAlpha(15 + 15 * sin(millis() / 1000));
    this.raysColor2 = color(255,243,71);
    this.raysColor2.setAlpha(30 + 30 * sin(millis() / 1000));
  }
  
  display() {
    push();
    noStroke();
    drawingContext.shadowBlur = 1000;
    drawingContext.shadowColor = color(255,84,0);
    fill(this.raysColor1);
    this.raysColor1.setAlpha(15 + 15 * sin(millis() / 900));
    quad(750, 1000, 800, 1000, 0, 770, 0, 870);
    quad(800, 1000, 900, 1000, 0, 500 , 0, 600);
    quad(850, 1000, 950, 1000, 0, 100, 0, 300);
    quad(900, 1000, 950, 1000, 450, 0, 300, 0);
    quad(950, 1000, 1000, 1000, 900, 0, 700, 0);
    quad(1000, 1000, 1050, 1000, 1350, 0, 1200, 0);
    quad(1050, 1000, 1100, 1000, 1900, 0, 1700, 0);
    quad(1100, 1000, 1150, 1000, 2670, 0, 2350, 0);
    quad(1150, 1000, 1200, 1000, 4500, 200, 3300, 200);
    
    drawingContext.shadowBlur = 1000;
    drawingContext.shadowColor = color(255,151,0);
    fill(this.raysColor2);
    this.raysColor2.setAlpha(20 + 20 * sin(millis() / 900));
    quad(750, 1000, 800, 1000, 0, 770, 0, 870);
    quad(800, 1000, 900, 1000, 0, 500, 0, 600);
    quad(850, 1000, 950, 1000, 0, 100, 0, 300);
    quad(900, 1000, 950, 1000, 450, 0, 300, 0);
    quad(950, 1000, 1000, 1000, 900, 0, 700, 0);
    quad(1000, 1000, 1050, 1000, 1350, 0, 1200, 0);
    quad(1050, 1000, 1100, 1000, 1900, 0, 1700, 0);
    quad(1100, 1000, 1150, 1000, 2670, 0, 2350, 0);
    quad(1150, 1000, 1200, 1000, 4500, 200, 3300, 200);
    
    fill(255,226,114);
    drawingContext.shadowBlur = 1000;
    drawingContext.shadowColor = color(255,236,0);
    ellipse(900, 1000, 600, 400);
    pop();
  }
}

class Clouds {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.xPos = 0;
    this.yPos = 0;
    this.increment = 1;
  }
  
  display() {
    push();
    noStroke();
    translate(this.x,this.y);
    fill("white");
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
    this.xPos = this.x += this.increment; 
    if (this.x > width) {
      this.x = -width-110;
    } 
  }
}

class Dove {
  constructor(x,y) {
    this.x = x;
	this.y = y;
	this.sz = 12;
	this.xDir = random(-2, 2);
	this.yDir = random(-2, 2); 
  }
  
  move() {
    this.x = this.x + this.xDir;
	this.y = this.y + this.yDir;
    
    if (this.x > windowWidth || this.x < 0) {
			this.xDir *= -1;
		}
		if (this.y > windowHeight || this.y < 0) {
			this.yDir *= -1;
		}
    
   /* if (key == "d") {
      dove.splice(5,1);
    }*/
  }
	
  display() {
        img.resize(70,50);
        image(img, this.x, this.y);
	}
}
/*function createMore() {
  dove.push(new Dove (mouseX,mouseY));
}*/
function mousePressed() {
  dove.push(new Dove(mouseX, mouseY));
}