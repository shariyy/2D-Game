export class Enemy{
    constructor(speedModifier){
        this.image = new Image()
        this.image.src = '/Enemies/Images/enemy1.png'
        this.speedModifier = speedModifier
        //Width and Height of the Character
        this.spriteWidth = 293;
        this.spriteHeight = 155; 
        //Adjusting the Character Size
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        //X and Y Cordinates to cut the image from Sprite
        this.frameX = 1;
        this.frameY = 0;
        //Rate of frame change
        this.frameRate = 1
        //Length of the Sprite Sheet
        this.frameLength = 4
        //For Continious animation
        this.gameframe = 0
        //Canvas Width and Height
        this.canvasWidth = 800
        this.canvasHeight = 700
        //Deleting
        this.delete = false 

        //X and Y Cordinates to draw the image on Canvas
        //To send Enemy from right
        this.x = this.x = this.canvasWidth + this.width/3
        //Randomizing Y Cordinates of the Enemy 
        this.y = Math.random() * (460 - 300 + 1) + 300 
        
        this.speed = Math.random() * 4 + this.speedModifier
    }
    draw(context){
        context.drawImage(this.image,this.frameX*this.spriteWidth,this.frameY, this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.width, this.height)
    }
    update(){

        //Randomly creating a forward speed
        this.x -= this.speed;

        //Random numbers between -2.5 and 2.5 to make it look shaking
        this.y += Math.random() * 5 - 2.5;

        //Once the enemy exits 
        if(this.x + this.width < this.width){ this.x = this.canvasWidth + this.width/3 }


        //Updating frameX for Animation
        if (this.gameframe % this.frameRate === 0) {
        if (this.frameX > this.frameLength) {
            this.frameX = 0
        }else{
            this.frameX++
        }
        }
        this.gameframe++
        
        //Making sure the character does not go beyond Y axis
        // this.y = Math.max(100, Math.min(this.y, this.canvasHeight ));
        if(this.y + this.height < 0 || this.y + this.height > this.canvasHeight-100 ){ 
        this.y = (this.canvasWidth-300) - this.width  }
        
        //Deleting enemy when beaten or gone out of the X
        if (this.x < 0-this.width) {
            this.delete = true
        }

}
    markForDelete(){
    this.delete = true
}

}