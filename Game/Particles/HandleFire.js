let particleTimer = 0
let particleInterval = 100
let particleRandomizer = Math.random() * 1000 + 5000
export function handlFire(Player, deltaTime, context, Fire, ashArray, setAshes) {
    if (particleTimer < particleInterval + particleRandomizer) {
        if (Player.currentState == 'roll' ) {
        ashArray.push(new Fire(Player))}
        particleTimer = 0
    }else{
        particleTimer += deltaTime
    }

    //Dust
        ashArray.forEach(particle =>{
            particle.draw(context)
            particle.update()
        })
    
    setAshes(()=>(ashArray.filter(particle=>(!particle.delete)))) 
}
