
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledball,bucket

function preload()
{
	crumpledball.loadImage("ball.png");
	bucket.loadImage("download(2).png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	crumpledball=createSprte(200,200,30,30);
	crumpledball.addImage("ball.png");

	bucket=createSprte(300,200,30,30)
	bucket.addImage("ball.png");


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  if(keyDown(LEFT_ARROW)){
	  crumpledball.velocityX=1;
	  crumpledball.velocityY=-2;

}

if(keyDown(DOWN_ARROW)){
	 crumpledball.velocityX=0;
	 crumpledball.velocityY=1;  

}

  
  drawSprites();
 
}













