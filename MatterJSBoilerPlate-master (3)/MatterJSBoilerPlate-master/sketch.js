
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(600,50,1200,20)
ball1=new Ball(200,220,20)
ball2=new Ball(220,200,20)
ball3=new Ball(240,200,20)
ball4=new Ball(260,200,20)
ball5=new Ball(280,260,20)
rope1=new Rope(ball1.body,{x:200,y:100})
rope2=new Rope(ball2.body,{x:220,y:100})
rope3=new Rope(ball3.body,{x:240,y:100})
rope4=new Rope(ball4.body,{x:260,y:100})
rope5=new Rope(ball5.body,{x:280,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}



