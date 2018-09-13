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
//			increment speed for variation , use math for randomization if poosible
//};
//	




class Enemy{
	constructor(x,y,speed){
		this.x = x;
		this.y = y;
		this.sprite = 'images/enemy-bug.png';
		this.speed= speed;
		
	};
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	};
//make it so bug moves by incrementing x by desired speed, reset bug offscreen so it looks like its walking bacl on instrad of spawning into square one, set right boundary off screen so bug fully disapears, can I randomize the origins and speed to make the game harder each time, look back at matching game.
	update(dt){
		if(this.x < 505){
			this.x += this.speed * dt;
		}else{
			this.x = -171;
		}
	};
}




//Player class, update, render,handleInput method, reset for collision of win. pick a character or find a way to let user choose character
class Hero{
	constructor(){
		this.x = 202; // board width divid 2 sub half sprite width to center
		this.y = 445;//606-117 adjust for emoty space to get where you want sprites base
		this.sprite = 'images/char-cat-girl.png';
	}
	//update heros position based on key input
	//does not need prototype because there is only one player, see drawing method provided for enemy, this grabs the player sprite and location which is initially set to 0,0 https://is.gd/JA9Zxy
	//how do I keep plater conifned to board? disallow key press at certain coordinate?
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);		
	};
//	https://is.gd/3Dwp1L  check for collision by matching absolute values of x and y for player and enemies including a type of margin for error that accounts for the size of the sprite. Add a modal for game over and reset the board.use setTimeout to return player to starting position
	update(){
		for(let bug of allEnemies){
			var marg =70;
			if ((Math.abs(this.y - bug.y) <= marg) && (Math.abs(this.x - bug.x) <= marg)) {
				console.log('game over');
				console.log(this.x, bug.x, this.y, bug.y);
				this.x=202;
				this.y=445;
			}
		}
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
const bug1 = new Enemy(-101,60,100);
const bug2 = new Enemy(-101, 145, 60);
const bug3 = new Enemy(-330, 145, 60);
const allEnemies = [];
allEnemies.push(bug1,bug2,bug3);

//Does x&y of bug in array = x and y of player variable? this is a collision https://is.gd/3Cbz9N

	


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
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
