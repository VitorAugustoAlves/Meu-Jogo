const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var pirataAtacando, pirataAndandoIMG;
var chao;
var esqueletoAndandoIMG;
var bau, bauA, bauFechado;
var pirata
var esqueleto

function preload() {
  chao = loadImage("assets/chao.jpg");
  pirataAndandoIMG = loadImage("assets/luffyandando.gif");
  pirataAtacando = loadImage("assets/luffysoco.gif");
  esqueletoAndandoIMG = loadImage("assets/Esqueletoandando.gif");

  bauFechado = loadImage("assets/Chest01.png");
  bauA = loadAnimation(
    "assets/Chest01.png",
    "assets/Chest02.png",
    "assets/Chest03.png",
    "assets/Chest04.png",
    "assets/Chest05.png",
    "assets/Chest06.png",
    "assets/Chest07.png"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  pirata = Bodies.rectangle(100, height -175, 120, 150)
  esqueleto = Bodies.rectangle(random(150, width), height -175, 120, 190)
  
  }


function draw() {
  background(chao);
  Engine.update(engine);
  drawSprites();
  image(pirataAndandoIMG, pirata.position.x, pirata.position.y, 120, 150);
  image(esqueletoAndandoIMG, esqueleto.position.x, esqueleto.position.y, 120, 190);

}

