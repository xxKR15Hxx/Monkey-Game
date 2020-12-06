var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground, invGround;
var survival
var score = 0
var play = 0;
var end = 1;
var gameState = play; 


function preload(){

monkey_running = 
  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas (600, 600) 
  
  monkey = createSprite(90,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,1800,10);
  ground.x = ground.width/2;
  ground.velocityX = -4;
  console.log(ground)
  invGround = createSprite(400,360,900,10)
 invGround.visible = false;
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  console.log("hello")
}


function draw() {

background("white");
   if(ground.x < 0) {
      ground.x = ground.width/2;
   }
  if (gameState == play) {
  if(keyDown("space") && monkey.y > 200)  {
     monkey.velocityY = -10
     }
  monkey.velocityY = monkey.velocityY + 0.8;
spawnFood();
spawnobs();
monkey.collide(ground)
     
  }
if(obstacleGroup.isTouching(monkey)){ 
  gameState = end
} 
  if(gameState === end) {
    ground.velocityX = 0; 
  monkey.velocityY = 0; 
  obstacleGroup.setVelocityXEach(0); 
  FoodGroup.setVelocityXEach(0); 
  obstacleGroup.setLifetimeEach(-1); 
  FoodGroup.setLifetimeEach(-1); 
stroke("black")
textSize(20);
fill("black");
 text("Press Ctrl + r to restart", 200, 200)
  }
stroke("black")
textSize(20);
fill("black");
survival=Math.ceil(frameCount/frameRate());
text("SurvivalTime: " + survival, 100,50);
  

  if(keyDown("r")) {
    gameState = play
  }

  
  
  
drawSprites(); 

 
  }
  
  function spawnFood() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1
    banana.velocityX = -5;
    banana.lifetime = 200
    FoodGroup.add(banana);
  }
}
function spawnobs(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,330,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.1;
    obstacle.lifetime = 200
    obstacleGroup.add(obstacle);
  }
}












