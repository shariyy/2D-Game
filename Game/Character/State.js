//Character W & H
let spriteWidth = 575
let spriteHeight = 523


//According to Sprite 
const sprite = [
    {   name:"idle",
        frame:7   },
    {   name:"jump",
        frame:7   },
    {   name:"fall",
        frame:7   },
    {   name:"run",
        frame:9   },
    {   name:"dizzy",
        frame:11   },
    {   name:"sit",
        frame:5   },
    {   name:"roll",
        frame:7   },
    {   name:"bite",
        frame:7   },
    {   name:"ko",
        frame:12  },
    {   name:"hurt",
        frame:4  },
]

//Object with all the State
const animationState = {};


sprite.forEach((state, index)=>{
    let frame = {locations:[]}
    for (let i = 0; i < state.frame; i++) {
        let positionX = i*spriteWidth
        let positionY = index*spriteHeight
        frame.locations.push({x:positionX,y:positionY})
    }
    animationState[state.name] = frame
})

export const State = animationState;