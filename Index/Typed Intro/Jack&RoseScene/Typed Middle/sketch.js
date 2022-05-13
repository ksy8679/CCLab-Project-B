/*References:
https://www.britannica.com/summary/Titanic
https://css-tricks.com/snippets/css/typewriter-effect/
*/

let words = '"Meanwhile, the luxurious ocean liner approaches a huge iceberg...."';
let myFont = 0;
let position = 0;
let lastMilsec = 0;
let h = 0;

function preload() {
  typeSound = loadSound('Typing.mp3');
  myFont = loadFont('CourierPrime-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  h = 900;
  typeSound.play();
}

function draw() {
  background("black");
  
  push();
  translate(10, 110);
  fill("white")
  textFont(myFont);
  textSize(60);
  text(words.substring(0, position), 100, 0, windowWidth-200, h);//Tells the program to type the letters from 0 to position, which is always adding one. This way it will write the previous one along with the next upcoming letter. This is possible because of the .substring() method that extracts characters, between two indices (positions), from a string, and returns the substring.
  pop();
	
/*This conditional is also working along with the words.subtring to type each letter because it veryfies if the previous letter was written or not. If it uses millis to read the time it took to write the first letter, and check if the letter was written. IF it was written, then it moves on to write the second letter. However, it is basically writing multiple layers of words because it rewrite the previous one along with the next one.*/
  
  if (millis() > lastMilsec + 80) {
		position = position + 1;
		lastMilsec = millis();
	}
  
  if (position > 65) {
    typeSound.stop();
  } else {
      typeSound.playMode('untilDone');
      typeSound.play();
  }
}