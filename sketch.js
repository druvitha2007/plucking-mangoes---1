
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var ground1;
var tree1;
var stone1;
var thread;

function preload()
{
	boyImage = loadImage("boy.png");
	treeImage=loadImage("tree.png");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=Matter.Bodies.rectangle(260,350,10,10);

	stone1=new Stone(150,300,20,20);

	mango1=new Mango(550,200,25);
  mango2=new Mango(570,120,25);
  mango3=new Mango(610,150,25);
  mango4=new Mango(640,90,25);
  mango5=new Mango(660,180,25);
  mango6=new Mango(690,110,25);
  mango7=new Mango(735,155,25);
	mango8=new Mango(765,200,25);
	
	ground1 = new Ground(400,390,800,10)

	tree1= new Tree(660,300,60,165);
  
	thread=new constraint(stone1.body,{x:230,y:315});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  
  imageMode(CENTER);
  image(boyImage,boy.position.x,boy.position.y,100,150);

  stone1.display();

  tree1.display();
  imageMode(CENTER);
  image(treeImage,650,220,300,350);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  ground1.display();

  thread.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);

  fill("black")
  textSize(35);
  text("Press Space to get a second chance to play",30,40);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  thread.fly();
}

function detectCollision(stone,mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false)
	}
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone1.body,{x:140,y:315});
    thread.attacher(stone1.body);
  }
}



