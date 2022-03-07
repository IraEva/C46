var Girl1,Girl2,Girl3,Girl4,Girl5,Girl6 ; 
var Girl;
var strawberry;
var grape;
var knife; 

function preload(){
  Girl_running = loadAnimation("Girl1.png","Girl2.png","Girl3.png","Girl4.png","Girl5.png","Girl6.png");
  strawberry = loadImage("Strawberry.png");
  grape = loadImage("Grape.png");
  knife = loadImage("Knife.png");
}

function setup() {
  createCanvas(600, 600);
  Girl = createSprite(100,250,10,15);
  Girl.addAnimation("running",Girl_running);
}

function draw() {
  background(200);
  drawSprites()
}




