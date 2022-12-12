const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var pirataAtacando, pirataAndandoIMG;
var chao;
var esqueletoAndandoIMG;
var bau, bauA, bauFechado;
var pirata;
var esqueleto, esqueleto2, esqueleto3;

function preload() {
  chao = loadImage("assets/chao.jpg");
  pirataAndandoIMG = loadImage("assets/luffyandando.gif");
  pirataAtacando = loadImage("assets/luffysoco.gif");
  esqueletoAndandoIMG = loadImage("assets/Esqueletinho-unscreen.gif");

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
  createCanvas(windowWidth - 50, windowHeight - 50);
  engine = Engine.create();
  world = engine.world;
  pirata = Bodies.rectangle(100, height - 175, 120, 150);
  esqueleto = Bodies.rectangle(
    random(250, width - 100),
    height - 205,
    120,
    190
  );
  esqueleto2 = Bodies.rectangle(
    random(250, width - 100),
    height - 205,
    120,
    190
  );
  esqueleto3 = Bodies.rectangle(
    random(250, width - 100),
    height - 205,
    120,
    190
  );
  bau = createSprite(width-700, height-50,)
  bau.addAnimation("bau",bauA)
  bau.visible = false
  bau.scale = 4;

}

function draw() {
  background(chao);
  Engine.update(engine);
  drawSprites();
  image(pirataAndandoIMG, pirata.position.x, pirata.position.y, 120, 150);
  image(
    esqueletoAndandoIMG,
    esqueleto.position.x,
    esqueleto.position.y,
    120,
    190
  );
  image(
    esqueletoAndandoIMG,
    esqueleto2.position.x,
    esqueleto2.position.y,
    120,
    190
  );
  image(
    esqueletoAndandoIMG,
    esqueleto3.position.x,
    esqueleto3.position.y,
    120,
    190
  );
  if (collide(pirata, esqueleto) === true) {
    console.log("esqueleto1");
    image(pirataAtacando, pirata.position.x, pirata.position.y, 120, 150);
    pirataAndandoIMG.visible = false;
    setTimeout(() => {
      esqueleto.position.x = -100
      pirataAndandoIMG.visible = true;

    }, 0500);
  }
  if (collide(pirata, esqueleto2) === true) {
    console.log("esqueleto2");
    image(pirataAtacando, pirata.position.x, pirata.position.y, 120, 150);
    setTimeout(() => {
      esqueleto2.position.x = -100
    }, 0500);
  }
  if (collide(pirata, esqueleto3) === true) {
    console.log("esqueleto3");
    image(pirataAtacando, pirata.position.x, pirata.position.y, 120, 150);
    setTimeout(() => {
      esqueleto3.position.x = -100
    }, 0500);
  }
  if (esqueleto.position.x < -10&&esqueleto2.position.x < -10&&esqueleto3.position.x < -10){
    bau.visible = true
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    pirata.position.x = pirata.position.x + 50;
  }
  if (keyCode === LEFT_ARROW) {
    pirata.position.x = pirata.position.x - 50;
  }
  if (keyCode === UP_ARROW) {
    image(pirataAtacando, pirata.position.x, pirata.position.y, 120, 150);
    console.log("UP");
  }
}
function collide(body, esqueleto) {
    var colisao = dist(
      body.position.x,
      body.position.y,
      esqueleto.position.x,
      esqueleto.position.y
    );
    if (colisao <= 80) {
      
      return true;
    } else {
      return false;
    }
}
