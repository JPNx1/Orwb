let angle = 30;
let angle1 = 10;
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    img = loadImage("img/xd.gif");
    img1 = loadImage("img/xd.jpg");

}

function draw() {

boi(img);


}

function boi(img){
    background(72);

    push();

    rotateY(angle*0.1);
    rotateX(angle*0.1);
    rotateZ(angle*0.1);

    texture(img);
    torus(100, 100, 100, 100);
    pop();

    angle+=0.05;

}

function boi1(img1){
    background(72);

    push();

    rotateY(angle*0.1);
    rotateX(angle*0.1);
    rotateZ(angle*0.1);

    texture(img1);
    box(100, 100, 200, 200);
    pop();

    angle+=0.05;
}

