export class Enemy{
    constructor(gameframe, width, height,speedModifier){
        this.image = new Image()
        this.image.src = '/Enemies/Images/enemy1.png'
        this.speedModifier = speedModifier
        //Width and Height of the Character
        this.spriteWidth = width;
        this.spriteHeight = height;
        //Adjusting the Character Size
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        //X and Y Cordinates to cut the image from Sprite
        this.frameX = 0;
        this.frameY = 0;
        //Rate of frame change
        this.gameframe = gameframe
        //Canvas Width and Height
        this.canvasWidth = 800
        this.canvasHeight = 350  
        //X and Y Cordinates to draw the image on Canvas
        //Randomizing the Cordinates between on Canvas and considering the size of the character too
        this.x = Math.random() * (this.canvasWidth - this.width)
        this.y = Math.random() * (this.canvasHeight - this.height)
        this.speed = Math.random() * 4 + this.speedModifier
    }
    update(){
        //Randomizing the X and Y of Character to make it look shaking
        this.x -= this.speed;//random numbers between 3 and 1.5 this creates a forward motion
        this.y+= Math.random() * 5 - 2.5;//random numbers between -2.5 and 2.5 this makes sure the
        if(this.x + this.width < this.width){ this.x = this.canvasWidth - this.width/3 }
        //Changing the Frames for Animation
        if (this.gameframe % 2 === 0) {
        if (this.frameX > 4) {
            this.frameX = 0
        }else{
            this.frameX++
        }
    }
        // this.x = Math.max(0, Math.min(this.x, this.canvasWidth - this.width));
        //Making sure the character does not go beyond Y axis
        this.y = Math.max(100, Math.min(this.y, this.canvasHeight ));
        
}}