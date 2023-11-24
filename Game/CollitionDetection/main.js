import enemiesArray from '/Enemies/Enemy1/EnemiesGenerator.js';
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gamespeed = 0
function setSpeed(param){
    gamespeed = param
}

class InputHandler{
    constructor(){
        this.keys = []
        window.addEventListener('keydown', (e)=>{
            if( e.key === 'ArrowDown'||
                e.key === 'ArrowUp'||
                e.key === 'ArrowRight'||
                e.key === 'ArrowLeft' ){
                    if (this.keys.indexOf(e.key) === -1) {
                        this.keys.push(e.key);
                    }
            }
            
        })
        window.addEventListener('keyup', (e)=>{
            if( e.key === 'ArrowDown'||
                e.key === 'ArrowUp'||
                e.key === 'ArrowRight'||
                e.key === 'ArrowLeft'){
                let index = this.keys.indexOf(e.key)
                this.keys.splice(index, 1)
            }
            
        })
    }
}

class Player{ 
    constructor(gameWidth, gameHeight){
        this.gameWidt = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 200;
        this.height = 200;
        this.x = 0;
        this.y = 400; 
        this.image = new Image()
        this.image.src = "./player.png"
        this.frameX = 0;
        this.frameY = 0;
        this.vy = 0;
        this.weight = 1;
        this.gameframe = 0;
        this.maxFrame = 8;
    }
    draw(context){
        context.drawImage(this.image,this.frameX*200, this.frameY,this.width, this.height,
            this.x, this.y, this.width, this.height);
    }
    update(input, speed){
        if (this.gameframe % 2 === 0) {
            if (this.frameX >= this.maxFrame) {
                this.frameX = 0
            }else{
                this.frameX++
            }
        }
        
        this.gameframe++

        //Speed
        this.x += speed;
        //Character Movement
        let keys = input.keys
        if (keys.indexOf('ArrowRight') > -1) {
            setSpeed(5)
        }else if (keys.indexOf('ArrowLeft') > -1) {
            setSpeed(-5)
        }else if (keys.indexOf('ArrowUp') > -1 && this.onGround()) {
            this.vy -= 32
        }
        else{
            setSpeed(0)
        }

        //Horizontal Movement
        if (this.x < 0) {
            this.x = 0
        }else if(this.x > 200){
            this.x = 200
        }
        //Vertical Movement
        this.y += this.vy;
        //Jumping
        if (!this.onGround()) {
            this.vy += this.weight
            this.frameY = 200
            this.maxFrame = 5
        }
        //On ground
        else{
            this.vy = 0
            this.frameY = 0
        }
        if (this.y < -128) {
            this.y = 400
            this.maxFrame = 8
        }

    } 

    //Checking Character on Ground
    onGround(){
        return this.y >= 400 //this.gameHeight - this.height
    }
}

class Background{
    constructor(image, speedModifer){
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height  = 700;
        this.x2 = this.width;
        this.speedModifer = speedModifer
    };
    update(speed){
        //First Background Update
        if(this.x <= -this.width){
            this.x=this.width+this.x2-speed*this.speedModifer
        }else{
            this.x-= speed*this.speedModifer
        }
        //Second Background Update
        if(this.x2 <= -this.width){
            this.x2=this.width+this.x-speed*this.speedModifer
        }else{
            this.x2-=speed*this.speedModifer
        }
    }
    draw(context){
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
        context.drawImage(this.image,this.x2,this.y,this.width,this.height)
    }
    
}


class Enemy{
    constructor(){
        this.gameWidt = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 200;
        this.height = 200;
        this.x = 0;
        this.y = 400; 
        this.image = new Image()
        this.image.src = "./player.png"
        this.frameX = 0;
        this.frameY = 0;
        this.vy = 0;
        this.weight = 1;
        this.gameframe = 0;
        this.maxFrame = 8;
    }
}


function handleEnemy(){
    
}

function displayStatusText() {
    
}



const input = new InputHandler();
const player = new Player(CANVAS_WIDTH, CANVAS_HEIGHT);
//Layer1
const image1 = new Image()
image1.src = '/Background/images/layer-1.png'
const layer1 = new Background(image1, 2)
//Layer2
const image2 = new Image()
image2.src = '/Background/images/layer-2.png'
const layer2 = new Background(image2, 4)
//Layer3
const image3 = new Image()
image3.src = '/Background/images/layer-3.png'
const layer3 = new Background(image3, 6)
//Layer4
const image4 = new Image()
image4.src = '/Background/images/layer-4.png'
const layer4 = new Background(image4, 8)
//Layer5
const image5 = new Image()
image5.src = '/Background/images/layer-5.png'
const layer5 = new Background(image5, 4)



function animate() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    //1
    layer1.draw(context)
    layer1.update(gamespeed)
    //2
    layer2.draw(context)
    layer2.update(gamespeed)
    //3
    layer3.draw(context)
    layer3.update(gamespeed)
    //4
    layer4.draw(context)
    layer4.update(gamespeed)
    //5
    layer5.draw(context)
    layer5.update(gamespeed)
    //player
    player.draw(context)
    player.update(input, gamespeed)
    //enemy
    enemiesArray.forEach((enemy, index)=>{
        context.drawImage(enemy.image,enemy.frameX*enemy.spriteWidth,enemy.frameY, enemy.spriteWidth, enemy.spriteHeight, 
            enemy.x, enemy.y, enemy.width, enemy.height)
            
            enemy.update();
        
    })
    requestAnimationFrame(animate)
}

animate()