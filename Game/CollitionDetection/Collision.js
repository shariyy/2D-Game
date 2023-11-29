function collitionDetection(params, object, setGameOver) {
    params.forEach(enemy => {
        const dx = enemy.x - object.x
        const dy = enemy.y - object.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const radius = object.width/4 + enemy.width/4
        if (object.currentState == 'roll' && distance < object.width/4 + enemy.width/4) {
            enemy.markForDelete();
        }else if (object.currentState !== 'roll' && distance < radius) {
            setGameOver()
        }
     });
}

export default  collitionDetection;