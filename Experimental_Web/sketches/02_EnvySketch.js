
var u;
var l;
var a;
var mods = [];
var x;
var y;
var count;

var img; 

var canvas


function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0,0)
  canvas.style('z-index', '-1',)
  img = loadImage('img/02_Envy/Cubic.png'); 

  //u = int(width/15);
  u = 40;
  l = 40;
  var highCount = height/40;
  var wideCount = width/40;
  count = int(highCount * wideCount);
  
  var index = 0;
  for (var xc = 0; xc < wideCount; xc++) {
    for (var yc = 0; yc < highCount; yc++) {
      mods[index++] = new Module(int(xc)*u,int(yc)*u);
    }
   }
   
}


function draw() {
  
  if (mouseIsPressed) {
    background(0);
    stroke(0);
    
    
    //strokeWeight(15);
    noStroke();
    translate(20, 20);
    
    for (var i = 0; i <= count; i++) {
      mods[i].update();
      mods[i].draw1();
      mods[i].draw2();
    }

    image(img, -18, -15, windowWidth, windowHeight)  
     
  } else {
    background(0);
    stroke(255,163,163);
  }
  
 

  
}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;

}

Module.prototype.update = function() {
    this.a = atan2(mouseY-this.y, mouseX-this.x);
}

//EYES
Module.prototype.draw1 = function() {
  push();
  translate(this.x, this.y);
  fill(255);
  arc(0, -10, l, l, 1, PI-0.5);
  arc(0, 10, l, l, PI+0.5, -1);
  pop();
}


Module.prototype.draw2 = function() {
  push();
  translate(this.x, this.y);
  rotate(this.a);
  noStroke();
  //ellipse(0, 0, l, l);
  fill(0);
  ellipse(8, 0, l/2, l/2);
  
  fill(255);
  ellipse(8, 0, l/8, l/8);
  
  //line(-l,0,l,0);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}