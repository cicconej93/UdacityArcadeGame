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
        if (this.y >= 75 && this.y <= 225)
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
var newEnemy1 = new Enemy(1, 150);
var newEnemy2 = new Enemy(1, 75);
var newEnemy3 = new Enemy(1, 225);

let allEnemies = [newEnemy1, newEnemy2, newEnemy3];
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//player.addEventListener()
