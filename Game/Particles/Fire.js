export class Fire{
    constructor(player){
        this.size = player.width/4
        this.speedX = Math.random()
        this.speedY = Math.random()
        this.x = player.x+player.width/2
        this.y = player.y+115
        this.delete = false
        this.red = "(255,0,0)"
        this.green = "(255,90,0)"
        this.blue = "(255,154,0)"
        this.angle = Math.random() * 10 + 1    
    }
    update(){
        this.size -= Math.random() * 0.2 + 0.7  
        this.x -= 4 * Math.sin(this.angle)
        this.y -= this.speedY * Math.cos(this.angle)
        
        
        if (this.size < 0.5) {
            this.delete = true
        }
    }

    draw(context){
        // Create radial gradient
        const gradient = context.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size
        );

        // Add color stops for the fire effect
        gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');    // Red
        gradient.addColorStop(0.5, 'rgba(255, 165, 0, 1)'); // Orange
        gradient.addColorStop(1, 'rgba(255, 255, 0, 0)');   // Transparent yellow


        context.beginPath()
        context.arc(this.x,this.y,this.size,0,Math.PI *2 )
        context.fillStyle = gradient
        context.fill()    
    }
}