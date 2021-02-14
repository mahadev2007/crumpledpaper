
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,484,width,20);
	dustbinObj=new dustbin(1200,460);
	paper1=new Paper(244,472,50)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
 

  groundObject.display();
  dustbinObj.display();
  paper1.display();


  text(mouseX + ','+mouseY,10,45)
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:83,y:-37});
	}
}
