let enemyTimer = 0
let enemyInterval = 100
let enemyRandomizer = Math.random() * 1000 + 5000
export function handleEnemy2(Enemy2,deltaTime, context, enemies2Array, setEnemiesArray,score) {
    if (enemyTimer>enemyInterval + enemyRandomizer) {
            enemies2Array.push(new Enemy2(5))
            enemyTimer = 0   
        
    }else{
        enemyTimer += deltaTime + score*3
    }

    //Enemy
    enemies2Array.forEach(enemy =>{
        enemy.draw(context)
        enemy.update()
    })
    setEnemiesArray(()=>(enemies2Array.filter(enemy=>(!enemy.delete))))

}
