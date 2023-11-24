import {Enemy3} from "./EnemyConstructor3.js"
//State constants
const enemiesArray3 = [];
const numberOfEnemies = 10;
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameframe = 2
let speedModifier = 5


for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray3.push(new Enemy3(gameframe,speedModifier))
}

function animate() {
    //clearing the canvas
    context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    enemiesArray3.forEach((enemy, index)=>{
        // if(index % 2 == 0){
        context.drawImage(enemy.image,enemy.frameX*enemy.spriteWidth,enemy.frameY, enemy.spriteWidth, enemy.spriteHeight, 
            enemy.x, enemy.y, enemy.width, enemy.height)
            
            enemy.update();
        
    })
  
    requestAnimationFrame(animate)
}
animate()

export default enemiesArray3;