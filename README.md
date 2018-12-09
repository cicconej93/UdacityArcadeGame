# UdacityArcadeGame
## The Adventures of PigTail Boy and the March of the Beetle Hoarde

### Description
This is a simple 'frogger'-like game, built off of the resources provided by Udacity's FEND.
The main purpose of this game/app was to pracice OOP in JS. I made attempts to utilize ES6 class syntax.
The game engine and image resources were provided by Udacity, the actual game logic was added by myself.

The game works by loading an array of enemies and rendering them along 3 different points on the y-axis.
The speed of the enemies is variable, and is readjusted each time the enemy is re-loaded to the left of the screen.


### Objective
The main objective of the game is to make it across the street while avoiding the march of beetles.

Players will use the directional keypads to move the player. 
Contact with an enemy beetle results in a game-lose state, making it to the blue water results in a win-game state.

### Game behaviors
- On game-win, 3 new enemies will be pushed to the enemy stack and rendered. Speeds of enemies will remain variable.

- On game-lose, 3 enemies will be popped from the enemy stack, if there are at least 6 enemies currently on the stack.

### To Play the Game
In order to play the game, you will need to download the project's repository to your local machine. 
Then, you can initiate the game by launching the "index.html" file with a browser, such as Google Chrome.
Once in your browser, you begin playing the game using the directional keys to move your character.