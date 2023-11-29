let particleTimer = 0
let particleInterval = 100
let particleRandomizer = Math.random() * 1000 + 5000
export function handleDust(Player, deltaTime, context, Dust, dustArray, setDusts) {
    if (particleTimer < particleInterval + particleRandomizer) {
        if (Player.currentState == 'run') {
        dustArray.push(new Dust(Player.x, Player.y))}
        particleTimer = 0
    }else{
        particleTimer += deltaTime
    }

    //Dust
        dustArray.forEach(particle =>{
            particle.draw(context)
            particle.update()
        })
    
    setDusts(()=>(dustArray.filter(particle=>(!particle.delete)))) 
}
