let orwb;
function setup() {
    createCanvas(700, 700);
    orwb = new Orwb();
    print(orwb.x, orwb.y);
}

function draw() {
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

    }

    show1(){
        fill(color(255, 212, 0));
        ellipse(this.x, this.y, 64, 64);

        fill(color(0, 0, 0));

        ellipse(this.x - 11, this.y - 10, 20, 20);
        ellipse(this.x + 11, this.y - 10, 20, 20);

        fill(color(255, 255, 255));

        ellipse(this.x - 5, this.y - 15, 5, 5);
        ellipse(this.x + 15, this.y - 15, 5, 5);


    }
}