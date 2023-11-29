export function gameOverText(context,param,a,b) {
    //GameOver Control
    context.font = '60px Helvetica';
        
    // Set the text color
    context.fillStyle = param;
    
    // Set the text to be displayed
    const gameOverText = 'Game Over';
    
    // Calculate the position to center the text
    const textX = (800 - context.measureText(gameOverText).width) / 2;
    const textY = 330;
    
    // Draw the text on the canvas
    return context.fillText(gameOverText, textX+a, textY+b) 
    }
    


export  function Score(context,c, param,a,b) {
        
        context.font = '40px Helvetica';
            
        // Set the text color
        context.fillStyle = param;
        
        // Set the text to be displayed
        const score = 'Score : '+c ;
        
        // Calculate the position to center the text
        const textX = 30;
        const textY = 50;
        
        // Draw the text on the canvas
        return (context.fillText(score, textX+a, textY+b))
        }
    