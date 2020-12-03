class Ground{
    constructor(x,y,width,height){
     var options={
            isStatic:true
        }

        this.groundObject = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.groundObject);
        this.width = width;
        this.height = height;
    }

    display(){
        rectMode(CENTER);
        fill(128,128,128);
        stroke(0);

        rect(this.groundObject.position.x,this.groundObject.position.y,this.width,this.height);
    }
}