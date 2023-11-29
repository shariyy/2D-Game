//Background Imports
import backgroundLayers from "/Background/BakgroundLayers.js";

//Enemy1 Imports
import {Enemy as Enemy1} from "../Enemies/Enemy1/EnemyConstructor.js";
import { handleEnemy } from "./Enemies/Enemy1/HandleEnemies.js";


import { Enemy2 } from "../Enemies/Enemy2/EnemyConstructor2.js";
import { handleEnemy2 } from "../Enemies/Enemy2//HandleEnemies2.js";

//Player Imports
import Player from '../Character/Player.js';
import {State} from '../Character/State.js';
import InputHandler from '../Character/InputHandler.js';

//Utils Imports
import {gameOverText,Score} from './Utils/Text.js';
import collitionDetection from './CollitionDetection/Collision.js'

//Particles Imports
import { Dust } from "./Particles/Dust.js";
import { handleDust } from "./Particles/HandleDust.js";
import { Fire } from "./Particles/Fire.js";
import { handlFire } from "./Particles/handleFire.js";




window.addEventListener('load', ()=>{
    
//State Variables
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const canvasWidth = canvas.width = 800;
const canvasHeight = canvas.height = 700;

//Player State
let markforDeletion
function setPlayerState(param) {
    markforDeletion = param
} 

//GameOver 
let gameOver = false
function setGameOver() {
    gameOver = !gameOver
}

//Animation Rate
let lastTime = 0;

//Speed of Player&Background
let gameSpeed = 5;
const setGameSpeed = (param)=>{
    gameSpeed = param
}

//Score
let score 
let time = 0
function increaseScore() {
    score = (Math.floor((time/100)%10000))
}

//Enemy1 Controls
let enemies1Array = [];
function setEnemiesArray(param){
    enemies1Array = param()
}


//Enemy2 Controls
let enemies2Array = [];
function setEnemiesArray2(param){
    enemies2Array = param()
}

//Particles
//Dust
let dustArray = [];
function setDusts(param){
    dustArray = param()
}
//Fire when roll
let ashArray = [];
function setAshes(param){
    ashArray = param()
}

//Player Controls
const input = new InputHandler()
const player = new Player(700, 800, input )


function animate(timeStamp) {
    
    increaseScore()
    //Refresh Rate
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    //Clearing the canvas
    context.clearRect(0,0,canvasWidth,canvasHeight)

    
    //Background
    backgroundLayers.forEach((layer) => {
        layer.draw(context)
        layer.update(gameSpeed)
    });


    //Collition
    collitionDetection(enemies1Array, player, setGameOver)
    collitionDetection(enemies2Array, player, setGameOver)


    //Dust & Fire
    handleDust(player, deltaTime, context,Dust, dustArray, setDusts)
    handlFire(player, deltaTime, context, Fire, ashArray, setAshes) 
    
    //Player
    player.update(input, State, gameSpeed, setGameSpeed)
    player.draw(context)


    //Enemy1
    handleEnemy(Enemy1, deltaTime, context, enemies1Array, setEnemiesArray, score)
    if (score >= 1) {
        handleEnemy2(Enemy2, deltaTime, context, enemies2Array, setEnemiesArray2, score)
    }
    
    
    
    //Score
    Score(context,score,"black",2,2)
    Score(context,score,"white",0,0)
    time++

    //GameOver checker
    !gameOver ? requestAnimationFrame(animate) :  null
    if(gameOver){
    gameOverText(context,"black",2,2);
    gameOverText(context,"white",0,0)}
}
animate(0)
})