const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,980,10000)

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
}