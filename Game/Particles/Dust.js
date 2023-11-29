export class Dust{
    constructor(x, y){
        this.size = Math.random() * 10 + 10 
        this.speedX = Math.random()
        this.speedY = Math.random()
        this.x = x+119
        this.y = y+160
        this.delete = false
    }
    update(){
        this.size *= 0.95   
        this.x -= 4 + this.speedX
        this.y -= this.speedY
        
        
        if (this.size < 0.5) {
            this.delete = true
        }
    }

    draw(context){
        context.beginPath()
        context.arc(this.x,this.y,this.size,0,Math.PI *2 )
        context.fillStyle = 'rgba(255,255,255,0.2)'
        context.fill()    
    }
}