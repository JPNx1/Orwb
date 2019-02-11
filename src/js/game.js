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
    canvas.parent('p5');

    //sets background black
    background(color(0, 0, 0));

    //creates screen objects
    game = new Game();
    welcomeScreen = new WelcomeScreen();
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
            game.start();
            break;
        case 2:
            game.pause();
            break;
        case 3:
            game.resume();
            break;
        case 4:
            game.end();
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

class WelcomeScreen{
    constructor(){
        this.img = loadImage("img/orwb_static0.png");
        this.text1 = "Press any key to start";
    }

    show(){
        background(color(0));
        image(img, 0, 0);

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

        this.hitboxLeft = this.x;
        this.hitboxRight = this.x + 64;
        this.hitboxTop = this.y;
        this.hitboxBottom = this.y + 64;


        this.xOffset = 32;
        this.yOffset = 32;
        this.y = this.y - this.yOffset;
        this.x = this.x + this.xOffset;

        //variables for jumping
        this.isJumping = false;
        this.yVelocity = 0;
        this.ground = 0;
        this.onGround = true;

        //collision var
        this.hit = false;
    }

    //checks if orwb and the box are colliding. todo chow to implement it for every single box in this game
    detectCollision() {
        this.hit = collideRectCircle(box.posX, box.posY, box.width, box.width, this.x, this.y, 64, 64);
    }

    //applies gravity to orwb
    applyGravity() {
        if (this.y <= window.height - 35) {
            if (!this.onGround) {
                this.y = this.y + gravity;
            }
        }
    }

    //function to change position to the left
    goleft() {
        this.x -= this.speed;
    }

    //function to change position to the right
    goright() {
        this.x += this.speed;
    }

    //function to make orwb jump
    jump() {
        this.ground = this.y;

        if (this.isJumping === false) {
            this.yVelocity = -28;
            this.isJumping = true;
        }
    }

    //draws orwb at his relative position x and y
    show1() {
        //yellow base circle for body
        stroke(0);
        fill(color(255, 212, 0));
        ellipse(this.x, this.y, 64, 64);


        //black circles for eyes
        fill(color(0, 0, 0));
        ellipse(this.x - 11, this.y - 10, 20, 20);
        ellipse(this.x + 11, this.y - 10, 20, 20);

        //white circles for reflection in eyes
        fill(color(255, 255, 255));
        ellipse(this.x - 5, this.y - 15, 5, 5);
        ellipse(this.x + 15, this.y - 15, 5, 5);

    }

    //handles the move stuff
    move() {
        //loads of problems with collision detection in jump
        //todo learn how to proper collision detection and physics
        if (keyIsDown(LEFT_ARROW)) {
            this.detectCollision();

            if (orwb.x > 35 && !this.hit) {
                orwb.goleft();
            }

            if (this.hit) {
                orwb.goright();
            }
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.detectCollision();

            if (orwb.x < window.width - 33 && !this.hit) {
                orwb.goright();
            }

            if (this.hit) {
                orwb.goleft();
            }
        }


        //look why this isn't working how it should be working
        if (this.isJumping) {
            this.detectCollision();
            if (!this.hit) {
                this.yVelocity += gravity;
                this.y += orwb.yVelocity;
            }

            if (this.y > this.ground) {
                    this.y = this.ground;
                    this.yVelocity = 0;
                    this.isJumping = false;
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
