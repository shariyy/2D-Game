export class Enemy3{
    constructor(gameframe,speedModifier){
        this.image = new Image()
        this.image.src = "/Enemies/Images/enemy3.png"
        this.speedModifier = speedModifier
        //Width and Height of the Character
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        //Adjusting the Character Size
        this.speed = Math.random() * 3 + 2
        this.width = this.spriteWidth / 3;
        this.height = this.spriteHeight / 3;
        //X and Y Cordinates to cut the image from Sprite
        this.frameX = 1;
        this.frameY = 0;
        //Rate of frame change
        this.gameframe = gameframe
        //Canvas Width and Height
        this.canvasWidth = 800
        this.canvasHeight = 700  
        //X and Y Cordinates to draw the image on Canvas
        //Randomizing the Cordinates between on Canvas and considering the size of the character too
        this.x = Math.random() * (this.canvasWidth - this.width)
        this.y = Math.random() * (this.canvasHeight - this.height)
        //
        this.angle = 0
        this.angleSpeed = Math.random() * 2
        this.curve = Math.random() *  200 + 50 
    }
    update(){
        this.x = this.curve * Math.sin(this.angle * Math.PI/180) + (this.canvasWidth/2 - this.width/2);
        this.y =  this.curve * Math.cos(this.angle * Math.PI/360) + (this.canvasHeight/2 - this.height/2);
        this.angle += this.angleSpeed
        if(this.x + this.width < 0){ this.x = this.canvasWidth}


        //Changing the Frames for Animation
        if (this.gameframe % 2 == 0) {
        if (this.frameX > 4) {
            this.frameX = 0
        }else{
            this.frameX++
        }}
        this.gameframe++
        // this.y = Math.max(0, Math.min(this.y, this.canvasHeight + this.height));
    }

    
        
}