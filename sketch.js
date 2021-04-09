
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,mango1,mago2,mago3,mango4,mango5,mago6,mango7;
var stone,boyImage,ground;
var launcher;

function preload(){
	boyImg = loadImage("boy.png");
  boyImg.scale=0.1;

	
}
	
	

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

   
   boy = createSprite(190,350,20,50);
   boy.addAnimation("boy", boyImg);
   boy.scale = 0.10;

	//Create the Bodies Here.

	tree = new Tree(1000, 400, 300, 170);
	
	 mango1=new Mango(900,50,70);
	 mango2=new Mango(820,120,70);
   mango3=new Mango(900,150,70);
   mango4=new Mango(1040,120,70);
	 mango5=new Mango(990,120,70);
	 mango6=new Mango(1000,50,70);
	 mango7=new Mango(1100,120,70);
	 stone=new Stone(100,240,50);
   ground=new Ground(width/2,400,width,10);

   launcher = new Launcher(stone.body,{x:120,y:250});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  


  tree.display();
  mango1.display(); 
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  ground.display();

  launcher.display(); 

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);

 


  drawSprites();
}

//function mouse dragged
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
//mouse released
function mouseReleased(){

launcher.fly()
}

function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
  Matter.Body.setStatic(lmango.body,false);
}

}

function keyPressed() {

  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:100,y:230})
    launcher.attach(stone.body);    


}
}


