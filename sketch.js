const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var pirataAndando = [];
var pirataAndandoJSON, pirataAndandoIMG;
var chao;
var esqueletoAndando = [];
var esqueletoAndandoJSON, esqueletoAndandoIMG;
var bau, bauA, bauFechado;
var pirata

function preload() {
  chao = loadImage("assets/chao.jpg");
  pirataAndandoIMG = loadImage("assets/pirataA.png");
  pirataAndandoJSON = loadJSON("assets/pirataA.json");
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
  var pirataAndandoFrames = pirataAndandoJSON.frames;
  for (var i = 0; i < pirataAndandoFrames.length; i++) {
    var pos = pirataAndandoFrames[i].position;
    var img = pirataAndandoIMG.get(pos.x, pos.y, pos.w, pos.h);
    pirataAndando.push(img);

    //pirataAndandoIMG = createSprite(200,300)
  }
}

function draw() {
  background(chao);
  Engine.update(engine);
  exibirpiratas()
  drawSprites();
}

function exibirpiratas(){
  pirata = new Pirata(50, height-100, 70, 70, pirataAndando)
  pirata.display()
}
