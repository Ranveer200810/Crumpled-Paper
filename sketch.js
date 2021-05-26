
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject;	
var world;
var papier;

function setup() {

	createCanvas(1200, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,470,width,20);
	dustbinObj=new dustbin(900,450);

	papier = new Paper(300, 250, 10, 10);

	Engine.run(engine);
  
};


function draw() {

//	Engine.update(engine);

	rectMode(CENTER);
	background(230);

	groundObject.display();
	dustbinObj.display();

	papier.display();

	textSize(21);
	fill('black');
	text("Press 'SPACE' to apply force to the paper", 95, 40);
};

function keyPressed() {

	if (keyCode === 32) {

		Matter.Body.applyForce(papier.body, papier.body.position, {x : 130, y : -145});

	}

}