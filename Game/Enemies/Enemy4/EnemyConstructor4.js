export class Enemy4{
    constructor(gameframe,speedModifier){
        this.image = new Image()
        this.image.src = "/Enemies/Images/enemy4.png"
        this.speedModifier = speedModifier
        //Width and Height of the Character
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        //Adjusting the Character Size
        this.speed = Math.random() * 3 + 2
        this.width = this.spriteWidth / 3;
        this.height = this.spriteHeight / 3;
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
        this.newX = Math.random() * (this.canvasWidth - this.width)
        this.newY = Math.random() * (this.canvasHeight - this.height)
        this.gamespeed = 0
        //
    }
    update(){
        if (this.gamespeed % 20 === 0) {
        this.newX = Math.random() * (this.canvasWidth - this.width)
        this.newY = Math.random() * (this.canvasHeight - this.height)
        }
        let dx = this.x - this.newX
        let dy = this.y - this.newY

        this.x -= dx/10
        this.y -= dy/70
        
        if(this.x + this.width < 0){ this.x = this.canvasWidth}


        //Changing the Frames for Animation
        if (this.gameframe % 2 === 0) {
        if (this.frameX > 7) {
            this.frameX = 0
        }else{
            this.frameX++
        }
        this.gamespeed++
    }

    this.y = Math.max(0, Math.min(this.y, this.canvasHeight + this.height));
        
}}