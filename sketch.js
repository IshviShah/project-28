
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var mango1,mango2,mango3,mango4,mango5;
var ground;
var boy;
var tree;
var stone;
var slingShot;


function preload()
{
boy = loadImage("boy.png");	
tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (750,height,1300,20);
	stone = new Stone (235,420,60);
	
	mango1 = new Mango (1000,230,50);
	mango2 = new Mango (1100,220,50);
	mango3 = new Mango (900,200,50);
	mango4 = new Mango (1000,160,50);
	mango5 = new Mango (900,260,50);
	slingShot = new SlingShot(stone.body,{x: 235,y: 420});
}




function draw() {
	Engine.run(engine);
  rectMode(CENTER);
  background(0);

  image(tree,800,50,350,550);
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  stone.display();
  slingShot.display();    

  

  image(boy,200,340,200,300);
  
  detectCollision(stone, mango1);
}
function mouseDragged (){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});

}
function mouseReleased (){
    slingShot.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance <=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.body.setPosition(stone.body, {x:235, y:420})
		launcherObject.attach(stone.body);
	}

}

