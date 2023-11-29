let enemyTimer = 0
let enemyInterval = 100
let enemyRandomizer = Math.random() * 1000 + 5000
export function handleEnemy(Enemy,deltaTime, context, enemies1Array, setEnemiesArray, score) {
    if (enemyTimer>enemyInterval + enemyRandomizer) {
        enemies1Array.push(new Enemy(5))
        enemyTimer = 0
    }else{
        enemyTimer += deltaTime + score*3
    }

    //Enemy
    enemies1Array.forEach(enemy =>{
        enemy.draw(context)
        enemy.update()
    })
    setEnemiesArray(()=>(enemies1Array.filter(enemy=>(!enemy.delete))))

}
