
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    gr=new Ground(400, 200, 400, 25) 
    ball1=new Bob(350, 700, 30)
    ball2=new Bob(550, 700, 30)
    ball3=new Bob(750, 700, 30)
    ball4=new Bob(250, 700, 30)
    ball5=new Bob(150, 700, 30)


    chain1=new Rope(ball1.body,gr.body)
    chain2=new Rope(ball2.body,gr.body)
    chain3=new Rope(ball3.body,gr.body)
    chain4=new Rope(ball4.body,gr.body)
    chain5=new Rope(ball5.body,gr.body)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  gr.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-50,y:-25})
  }
  }
 

