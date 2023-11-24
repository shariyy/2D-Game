const canvas = document.querySelector('#canvas1')
const context = canvas.getContext('2d');
const canvasHeigth = canvas.height = 800
const canvasWidth = canvas.width = 700
let speed = 0;
function setSpeed(param){
    speed = param
}





class InputHandler{
    constructor(){
        this.keys = []
        window.addEventListener('keydown', (e)=>{
            if( e.key === 'ArrowDown'||
                e.key === 'ArrowUp'||
                e.key === 'ArrowRight'||
                e.key === 'ArrowLeft' ||
                e.key === " "){
                    if (this.keys.indexOf(e.key) === -1) {
                        if (e.key === " ") {
                            this.keys.push('Space');
                        }else{this.keys.push(e.key);}
                    }
            }
            
        })
        window.addEventListener('keyup', (e)=>{
            if( e.key === 'ArrowDown'||
                e.key === 'ArrowUp'||
                e.key === 'ArrowRight'||
                e.key === 'ArrowLeft'||
                e.key === " "){
                if (e.key === " ") {
                    let index = this.keys.indexOf("Space")
                }else{
                    let index = this.keys.indexOf(e.key)
                }

                this.keys.splice(index, 1)
            }
            
        })
    }
}




const input = new InputHandler()
console.log(input)


class Player{ 
    constructor(gameWidth, gameHeight){
        this.gameWidt = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 575;
        this.height = 523;
        this.x = 0;
        this.y = 400; 
        this.image = new Image()
        this.image.src = "./shadow_dog.png"
        this.frameX = 0;
        this.frameY = 3;
        this.vy = 0;
        this.weight = 1;
        this.gameframe = 0;
        this.maxFrame = 6;
    }
    draw(context){
        context.drawImage(this.image,this.frameX*this.width, this.frameY*this.height,this.width, this.height,
            this.x, this.y, this.width/2, this.height/2);
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

const player = new Player(800, 700)
function animate() {
    context.clearRect(0, 0, canvasWidth, canvasHeigth)
    player.draw(context)
    player.update(input, 5)
    requestAnimationFrame(animate)
        
}
animate()