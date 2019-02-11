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
    canvas.parent('canvas');

    //sets background black
    background(color(0, 0, 0));

    //creates screen objects
    game = new Game();
    startScreen = new StartScreen();
    pauseScreen = new PauseScreen();
    gameOverScreen = new GameOverScreen();
    endScreen = new EndScreen();


    //check which state the game has
    switch (game.state) {
        case 0:
            game.start();
            break;
        case 1:
            game.running();
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

    start() {
        startScreen.show();
    }

    running() {

    }

    pause() {

    }

    resume() {

    }

    end() {

    }
}


class StartScreen {
    constructor() {
        this.x = width / 2;
        this.y = (height / 2) - 100;
        this.text = "Press any key to start...";
    }

    show() {
        stroke(0);
        fill(color(255, 212, 0));
        ellipse(this.x, this.y, 256, 256);


        //black circles for eyes
        fill(color(0, 0, 0));
        ellipse(this.x - 44, this.y - 40, 80, 80);
        ellipse(this.x + 44, this.y - 40, 80, 80);

        //white circles for reflection in eyes
        fill(color(255, 255, 255));
        ellipse(this.x - 20, this.y - 60, 20, 20);
        ellipse(this.x + 60, this.y - 60, 20, 20);
        print("showiung img");

        textSize(30);
        fill(color(255, 212, 0));
        textAlign(CENTER);
        text(this.text, this.x, this.y + 200);
    }

    ifanykey() {

    }

}

class PauseScreen {
    constructor() {

    }
}

class GameOverScreen {
    constructor() {

    }
}

class EndScreen {
    constructor() {

    }
}


class Level1 {

}

class Level2 {

}

class Level3 {

}
