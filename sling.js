class Rope {
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:1,
            length:250
           // pointB:{x:this.offsetX,y:this.offsetY}
            
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var posA=this.rope.bodyA.position
        var posB=this.rope.bodyB.position
        strokeWeight(5)
        line(posA.x,posA.y,posB.x,posB.y)
    }
    
}