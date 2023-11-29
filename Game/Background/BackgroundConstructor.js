export default class Layer{
    constructor(image, speedModifier){
        this.image = image,
        this.x = 0,
        this.y = 0,
        this.width = 2400,
        this.height  = 700,
        this.x2 = this.width,
        this.speed = 0
        this.speedModifier = speedModifier
    }
    update(speed){
        //First Background Update
        this.speed = speed*this.speedModifier
        if(this.x <= -this.width + this.speed){
            this.x=this.width+this.x2-this.speed
        }else{
            this.x-=this.speed
        }
        //Second Background Update
        if(this.x2 <= -this.width + this.speed){
            this.x2=this.width+this.x-this.speed
        }else{
            this.x2-=this.speed
        }
    }
    draw(context){
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
        context.drawImage(this.image,this.x2,this.y,this.width,this.height)

    }
    
}