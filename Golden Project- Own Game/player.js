class Player {
    constructor(x,y,width,height){
        this.image = loadImage("black.png");
        this.image2 = loadImage("blackLeft.png")
        var options = {
            friction: 0,
            density: 0.5,
            frictionStatic: 0,
            frictionAir: 0.01,
            mass: 1322.4489795918369
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        console.log(this.body);
        console.log(this.width);
        console.log(this.height);
    }
    display(){
        
        var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    //rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill("white");
    //image(this.image,0,0,this.width,this.height)
    if (keyIsDown (LEFT_ARROW)){
        image(this.image2,0,0,this.width,this.height);
    }
    else {
        image(this.image,0,0,this.width,this.height)
    }
    pop();
    }
}