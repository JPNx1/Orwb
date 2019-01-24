let orwb;
let gravity = 5;

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
    move();
    orwb.applyGravity();

}

function move() {
    if(keyIsDown(LEFT_ARROW)){
        if(orwb.x >= 36){
            orwb.goleft();
        }

    }
    if(keyIsDown(RIGHT_ARROW)){
        if(orwb.x <= window.width - 35){
            orwb.goright();
        }

    }
    if(keyIsDown(32)){
        orwb.jump();
    }
    
}

function keyPressed() {
    if(keyCode === 32 ){
        //orwb.jump();
    }
    
}


class Orwb {
    constructor() {
        this.x = 0;
        this.y = 704;
        this.xOffset = 32;
        this.yOffset = 32;
        this.y = this.y - this.yOffset;
        this.x = this.x + this.xOffset;
        this.speed = 0;
    }

    applyGravity(){
        if(this.y <= window.height - 35){
            this.y = this.y + gravity;
        }

    }

    goleft() {
        this.x -= 5;
        print("Orwb moved left" + this.x);
    }

    goright() {
        this.x += 5;
        print("Orwb moved right" + this.x);
    }

    jump() {
        print("jump");
        this.y = this.y - gravity;
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