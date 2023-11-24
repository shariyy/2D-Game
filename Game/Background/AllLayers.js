import Layer  from "./BackgroundConstructor.js";
import {backGroundImage1,backGroundImage2,backGroundImage3,
    backGroundImage4,backGroundImage5}  from "./BackgroundImages.js";

//Gamespeed
export let gamespeed = 0;
export function setSpeed(param){
    gamespeed = param
}
//Speed modifier for Parallax
//Layer 1
let speedModifier1 = 0.2;
//Layer 2
let speedModifier2 = 0.4;
//Layer 3
let speedModifier3 = 0.6;
//Layer 4
let speedModifier4 = 0.8;
//Layer 5
let speedModifier5 = 0.4;

const layer1 = new Layer(backGroundImage1, gamespeed, speedModifier1)
const layer2 = new Layer(backGroundImage2, gamespeed, speedModifier2)
const layer3 = new Layer(backGroundImage3, gamespeed, speedModifier3)
const layer4 = new Layer(backGroundImage4, gamespeed, speedModifier4)
const layer5 = new Layer(backGroundImage5, gamespeed, speedModifier5)

export const AllLayers = [layer1,layer2,layer3,layer4,layer5]


