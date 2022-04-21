let words = 'In a galaxy far, far away...';
let myFont = 0;
let position = 0;
let lastMilsec = 0;
let typeSound = 0;

function setup() {
  createCanvas(1050, 200); 
  typeSound.play();
}

function draw() {
  background("black");
  
  push();
  translate(10, 110);
  fill("white")
  textFont(myFont);
  textSize(60);
  text(words.substring(0, position), 0, 0);//Tells the program to type the letters from 0 to position, which is always adding one. This way it will write the previous one along with the next upcoming letter. This is possible because of the .substring() method that extracts characters, between two indices (positions), from a string, and returns the substring.
  pop();
	
/*This conditional is also working along with the words.subtring to type each letter because it veryfies if the previous letter was written or not. If it uses millis to read the time it took to write the first letter, and check if the letter was written. IF it was written, then it moves on to write the second letter. However, it is basically writing multiple layers of words because it rewrite the previous one along with the next one.*/
  
  if (millis() > lastMilsec + 205) {
		position = position + 1;
		lastMilsec = millis();
	}
}

function preload() {
  typeSound = loadSound('Type.mp3');
  myFont = loadFont('CourierPrime-Bold.ttf');
}