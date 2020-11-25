
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new paper(100, 600, 50)
	wall1 = new bin(500, 705, 200, 10)
	wall2 = new bin(405, 655, 10, 100)
	wall3 = new bin(595, 655, 10, 100)
	ground = new groung(width/2, 650, width, 20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
}
 
function keyPressed(){
		if (keyCode === UP_ARROW){
				Matter.Body.applyForce(ball.body, ball.body.position, {x:2.5, y:-2.5});
	}
}


