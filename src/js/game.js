let orwb;

//setup function
function setup() {
    let canvas = createCanvas(704, 704);
    //canvas.parent('p5');
    canvas.parent('p5');
    background(color(0, 0, 0));
    orwb = new Orwb();
    print(orwb.x, orwb.y);
}

//draw function
function draw() {
    background(0);
    orwb.show1();
}

function keyPressed() {
    switch (keyCode) {
        case LEFT_ARROW:
            while (keyIsDown(LEFT_ARROW)) {
                orwb.goleft();
            }

            break;
        case RIGHT_ARROW:
            while (keyIsDown(LEFT_ARROW)) {
                orwb.goright();
            }
            orwb.goright();
            break;
    }
}


class Orwb {
    constructor() {
        this.x = 100;
        this.y = 100;
    }

    goleft() {
        this.x = this.x - 5;
    }

    goright() {
        this.x = this.x + 5;
    }

    jump() {

    }

    show1() {
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