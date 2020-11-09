
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box1s
var ball
function preload(){
	this.paper = loadImage("pics/paper.png");
	this.bin = loadImage("pics/dustbingreen.png")
}


function setup() {
	createCanvas(800, 700);
	
	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	// Engine.run(engine);
	box1 = Bodies.rectangle(585,570,10,60,{isStatic:true})
	World.add(world,box1)
	
	box2 = Bodies.rectangle(630,587,100,10,{isStatic:true})
	World.add(world,box2)
	box3 = Bodies.rectangle(675	,560,10,80,{isStatic:true})
	World.add(world,box3)
	ground1 = Bodies.rectangle(400,600,800,15,{isStatic:true})
	World.add(world,ground1)

	ball = Bodies.circle(150,100,10,{isStatic:false,friction:1})
	World.add(world,ball)
	//.body pendulum

}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  imageMode(CENTER);
  background(255);
	rect(box1.position.x,box1.position.y,10,60)
    
   	rect(box2.position.x,box2.position.y,100,10)
   	rect(box3.position.x,box3.position.y,10,80)
     rect(ground1.position.x,ground1.position.y,800,15)

  ellipse(ball.position.x,ball.position.y,20,20)
  image(this.paper,ball.position.x,ball.position.y,30,30    )
  image(this.bin,box2.position.x,box2.position.y-50,108,110)
//   console.log("x: "+ball.position.x)
//   console.log(ball.position.y) 
  
  drawSprites();
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW&&ball.position.y>500){
		// console.log(ball)
		// console.log(ball.position)
		Matter.Body.applyForce(ball,ball.position,{x:0.012,y:-0.012})

	}
}
//this.image = loadImage("sprites/base.png");
// imageMode(CENTER);

//image(this.image, 0, 0, this.width, this.height);


