// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h;          // Location and size
var offsetX, offsetY;    // Mouseclick offset

var img;

var canvas // pushing it with z-index

function preload(){
    mirror = loadImage("img/01_Pride/Mirror.png")
    gold = loadImage("img/01_Pride/Cut.png")
    //img = loadImage("Images/img_471361.png")
    middle = loadImage("img/01_Pride/Middle.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0,0)
    canvas.style('z-index', '-1',)

  
  // Starting location
  x = 1300;
  y = 250;
  // Dimensions
  w = 264;
  h = 415;
}

function draw() {
  background(255, 255, 255);
   
  //ellipse(x, y-250, 400)
  
  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } 
  else {
    rollover = false;
  }
  
  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(0);
  // Different fill based on state
  if (dragging) {
    fill (50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }

  image(gold, x, y-85, 200, 200)
  //Mirror(x, y, w, h);
  imageMode(CORNER)
  image(middle, 0, 0, windowWidth, windowHeight)
  imageMode(CENTER)
  image(mirror, x, y, w, h)
}

function mousePressed() {
    // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}

                             // INACTIVITY TIMEOUT = https://stackoverflow.com/questions/667555/how-to-detect-idle-time-in-javascript-elegantly// 

function idleLogout() {
  var t;
  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer;  // catches touchscreen presses as well      
  window.ontouchstart = resetTimer; // catches touchscreen swipes as well 
  window.onclick = resetTimer;      // catches touchpad clicks as well
  window.onkeypress = resetTimer;   
  window.addEventListener('scroll', resetTimer, true); // improved; see comments

  function yourFunction() {
      // your function for too long inactivity goes here
      window.location.href = 'index.html';
  }

  function resetTimer() {
      clearTimeout(t);
      t = setTimeout(yourFunction, 180000);  // time is in milliseconds 1000 = 1sec 180000 = 3min
  }
}
idleLogout();