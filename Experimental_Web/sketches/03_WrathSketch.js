var hintImage, skyImage, stars = []; 
var canvas 
function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0,0)
    canvas.style('z-index', '-5',)

  //noCursor();   
  noStroke();   
  
  hintImage = loadImage(
    "img/TYPE-02.png"
  );
  skyImage = loadImage(
    "img/03_Wrath/BG.png"
  );
  background(255)
}

function draw() {
 
  image(skyImage, 0, 0,windowWidth,windowHeight);
  
  var position = createVector(mouseX, mouseY);
  
  //(255, 192, 0);
 // ellipse(position.x, position.y, 8, 8);  

  if (mouseIsPressed) {
    var target = findPixel();    
    var star = new Star(position, target);

    stars.push(star);
    if (stars.length > 2000) stars.shift();    
  }  
  
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].draw();
  }   

  

}

function findPixel() {
  var x, y;
  for (var i = 0; i < 15; i++) {
    x = floor(random(windowWidth));
    y = floor(random(windowHeight));
    
    if (red(hintImage.get(x, y)) < 255) break;
  }
  return createVector(x, y);
}

function Star(position, target) {
  this.position = position;
  this.target = target;
  this.diameter = random(5, 10);
}

Star.prototype.update = function() {   
  this.position = p5.Vector.lerp(
    this.position,
    this.target,
    0.04
  );
};

Star.prototype.draw = function() { 
  var alpha = noise(
    this.target.x,
    this.target.y,
    //millis() / 1000.0
  );
  
  fill(255, 0, 0, alpha * 255);
  
  ellipse(
    this.position.x, this.position.y,
    this.diameter, this.diameter
  );
};