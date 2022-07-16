class Box{
    constructor(x, y, width, height){
        var options = {
            restitution: 0.8,
            density: 1,
            friction: 1, 
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width
        this.height = height
        this.boxImage = loadImage("sprites/box.png")
        
        World.add(world, this.body)
    }

    display(){
        push ();
        translate (this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode (CENTER);
        image (this.boxImage, 0, 0, this.width, this.height);
        pop ();
    }
}