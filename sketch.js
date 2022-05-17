
let img;
let cnv;

function preload() {
    img = loadImage('assets/IMG_6423.jpg');
}

//run once
function setup() {
    createCanvas(img.width, img.height);
    //print(img.width, img.height)
    let newCanvasX = (windowWidth - img.width)/2;
    let newCanvasY = (windowHeight - img.height)/2;
    cnv.position(newCanvasX, newCanvasY);
}

//loops
function draw() {
    background(220);
}