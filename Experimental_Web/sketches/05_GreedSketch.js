
// let N
// var vid;
// var theta = 0;

// function preload() {
//     N = loadModel('obj/N.obj')   
// }


// function setup() {
//     createCanvas(710, 400,  WEBGL)
//     vid = createVideo(["1.mp4"]);
//     vid.loop();
//     vid.hide();
// }

// function draw() {

//     push();
//     rotateZ(theta * mouseX * 0.001);
//     rotateX(theta * mouseX * 0.001);
//     rotateY(theta * mouseX * 0.001);
//     texture(vid);
//     model(N)
//     pop();
//     translate(440,0,0); 
// }

var canvas
var bg;
let N
var img;
var vid;
var theta = 0;
var pos = 25

function preload() {
    N = loadModel('obj/TV.obj') 
}

function setup(){
 canvas = createCanvas(windowWidth, windowHeight, WEBGL);
 canvas.position(0,0);
 canvas.style('z-index','-3')
 bg = loadImage("img/05_Greed/bg.png");

  img = loadImage("assets/cat.jpg");
  vid = createVideo(["vid/2.mp4"]);
  vid.loop();
  vid.hide();
}

function draw(){
  background(0, 0, 0);
  translate(0,0,0);
  //TV
  push();
    rotateZ( mouseY * 0.001);
    rotateX( mouseX * 0.001);
    rotateY( mouseY * 0.001);
    //pass image as texture
    texture(vid);
    model(N)
  pop();

     //Cylinders
    push();
    translate(-2900, 80, -2500);
    push();
    rotateY(mouseY/8);
    texture(bg);
    cylinder(800, 4000);
    pop();
    
    push();
    translate(800, 20, -1000);
    push();
    rotateY(mouseY/8);
    texture(bg);
    cylinder(800, 4000);
    pop();

    push();
    translate(500, 50, -1000);
    push();
    rotateY(mouseY/8);
    texture(bg);
    cylinder(800,4000);
    pop();

    push();
    translate(3000, 50, -100);
    push();
    rotateY(mouseY/8);
    texture(bg);
    cylinder(800,4000);
    pop();

    push();
    translate(1000, 20, 1000);
    push();
    rotateY(mouseY/8);
    texture(bg);
    cylinder(800, 4500);
    pop();

    push();
    translate(1000, 20, 1000);
    push();
    rotateY(mouseY/8);
    texture(bg);
    cylinder(800, 4500);
    pop();


   
}

function mouseWheel(event) {
    print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  //return false;

}
