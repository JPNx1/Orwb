let height = 0;
let up = true;
let angle = 30;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    img = loadImage("img/xd.gif");



}

function draw() {
    fullscreen(true);

    if (up) {
        height += 5;
        if (height === 200) {
            up = false;
        }
    } else {
        height -= 5;

        if (height === -200) {
            up = true;
        }
    }
    boi(img, height);



}

function boi(img, height) {
    background(255, 0, 255);
    push();
    translate(0, -height, 0);
    rotateY(angle);
    rotateX(angle);
    rotateZ(angle);
    texture(img);
    box(50, 50, 50, 50);
    pop();


    push();
    translate(-height, 0, 0);
    rotateY(angle);
    rotateX(angle);
    rotateZ(angle);
    texture(img);
    box(50, 50, 50, 50);
    pop();


    push();
    translate(-height, -height, 0);
    rotateY(angle);
    rotateX(angle);
    rotateZ(angle);
    texture(img);
    box(50, 50, 50, 50);
    pop();


    push();
    translate(height, height, 0);
    rotateY(angle);
    rotateX(angle);
    rotateZ(angle);
    texture(img);
    box(50, 50, 50, 50);
    pop();

    push();
    translate(height, 0, 0);
    rotateY(angle);
    rotateX(angle);
    rotateZ(angle);
    texture(img);
    box(50, 50, 50, 50);
    pop();

    push();
    translate(0, height, 0);
    rotateY(angle);
    rotateX(angle);
    rotateZ(angle);
    texture(img);
    box(50, 50, 50, 50);
    pop();


    push();
    translate(height, -height, 0);
    rotateY(angle);
    rotateX(angle);
    rotateZ(angle);
    texture(img);
    box(50, 50, 50, 50);
    pop();

    push();
    translate(-height, height, 0);
    rotateY(angle);
    rotateX(angle);
    rotateZ(angle);
    texture(img);
    box(50, 50, 50, 50);
    pop();

    push();

    rotateY(angle);

    texture(img);
    cylinder(100, 100, 100, 100);
    //OWO
    pop();


    angle += 0.05;

    print("fgt"); //TODO succ
}



