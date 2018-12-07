const topBoard = 0;
const botBoard = 225;


//The game, controls win conditions
class Game {

    constructor(player){
        this.topBoard = topBoard;
        this.botBoard = botBoard;
        this.ourPlayer = player;
        this.gameCondition = false;
        this.winLoseScreen = document.querySelector(".winLoseScreen");
        this.plyBtn = document.querySelector(".plyBtn");

    }

    update(){
        this.checkWin();

    }

    checkWin(){
        if(this.ourPlayer.y == this.topBoard && this.gameCondition == false){
            console.log("Win condition met");
            this.gameCondition = true;
            //add pop up modal to tell player they won
            //gray out and disable game in background
            //give option to reset game
            this.gameWon();
            this.ourPlayer.reset();


        }
    }

    //display modal for winning
    gameWon(){
        let winNotify = document.querySelector(".winLoseNotification");
        winNotify.textContent = "You Win!";
        this.winLoseScreen.classList.add("open");
     };
    
     //display the modal for losing
    //  gameLose(){
    //      let loseNotify = document.querySelector(".winLoseNotification");
    //      let losingTime = document.querySelector(".winTime");
    //      loseNotify.textContent = "Sorry, you lose this time!";
    //      losingTime.textContent = "It took you " + timer.textContent + " to... lose";
    //      winLoseScreen.classList.add("open");
    //  };
}


// Enemies our player must avoid
class Enemy {

    constructor(x, y, speed = Math.floor(Math.random() * 400) + 100){
        this.sprite = 'images/enemy-bug.png'
        this.x = x;
        this.y = y;
        this.speed = speed;

    }

    update(dt){
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        if(this.x > 500) {
            this.x = -100;
            this.speed = Math.floor(Math.random() * 400) + 100;
        } else this.x = this.x + this.speed * dt;
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}

//our player class
class Player {

    constructor(){
        //introduce enum to randomly select player sprite?
        this.sprite = 'images/char-boy.png';
        this.isCollided = false;
        this.x = 300;
        this.y = 300;
    }


    update() {
        //only check collision if in danger zones
        if (this.y >= topBoard && this.y <= botBoard)
            this.checkCollision();
    }

    //checks to see if enemies have collided with player
    checkCollision(){
        //using arrow function here to 
        //retain reference of this to the 
        //player object, cool!
        allEnemies.forEach((enemy) => {
            if (enemy.y == this.y && 
                ((enemy.x >= this.x - 35) && (enemy.x <= this.x + 35)))
            this.reset();
        });
    }

    reset(){
        this.x = 300;
        this.y = 300;
    }

    //draws the sprite to the screen at the specified location
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    //takes user input
    //might change this later, but works OK as is.
    handleInput(input){

        switch (input) {
            case 'left':
                if (this.x > 25)
                    this.x = this.x - 100;
                break;
            case 'right':
                if (this.x < 375)
                    this.x = this.x + 100;
                break;
            case 'up':
                if (this.y > 25)
                    this.y = this.y - 75;                             
                break;
            case 'down':
                if (this.y < 375)
                    this.y = this.y + 75;
                break;
            default:
                console.log(wat);
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let newEnemy1 = new Enemy(1, 150);
let newEnemy2 = new Enemy(1, 75);
let newEnemy3 = new Enemy(1, 225);

let allEnemies = [newEnemy1, newEnemy2, newEnemy3];
let player = new Player();
let game = new Game(player);


// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
