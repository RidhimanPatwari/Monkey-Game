
var monkey , monkey_running;
var banana ,bananaImage, bananaGroup, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survival_time = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(100, 315, 20, 80);
  monkey.addAnimation("Running monkey", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200, 350, 900, 10);
  ground.velocityX = -4;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  survival_time = Math.round(frameCount/frameRate());
  
  stroke(3);
  textSize(15);
  text("Survival Time: " + survival_time, 150, 30);
  
  if (ground.x < 0) {
    ground.x = 400;
  }
  
  if (keyDown("space")) {
    monkey.velocityY = -8;
  }
  
  monkey.velocityY += 1;
  
  monkey.collide(ground);
  
  spawnBanana();
  
  spawnObstacle();
  
  drawSprites();
}


function spawnBanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(420, 200);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120, 200));
    banana.velocityX = -2;
    banana.lifetime = 230;
    FoodGroup.add(banana);
  }
}

function spawnObstacle() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(450, 300);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -2;
    obstacle.lifetime = 250;
    obstacleGroup.add(obstacle);
  }
}