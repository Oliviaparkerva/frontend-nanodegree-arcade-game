frontend-nanodegree-arcade-game
===============================

Front End Frogger ReadME
Enemy
	-Did not use prototypes because I dont have that many enemies. 
	-Enemies created through and Enemy class constructor function, creates instances of enemies with location and speed as properties to add variety to enemies.
	-Update the enemy's position. If the enemy is inside the board (<505) then increment the x by whatever the set speed is and multiply by the dt to create consistent movement. If the enemy moves off the board restart it off the board to the left based on width of sprite (-171)
	-Render the enemy using provided function.

Hero
	-If you want to use a different sprite it must be specified in the load list of the resources.js file or it will not be available
	-The constructor function creates your hero sprite and specifies its begining position. Use the size of the board (505x606)and the size of each block (101x171) to place your player accordingly
			-202 is the board width divided in half minus half the width of the sprite; 445 is the board height minus the sprite height adjusted so the sprites base is where you want it.
	-The player requires constructor, render, update and also a handler input to deal with moving based on key strokes
		-Using keyup requires a key press for every movement, keydown as an even listener allows for continuous motion
	-update:update grabs the coordinates for the player and the enemy.
		-This is also where the collision is checked. The game is continuously reloading the board, player and enemy. Using the allEnemies array check the coordinates of each bug sprite. If it is within a 68 px margin(101+171 / 4= 68) of the center of the players sprite it is a collision. Use Math.abs to avoid negative numbers. A collision resets the players position.
	-handleInput function: Using the strings associated with keycodes move the player depending on where the sprite is. If x is on the board move left and right, same idea with y. Must subtract size of the sprite as the coordinates are based on the top left of the sprite so if capped at 505 it'd allow the sprite to go off the board up to that point. 0-404(505-101), x 0-435(606-171)
	-Modal copied from old project see tutorial to make modal in useful links section below

Useful links:
		-Walkthrough for arcade game build https://is.gd/zprBAo
		-When to use prototypes https://is.gd/JA9Zxy  
		-Keycodes http://keycode.info/
		-Keyup https://api.jquery.com/keyup/	
		-For...of to iterate through array of enemies https://is.gd/3Cbz9N
		-How to make a modal https://is.gd/qhKpcL
		-Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.
		-For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

How to play
	Your goal is to reach the row of stones before the river ahead. Dodge enemies and proceed forward across the game board by using the arrow keys. Running into an enemy will cause your character to be sent back to the begining of the board to try all over again. When you reach the  river winner winner. Will you play again?
Bug Fixes


