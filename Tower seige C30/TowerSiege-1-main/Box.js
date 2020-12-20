class Box {
    constructor(x,y,width,height) {
      var options = {
          'isStatic': false, 
          'restitution':0.1,
          'friction':10,
          'density':4
      }
      this.box= Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.veiw=255
      World.add(world, this.box);
    }
    display(){
      var posi =this.box.position;
      var angle = this.box.angle;
      
      push()
      if(this.box.velocity.x>12||this.box.velocity.y>10){
        World.remove(world,this.box) 
      }
      else{
      rotate(angle);
      rectMode(CENTER);
      fill(186,14,28);
      rect(posi.x, posi.y, this.width, this.height);
      pop()
      }
    }
  };