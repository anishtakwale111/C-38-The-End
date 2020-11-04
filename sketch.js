var monkey, monkey_running;
var ground;
var invisibleGround;
var enemy, grapes, banana;
var banana_img;
var obstacle_img;
var sheild;
var y;
var backgrd, backgrd_IMG;
var reward;
var monkeyIMG, grapesIMG, bananaIMG, enemyIMG;
var Monkey;
var monkey;
var gameState = 1;
// var back, back2;

function preload() {
  backgrd_IMG = loadImage("jungle.jpg");
  monkeyIMG = loadImage("monkey.png");
  grapesIMG = loadImage("grapes.jpg");
  bananaIMG = loadImage("banana.png");
  enemyIMG = loadImage("robo.png");

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  backgrd = createSprite(100, 600, displayWidth+1200, 300)
  backgrd.addImage(backgrd_IMG)
  backgrd.scale = 2;

  invisibleGround = createSprite(100, 600, displayWidth+1200, 300)
  invisibleGround.visible = true;   
  invisibleGround.shapeColor = "brown";

  monkeyBody = createSprite(90, 370 , 60, 60);
  monkeyBody.addImage(monkeyIMG)
  monkeyBody.scale = 0.3;

  // assigning position the camera of the game
  camera.position.x = displayWidth;
  camera.position.y = y-100;

  ground = createSprite(400, 350, 800, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  ground.visible = false;

  // back = createSprite(monkeyBody.position.x - 40 , monkeyBody.position.y - 270, 200, 200)
  // back.shapeColor = "black"
  // back.visible = false

  // back2 = createSprite(monkeyBody.position.x - 40 , monkeyBody.position.y - 270, 200, 400)
  // back2.shapeColor = "black"
  // back2.visible = false
  
  //creating objects for obstacles
  enemy = createSprite(displayWidth+500, 300, 40, 40);
  enemy.addImage(enemyIMG)
  enemy.scale = 0.15

  banana = createSprite(displayWidth+500, 300, 40, 40);
  banana.addImage(bananaIMG)
  banana.scale = 0.1

  grapes = createSprite(displayWidth+500, 300, 40, 40);  
  grapes.addImage(grapesIMG)
  grapes.scale = 0.3

  sheild = createSprite(monkeyBody.position.x + 50, 370, 20, 35);
  sheild.shapeColor = "green"
  sheild.visible = false

}

function draw() {

  if(gameState === 1){

  background(0,100,0);

  textSize(30);
  drawSprites();
  fill(199,21,133)

  text("Save your Monkey by pressing UP_ARROW... from the robot", -250, 10);
  text("If grapes approach the monkey , wait to feed him grapes only if robot is not around", -250, 40);
  text("If bananas approach the monkey , wait to feed him bananas only if robot is not around", -250, 70);
  
  //setting the camera according to monkey
  camera.position.x = displayWidth;
  camera.position.y = monkeyBody.position.y;
  
  monkeyBody.collide(invisibleGround);

  if (backgrd.x < 100) {
    backgrd.x = backgrd.width / 2;
  }

  //creating grapes, enemy, and bananas for monkey

  if(frameCount%200 === 0){
    enemy = createSprite(displayWidth+500, 300, 40, 40);
    enemy.addImage(enemyIMG)
    enemy.scale = 0.15
  
    enemy.velocityX = -10
  } 
  if(frameCount%150 === 0){
    banana = createSprite(displayWidth+500, 300, 40, 40);
    banana.addImage(bananaIMG)
    banana.scale = 0.1

    banana.velocityX = -10
  }
  if(frameCount%270 === 0){
    grapes = createSprite(displayWidth+500, 300, 40, 40);  
    grapes.addImage(grapesIMG)
    grapes.scale = 0.3

    grapes.velocityX = -10
  }

  //to keep the monkey objects and backgrd in position

  if(camera.position.x < 300){
    enemy.velocityX = -10
}

  if(camera.position.x = 300){
    banana.velocityX = -13
}

  else{
    grapes.velocityX = -14
}

  if(monkeyBody.position.x === enemy.position.x && monkeyBody.position.y === enemy.position.y){
    monkeyBody.destroy();
  }

  if(monkeyBody.isTouching(grapes)){
    grapes.visible = false;
  }

  if(banana.isTouching(monkeyBody)){
    banana.visible = false;
  }

  //moving objects using keys
  if(keyDown("UP_ARROW")){
    monkeyBody.velocityY = -15;
  }
  monkeyBody.velocityY = monkeyBody.velocityY + 0.6;
  
  if (keyDown("g")) {
    monkeyBody.position.x =  monkeyBody.position.x + 5;
  }

  if (keyDown("b")) {
    monkeyBody.position.x =  monkeyBody.position.x - 5;
  }

  }

  if(frameCount=== 100000000){
    gameState = 2;

    enemy.velocityX = 0
    grapes.velocityX = 0
    banana.velocityX = 0

    // back.visible = true
    fill(255,0,255)

    text("YAY!! You WON the GAME !! ", monkeyBody.position.x , monkeyBody.position.y - 230);
  }
    if(monkeyBody.isTouching(enemy)){
    // back2.visible = true
    fill(255,0,255)
  
    text("OOPS!! You LOST the GAME...", monkeyBody.position.x , monkeyBody.position.y - 270);
    text("Refresh the page to play again...", monkeyBody.position.x , monkeyBody.position.y - 240);

    gameState = 2;

    monkeyBody.destroy();
  
    grapes.velocityX = 0
  
    banana.velocityX = 0
  
    enemy.velocityX = 0
    }
    
  

}
