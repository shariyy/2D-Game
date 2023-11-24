export class Enemy2{
    constructor(gameframe,speedModifier){
        this.image = new Image()
        this.image.src = "/Enemies/Images/enemy2.png"
        this.speedModifier = speedModifier
        //Width and Height of the Character
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        //Adjusting the Character Size
        this.speed = Math.random() * 3 + 2
        this.width = this.spriteWidth / this.speed;
        this.height = this.spriteHeight / this.speed;
        //X and Y Cordinates to cut the image from Sprite
        this.frameX = 0;
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
        this.angleSpeed = Math.random() * 0.2
        this.curve = Math.random() * 9 + 1
    }
    update(){
        this.x-= this.speed ;
        this.y += this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed
        if(this.x + this.width < 0){ this.x = this.canvasWidth}


        //Changing the Frames for Animation
        if (this.gameframe % 2 === 0) {
        if (this.frameX > 4) {
            this.frameX = 0
        }else{
            this.frameX++
        }
    }

    this.y = Math.max(0, Math.min(this.y, this.canvasHeight + this.height));
        
}}