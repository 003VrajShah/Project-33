class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
    score(){
        text("SCORE :",20,795);
        if (particle.x<300){
          score+500;
        }
        if(particle.x>300 && particle.x<600){
        score+100;
        }
        if(particle.x>601 && particle.x<900){
            score+200;
            }
      }
      turn(){
        if(turn===turn+5){
            text("GAME OVER",400,400);
        }
      }
    
};