/*References:
https://www.britannica.com/summary/Titanic
https://css-tricks.com/snippets/css/typewriter-effect/
*/

let words = '"Jack is a young artist who wins a ticket to travel to America on a famous ship. On board the ship, he meets Rose, a high-class girl who is traveling with her mother and her fiancé Cal, a conceited millionaire who is only interested in the prestige of his fiancé\'s family. Jack and Rose fall in love despite the obstacles that her mother and Cal put in their relationship."';
let myFont = 0;
let position = 0;
let lastMilsec = 0;
let typeSound = 0;
let h = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  h = 900;
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
  
  if (millis() > lastMilsec + 95) {
		position = position + 1;
		lastMilsec = millis();
	}
  
  if (position > 374) {
    typeSound.stop();
  } else {
      typeSound.playMode('untilDone');
      typeSound.play();
  }
}

function preload() {
  typeSound = loadSound('Typing.mp3');
  myFont = loadFont('CourierPrime-Bold.ttf');
}