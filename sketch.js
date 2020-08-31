const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    pointBimage = loadImage("sprites/boy.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
  
boy = new Boy(200,100,10,30)
  


    bird = new Bird(100,100);

   
    slingshot = new SlingShot(bird.body,{x : 200,y: 100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
  //  var boy = createSprite(200,100,pointBimage)
    

 

    bird.display();
    platform.display();
    slingshot.display();
     boy.display();
}




function mouseDragged() {
    
Matter.body.setPosition(bird.body,{ x:mouseX, y:mouseY })

}
function mouseReleased() {
    slingshot.fly();
}