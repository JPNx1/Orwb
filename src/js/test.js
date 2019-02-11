let game;
let orwb;
let startScreen;
let pauseScreen;
let gameOverScreen;
let endScreen;
let gravity = 2.3;


//setup function
function setup() {
    //creates canvas as object
    let canvas = createCanvas(705, 705);

    //framerate
    frameRate(60);

    //relocates canvas to the p5 html div
    canvas.parent('container');

    //sets background black
    background(color(0, 0, 0));

    //creates screen objects
    game = new Game();
    startScreen = new StartScreen();
    pauseScreen = new PauseScreen();
    gameOverScreen = new GameOverScreen();
    endScreen = new EndScreen();

    //creates an object orwb
    orwb = new Orwb(0, 11);

    //ground
    box = new Box(3, 10);


    //check which state the game has
    switch (game.state) {
        case 0:
            game.welcome();
            break;
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:
            break;
    }
}

//draw function (repeated)
function draw() {
    background(0);
    game.grid();
    box.show();
    orwb.show1();
    orwb.applyGravity();
    orwb.move();


    if (orwb.isJumping) {
        orwb.yVelocity += gravity;
        orwb.y += orwb.yVelocity;

        if (orwb.y > orwb.ground) {
            orwb.y = orwb.ground;
            orwb.yVelocity = 0;
            orwb.isJumping = false;
        }
    }
}

//


//checks if a key is pressed
function keyPressed() {
    if (keyCode === 32 && !orwb.isJumping) {
        orwb.jump();
    }
}


class Game {
    constructor() {
        this.state = 0;
        this.gridX = 11;
        this.gridY = 11;
        this.squareX = ((width - 1) / this.gridX);
        this.squareY = ((width - 1) / this.gridY);
    }

    grid() {

        for (let rows = 0; rows < this.gridX; rows++) {
            for (let colums = 0; colums < this.gridY; colums++) {
                fill(255, 255, 255, 100);

                rect(rows * this.squareX, colums * this.squareY, width / this.gridX, width / this.gridX);

            }
        }
    }

    welcome() {

    }

    start() {

    }

    pause() {

    }

    resume() {

    }

    end() {

    }
}

class StartScreen {

}

class PauseScreen {

}

class GameOverScreen {

}

class EndScreen {

}

//blueprint for the object ORWB(player character)
class Orwb {
    //construction variables
    constructor(x, y) {
        //position variables
        this.speed = 8;
        this.x = game.squareX * x;
        this.y = game.squareY * y;
        this.hit = false;


        this.xOffset = 32;
        this.yOffset = 32;
        this.y = this.y - this.yOffset;
        this.x = this.x + this.xOffset;

        //hitbox var
        this.hitboxLength = 45;
        this.hitboxOffset = 22.627;
        print(this.hitboxOffset);


        //variables for jumping
        this.isJumping = false;
        this.yVelocity = 0;
        this.ground = 0;
        this.onGround = true;
    }

    //applies gravity to orwb
    applyGravity() {
        this.detectCollision();
        if (this.y <= window.height - 35) {
            if (!this.onGround) {
                this.y = this.y + gravity;
            }
        }
    }

    //function to make orwb jump
    //todo figure out how the fuck this works for jumps, maybe need to stafrt all over again qwq
    jump() {
        this.detectCollision();
        if (this.hit) {
            this.ground = box.posY;
        } else {
            this.ground = this.y;

        }

        if (this.isJumping === false) {
            this.yVelocity = -28;
            this.isJumping = true;
        }
    }


    //function to change position to the left
    goleft() {
        this.x -= this.speed;
        print("Orwb moved left" + this.x);
    }

    //function to change position to the right
    goright() {
        this.x += this.speed;

        print("Orwb moved right" + this.x);
    }


    //draws orwb at his relative position x and y
    show1() {

        //hitbox
        this.hitboxX = this.x - this.hitboxOffset;
        this.hitboxY = this.y - this.hitboxOffset;


        fill(color(0, 0, 0));
        ellipse(this.x, this.y, 64, 64);
    }

    //works
    detectCollision() {
        this.hit = collideRectCircle(box.posX, box.posY, 64, 64, this.x, this.y, 64, 64);
        print("box: " + box.posX, box.posY);
    }

    move() {
        //loads of problems with collision detection in jump
        //todo learn how to proper collision detection and physics


        if (keyIsDown(LEFT_ARROW)) {
            this.detectCollision();

            if (this.hit) {
                this.x += 10;
            }
            if (this.x > 35 && !this.hit) {

                this.goleft();
            }
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.detectCollision();
            if (this.hit) {
                this.x -= 10;
            }

            if (this.x < window.width - 33 && !this.hit) {
                this.goright();

            }
        }
    }
}

class Box {
    constructor(x, y) {
        this.width = 64;
        this.posX = game.squareX * x;
        this.posY = game.squareY * y;
        this.color = color(255, 255, 255);
        print("ground: " + x, y, this.posX, this.posY);
    }

    show() {

        fill(this.color);
        rect(this.posX, this.posY, this.width, this.width);

    }

    returnY() {
        return this.posY;
    }

}
