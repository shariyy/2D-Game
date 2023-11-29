class Player{ 
    constructor(gameWidth, gameHeight){
        this.gameWidt = gameWidth;
        this.gameHeight = gameHeight;
        this.spriteWidth = 575;
        this.spriteHeight = 523;
        this.width = this.spriteWidth/3.2;
        this.height = this.spriteHeight/3.2;
        this.x = 0;
        this.y = 420; 
        this.image = new Image()
        this.image.src = '/Character/Image/shadow_dog.png'
        this.frameX = 0;
        this.frameY = 0;
        this.vy = 0;
        this.weight = 1;
        this.gameOver = false
        //Animation
        this.position = 0;
        this.frameLength = 7;
        this.gameFrame = 0
        this.frameRate = 3
        this.frameLength = 7
        this.position = 0 
        this.state = {}   
        this.currentState = 'run'
    }
    draw(context){
        
        // context.beginPath()
        // context.arc(this.x + this.width/2,this.y + this.height/2,this.width/2,0,Math.PI *2 )
        // context.stroke()    
        context.drawImage(this.image,this.frameX, this.frameY,this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width, this.height);
    }
    update(input, State, speed, setSpeed){
        
        this.state = State
        this.frameLength = this.state[this.currentState].locations.length
        this.position = Math.floor((this.gameFrame/this.frameRate)%this.frameLength)
        this.frameX = this.state[this.currentState].locations[this.position].x 
        this.frameY = this.state[this.currentState].locations[0].y
        this.gameFrame++ 

        
        //Character Movement
        let keys = input.keys
        if(keys === null){
            
        }
        else if (keys["ArrowRight"] && keys[" "] )  {
            speed = 6
            this.currentState = 'roll'
        }
        else if (keys["ArrowLeft"] && keys[" "] )  {
            speed = -6
            this.currentState = 'roll'
        }
        else if (keys[" "] && keys['ArrowUp'] && this.onGround()){
            this.vy -= 28
            this.currentState = 'roll'
        }
        else if (keys["ArrowRight"]) {
            // speed = 3
            setSpeed(9)
            this.currentState = 'run'
        }
        else if (keys["ArrowLeft"]) {
            speed = -3
            this.currentState = 'run'
        }
        else if (keys[" "]) {
            this.currentState = 'roll'
        }
        else if (keys["ArrowDown"]) {
            setSpeed(0)
            this.currentState = 'sit'
        }
        else if (keys['ArrowUp'] && this.onGround()) {
            this.vy -= 28
           
        }
        else{
            this.currentState = 'run'
            speed = 0
            setSpeed(6)
        }
        //Vertical Movement
        this.y += this.vy;
        //For Roll Over
        if (!this.onGround() && this.currentState == 'roll') {
            this.vy += this.weight 
            
            if (!this.onGround() && this.vy > 0) {
                
            }
        }
        //On ground
        else if(this.onGround() && this.currentState !== 'roll'){
            this.vy = 0
        }
        //Jumping
        if (!this.onGround() && this.currentState != 'roll') {
            this.vy += this.weight 
            this.currentState = 'jump' 
            if (!this.onGround() && this.vy > 0) {
                this.currentState = 'fall'
            }
        }
        //On ground
        else if(this.onGround() && this.currentState == 'roll'){
            this.vy = 0
        }


        //Off X axis protector
        if (this.x < 0) {
            this.x = 0
        }else if(this.x > 300){
            this.x = 300
        }
        //Off Y axis protector
        if (this.y < -50) {
            this.y = -40  
        }
        //Speed
        this.x += speed;
    } 

    //Checking Character on Ground
    onGround(){
        return this.y >= 420 
    }
}


export default Player;