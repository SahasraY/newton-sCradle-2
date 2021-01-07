class Roof {
    constructor(x) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,100,150,50,options);
      this.width = 100;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      stroke("blue");
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };