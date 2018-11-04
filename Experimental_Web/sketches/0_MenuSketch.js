var hintImage, skyImage, stars = []; 
var video
var canvas
var vScale = 8

function setup() {
    createCanvas(windowWidth, windowHeight)
    canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0,0)
    canvas.style('z-index', '-1',)
    pixelDensity(1)
    video = createCapture(VIDEO)
    video.size(width/vScale, height/vScale)

    skyImage = loadImage(
        "img/00_Index/BG.png"
      );
    
      background(51)
}


function draw() {
    image(skyImage, 0, 0,windowWidth,windowHeight);


    video.loadPixels()
    loadPixels()
    for (var y = 0; y < video.height; y++){
        for (var x = 0; x < video.width; x++){ 
            var index = (video.width - x + 1 + ( y * video.width))*4
            var r = video.pixels[index+0]
            var g = video.pixels[index+1]
            var b = video.pixels[index+2]

            var bright = (g)/10

            var w = map(bright,255, 0, 0, vScale)

            noStroke()
            fill(bright)
            rectMode(CENTER)
            rect( x*w, y*w, w, w)

            

            // pixels[index] = bright
            // pixels[index+1] = bright
            // pixels[index+2] = bright
            // pixels[index+3] = 255
        }
    }

    //updatePixels()   
}