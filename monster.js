class Monster {
constructor(x,y,r,angle){
var options ={
    density : 1,
    frictionAir : 0.005
}    
this.body = Bodies.circle(x,y,r,options)
this.r = r;
World.add(world,this.body);
this.image = loadImage("download.png");
}
display(){
    var pos = this.body.position; 
    var angle = this.body.position
    push ()
        translate(pos.x, pos.y);
        rotate (angle)
        fill ("white");
        image (this.image, 0,0,this.r, this.r);
        pop ()
        
}
}