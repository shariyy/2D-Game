export default class Layer{
    constructor(image, speed, speedModifier){
        this.image = image,
        this.x = 0,
        this.y = 0,
        this.width = 2400,
        this.height  = 700,
        this.x2 = this.width,
        this.speed = speed,
        this.speedModifier = speedModifier*speed
    }
    update(){
        //First Background Update
        if(this.x <= -this.width){
            this.x=this.width+this.x2-this.speedModifier
        }else{
            this.x-=this.speedModifier
        }
        //Second Background Update
        if(this.x2 <= -this.width){
            this.x2=this.width+this.x-this.speedModifier
        }else{
            this.x2-=this.speedModifier
        }
    }
    draw(context){
        context.drawImage(object.image,object.x,object.y,object.width,object.height)
        context.drawImage(object.image,object.x2,object.y,object.width,object.height)

    }
    
}