class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("Sprites/sling1.png");
        this.sling2 = loadImage("Sprites/sling2.png");
        this.sling3 = loadImage("Sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
        
    }
    attach(body){
        this.sling.bodyA=body;
    }

    display(){
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push(); 
            stroke(107, 54, 26);
            if (pointA.x<200){
                strokeWeight(10);
                line(pointA.x-25, pointA.y, pointB.x, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-5);
                image(this.sling3, pointA.x-30, pointA.y-10, 15, 30);
            }
            else {
                strokeWeight(3);
                line(pointA.x-25, pointA.y, pointB.x, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-5);
                image(this.sling3, pointA.x-30, pointA.y-10, 15, 30); 
            }
            pop(); 
        }
    }
    
}