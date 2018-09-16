
class Enemy{
	constructor(x,y,speed) {
		this.x = x;
		this.y = y;
		this.sprite = 'images/enemy-bug.png';
		this.speed = speed;
	}
	update(dt){
		if(this.x < 505){
			this.x += this.speed * dt;
		}else{
			this.x= -171;
		}
	}
	render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}
	
class Hero{
	constructor(){
		this.x = 202;
		this.y = 445;
		this.sprite = 'images/char-cat-girl.png';
	}
	update(){
		for(let bug of allEnemies){
			var marg =68;
			if ((Math.abs(this.y - bug.y) <= marg) && (Math.abs(this.x - bug.x) <= marg)) {
				this.x=202;
				this.y=445;
			}
		}
	}
	render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	handleInput(input){
		if(this.x > 0 && input == 'left'){
			this.x -= 20;
		}
			else if (this.x < 403 && input == 'right'){
				this.x += 20;
			}
		if(this.y > 0 && input == 'up'){
			this.y -= 20;
		}
			else if (this.y < 434 && input == 'down'){
				this.y += 20;
			}
		
	}
	
}

const player = new Hero();
const bug1 = new Enemy(-101,60,100);
const bug2 = new Enemy(-101, 145, 60);
const bug3 = new Enemy(-330, 145, 60);
const allEnemies = [];
allEnemies.push(bug1,bug2,bug3);
var modal = document.getElementById ("myModal");
const span = document.getElementsByClassName ("close");
var btn = document.getElementById ("replay");
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
