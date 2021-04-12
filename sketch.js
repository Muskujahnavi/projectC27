const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
var roofobj;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofobj=new roof(width/2,height/4,width/4,20);
	bobd=40;
	bobposx=width/2;
	bobposy=height/4+500;
	bob1=new bob(bobposx-bobd*2,bobposy,bobd);
	bob2=new bob(bobposx-bobd,bobposy,bobd);
	bob3=new bob(bobposx,bobposy,bobd);
	bob4=new bob(bobposx+bobd,bobposy,bobd);
	bob5=new bob(bobposx+bobd*2,bobposy,bobd);

var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:1200,
		height:700,
		wireframes:false
	}
});


	rope1=new rope(bob1.body,roofobj.body,-bobd*2,0);
	rope2=new rope(bob2.body,roofobj.body,-bobd*1,0);
	rope3=new rope(bob3.body,roofobj.body,0,0);
	rope4=new rope(bob4.body,roofobj.body,bobd*1,0);
	rope5=new rope(bob5.body,roofobj.body,bobd*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");

  roofobj.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:50});

	}
}

function drawLine(Constraint){
	bobpos=constraint.bodyA.position;
	roofpos=constraint.bodyB.position;
	roofofset=cnstraint.pointB;
	roofx=roofpos.x+roofofset.x;
	roofy=roofpos.y+roofofset.y;
	line(bobpos.x,bobpos.y,roofx,roofy);
}