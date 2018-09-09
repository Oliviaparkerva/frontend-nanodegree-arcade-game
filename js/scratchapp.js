@@ -0,0 +1,47 @@
//From scratch clean code along file Javascript file for game function
//https://matthewcranford.com/arcade-game-walkthrough-part-1-starter-code-breakdown/

const Enemy = function(){
	//x position
	//y position
	
	//image
		this.sprite= 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt){
	//Use provided code to automate the enemy sprites
	// You should multiply any movement by the dt parameter which will ensure the game runs at the same speed for all computers.
	/*Forward March function{
			if enemy is not passed right boundary{
				Move forward
				increment x by speed * dt
			}else
				Reset postion of enemy to left boundary
			*/
};
	
Enemy.prototype.render = function(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player class, update, render,handleInput method, reset for collision of win. pick a character or find a way to let user choose character

//Player Class
	//Constructor Function
		//Properties
			// x position on the board
			// y position on the board
			//image of hero sprite
			/*const Player = function(){
				this.sprite= 'images/char-cat-girl.png';
			};*/
		//Methods
			/*Player.prototype.update = function(dt){
			};*/
				/*Check for collision function{
					Are player and enemies x and y the same?
				}*/
				/*Check for win function{
					Has the player reached the top of the screen?	
				}*/
			/*Player.prototype.render = function(){ ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
			};*/			
			//how does the player respond to the manual input from the player? write handleInput() method
			//Reset player for win or collision
				//Set x and y to starting x and y values
	
//instatiate (create) your objects. 
//Place all enemy objects in an array called allEnemies
//Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this. Find keycodes here http://keycode.info/
//https://api.jquery.com/keyup/
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
