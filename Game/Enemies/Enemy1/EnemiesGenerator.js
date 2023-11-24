    import {Enemy} from "./EnemyConstructor.js"
    //State constants
    const enemiesArray = [];
    const numberOfEnemies = 4;
    let gameframe = 4
    let speedModifier = 5
    for (let i = 0; i < numberOfEnemies; i++) {
        enemiesArray.push(new Enemy(gameframe, 293, 155, speedModifier))
    }
    
    export default enemiesArray;