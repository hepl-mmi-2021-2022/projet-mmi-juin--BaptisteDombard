export class Animation{



    animate(){
        requestAnimationFrame(()=>{
            this.animate()
        })
    }

}