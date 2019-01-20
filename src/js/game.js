let orwb;
function setup() {
    createCanvas(700, 700);
    orwb = new Orwb();
    print(orwb.x, orwb.y);
}

function draw() {
    print("draw");
    background(0);

    orwb.move();
    orwb.show1();
}

class Orwb {
    constructor() {
        this.x = 100;
        this.y = 100;
    }

    move() {
        this.x = this.x + 5;
        this.y = this.y + 5;
    }

    show1(){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24)

    }
}