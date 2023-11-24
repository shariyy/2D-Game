import AllLayers  from "./AllLayers.js";
import enemiesArray from "../Enemies/Enemy1/EnemiesGenerator.js";
import enemiesArray2 from "../Enemies/Enemy2/EnemyGenerator2.js";


window.addEventListener('load', ()=>{
    
//State constants
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
//Gamespeed

function animate() {
    //clearing the canvas
    context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)

    //Background
    AllLayers.forEach((object) => {
        context.drawImage(object.image,object.x,object.y,object.width,object.height)
        context.drawImage(object.image,object.x2,object.y,object.width,object.height)
        object.update(object.image,object.x2,object.y,object.width,object.height)
    });
    enemiesArray.forEach((enemy, index)=>{
        // if(index % 2 == 0){}
        context.drawImage(enemy.image,enemy.frameX*enemy.spriteWidth,enemy.frameY, enemy.spriteWidth, enemy.spriteHeight, 
            enemy.x, enemy.y, enemy.width, enemy.height)
            
            enemy.update();
        
    })
    enemiesArray2.forEach((enemy, index)=>{
        
        context.drawImage(enemy.image,enemy.frameX*enemy.spriteWidth,enemy.frameY, enemy.spriteWidth, enemy.spriteHeight, 
            enemy.x, enemy.y, enemy.width, enemy.height)
            
            enemy.update();
        
    })
    requestAnimationFrame(animate)
}
animate()
})