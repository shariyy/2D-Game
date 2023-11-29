export class Enemy2{
    constructor(speedModifier){
        this.image = new Image()
        this.image.src = "/Enemies/Images/enemy2.png"
        this.speedModifier = speedModifier
        this.speed = Math.random() * 4 + this.speedModifier
        //Width and Height of the Character
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        //Adjusting the Character Size
        this.size = Math.random() * (4 - 2) + 2;
        this.width = this.spriteWidth / this.size;
        this.height = this.spriteHeight / this.size;
        //X and Y Cordinates to cut the image from Sprite
        this.frameX = 0;
        this.frameY = 0;
        //Rate of frame change
        this.gameframe = 0
        this.frameLength = 4
        this.frameRate = 1
        //Canvas Width and Height
        this.canvasWidth = 800
        this.canvasHeight = 700  
        //X and Y Cordinates to draw the image on Canvas
        //Randomizing the Cordinates between on Canvas and considering the size of the character too
        this.x = this.canvasWidth + this.width/3
        this.y = Math.random((450 - 200 + 1)) + 200;
        //
        this.angle = 0
        this.angleSpeed = Math.random() * 0.2 ;
        this.curve = Math.random() * 5 + 2
        this.delete = false
    }   
    update(){
        this.x -= this.speed ;
        
        this.y += this.curve * Math.sin(this.angle);

        this.angle += this.angleSpeed


        if(this.x + this.width < this.width){ this.x = this.canvasWidth + this.width/3 }
        
        
        //Changing the Frames for Animation
        if (this.gameframe % this.frameRate === 0) {
            if (this.frameX > this.frameLength) {
                this.frameX = 0
            }else{
                this.frameX++
            }
            }
            this.gameframe++

        //Making sure the character does not go beyond Y axis
        this.y = Math.max(100, Math.min(this.y, this.canvasHeight ));
        // if(this.y + this.height < 0 || this.y + this.height > this.canvasHeight-100 ){ 
        //     this.y = (this.canvasWidth-300) - this.width  }
        
        
        //Deleting enemy when beaten or gone out of the X
        if (this.x < 0-this.width) {
            this.delete = true
        }
    }
    markForDelete(){
        this.delete = true
    }
    draw(context){
        context.drawImage(this.image,this.frameX*this.spriteWidth,this.frameY, this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.width, this.height)
    }
}