class Bird{
    constructor(x, y){
        var options = {
            restitution: 0.8,
            density: 1,
            friction: 1,  
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = 50
        this.height = 50
        this.birdImage = loadImage("sprites/bird.png")
        
        World.add(world, this.body);
    }

    display(){
        push ();
        translate (this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode (CENTER);
        image (this.birdImage, 0, 0, this.width, this.height);
        pop ();
        console.log("bird")
    }
}