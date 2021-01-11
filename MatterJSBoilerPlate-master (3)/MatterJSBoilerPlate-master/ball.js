class Ball{

    constructor(x,y,radius){
        var options={
            isStatic:false,
            Restitution:0,
            friction:1,
            density:1.2
            }
    
    this.body=Bodies.circle(x,y,radius,options)
    this.x=x
    this.y=y
    this.radius=radius
    
    World.add(world,this.body)
    }
    
    display(){
    
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    fill(180)
    ellipseMode(CENTER)
    ellipse(0,0,this.radius,this.radius)
    pop()
    }}
