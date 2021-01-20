const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1;
var box1, box2;
var ball1;
var Rope1;

function setup (){
createCanvas(3000,800);

engine = Engine.create();
world = engine.world;

ground1 = new Ground(600, 600, 1200, 20);

box1 = new box(900, 100, 70, 70);
box2 = new box(900, 100, 70, 70);
box3 = new box(830, 200, 70, 70);
box4 = new box(830, 200, 70, 70);
box5 = new box(830, 200, 70, 70);
box6 = new box(830, 200, 70, 70);
box7 = new box(900, 200, 70, 70);
box8 = new box(900, 200, 70, 70);
box9 = new box(900, 200, 70, 70);
box10 = new box(830, 200, 70, 70);

ball1 = new Ball(200, 200, 80, 80);

Rope1 = new Rope(ball1.body,{x:500, y:50});



}

function draw() {
background("white");

Engine.update(engine);
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
ball1.display();
Rope1.display();


}

