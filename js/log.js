class Log{
    constructor(x, y, height, angle){
        var options = {
            restitution: 0.8,
            density: 1,
            friction: 1, 
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = 20
        this.height = height
        this.logImage = loadImage("sprites/log.png")
        
        World.add(world, this.body)

        Matter.Body.setAngle(this.body, angle)
    }

    display(){
        push ();
        translate (this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        angleMode (DEGREES);
        image (this.logImage, 0, 0, this.width, this.height);
        pop ();   
    }
}