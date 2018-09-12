//From scratch clean code along file Javascript file for game function
//https://matthewcranford.com/arcade-game-walkthrough-part-1-starter-code-breakdown/

//Enemy.prototype.update = function(dt){
//	//Use provided code to automate the enemy sprites
//	// You should multiply any movement by the dt parameter which will ensure the game runs at the same speed for all computers.
//	/*Forward March function{
//			if enemy is not passed right boundary{
//				Move forward
//				increment x by speed * dt
//			}else
//				Reset postion of enemy to left boundary
//			*/
//};
//	

class Enemy{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.sprite = 'images/enemy-bug.png';
	};
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	};
//	update(dt){
//		
//	}
}




//Player class, update, render,handleInput method, reset for collision of win. pick a character or find a way to let user choose character
class Hero{
	constructor(){
		this.x = 202; // board width divid 2 sub half sprite width to center
		this.y = 445;//606-117 adjust for emoty space to get where you want sprites base
		this.sprite = 'images/char-boy.png';
	}
	//update heros position based on key input
	//does not need prototype because there is only one player, see drawing method provided for enemy, this grabs the player sprite and location which is initially set to 0,0 https://is.gd/JA9Zxy
	//how do I keep plater conifned to board? disallow key press at certain coordinate?
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);		
	};
	
	
	
	
	
	//how does our her respond to the key presses from the player? write handleInput() method	left37,up38,right39,down40, how big is each square, how far to advance with each key stroke?y 0-404(505-101), x 0-435(606-171)
	handleInput(input){
		if(this.x > 0 && input == 'left'){
			this.x -= 20;
		}
			else if (this.x < 403 && input == 'right'){
				this.x += 20;
			};
		if(this.y > 0 && input == 'up'){
			this.y -= 20;
		}
			else if (this.y < 434 && input == 'down'){
				this.y += 20;
			};
		
	};
}
//instatiate (create) your objects. 
const player = new Hero();
const bug1 = new Enemy();
const allEnemies = [];
allEnemies.push(bug1);
//Player Class
	//Constructor Function
		//Properties
			// x position on the board
			// y position on the board
			//image of hero sprite
				//this.sprite= 'images/char-cat-girl.png';
		//Methods
			/*Player.prototype.update = function(dt){
			};*/
				/*Check for collision function{
					Are player and enemies x and y the same?
				}*/
				/*Check for win function{
					Has the player reached the top of the screen?	
				}*/
						
			//Reset player for win or collision
				//Set x and y to starting x and y values

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
