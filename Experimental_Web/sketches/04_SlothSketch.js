
var imgNum = 0;
var prevImg = 1;

function preload() {
   
    img1 = loadImage('img/04_Sloth/img1.png');
    img2 = loadImage('img/04_Sloth/img2.png');
    img3 = loadImage('img/04_Sloth/img3.png');
    img4 = loadImage('img/04_Sloth/img4.png');

    img7 = loadImage('img/04_Sloth/Test1.png')
    img8 = loadImage('img/04_Sloth/Test2.png')
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0,0)
    canvas.style('z-index', '-1',)
    background(255); 
}

function draw() {
    imageMode(CENTER)
    
    if (mouseIsPressed) {
        image(img7, mouseX, mouseY, 200, 200) 
    }else {
        image(img8, mouseX, mouseY, 200, 200) 
      }
    
}



function mouseClicked() {
  
    imgNum = int(random(1, 5));

    if (prevImg == imgNum) {
        imgNum = int(random(1, 5));
    }

   
    else {
        
        if (imgNum == 1) {
            background(255,255,255);
            imageMode(CORNER);
            image(img1, 0, 0, windowWidth, windowHeight);
            prevImg = imgNum;  
        }
        
        if (imgNum == 2) {
            background(255,255,255);
            imageMode(CORNER);
            image(img2, 0, 0, windowWidth, windowHeight);
            prevImg = imgNum;    
        }

  
        if (imgNum == 3) {
            background(255,255,255);
            imageMode(CORNER);
            image(img3,  0, 0, windowWidth, windowHeight);
            prevImg = imgNum;
        }
        
        if (imgNum == 4) {
            background(255,255,255);
            imageMode(CORNER);
            image(img4,  0, 0, windowWidth, windowHeight);
            prevImg = imgNum;
        }
    }
}

