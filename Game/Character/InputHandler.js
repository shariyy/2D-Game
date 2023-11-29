class InputHandler{
    constructor(){
        this.keys ={'ArrowDown':false,'ArrowUp':false,'ArrowRight':false,'ArrowLeft': false};

        window.addEventListener('keydown', (e)=>{
            if( e.key === 'ArrowDown'||
                e.key === 'ArrowUp'||
                e.key === 'ArrowRight'||
                e.key === 'ArrowLeft'||
                e.key === ' '){
                    if (!this.keys[e.key]) {
                        this.keys[e.key] = true
                    }
            }
            
        });
        window.addEventListener('keyup', (e)=>{
            if( e.key === 'ArrowDown'||
                e.key === 'ArrowUp'||
                e.key === 'ArrowRight'||
                e.key === 'ArrowLeft'||
                e.key === ' '){
                    if (this.keys[e.key]) {
                        this.keys[e.key] = false
                    }
            }
            
        })
    }
}

export default InputHandler;