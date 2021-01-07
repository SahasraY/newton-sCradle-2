class Bob {
    constructor(x) {
      var options = {
          isStatic: true,
          restitution:0.3,
          friction:0.5,
          density:1.5
          
  
      }
      this.body = Bodies.circle(x,500,15,options);
      this.width = 30;
      this.height = 30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      stroke("blue");
      fill("blue");
     ellipse(pos.x, pos.y, this.width, this.height);
    }
  }