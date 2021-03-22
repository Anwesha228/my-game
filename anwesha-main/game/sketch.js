var player 
var platform

function preload(){
  
 // backgroundImage = loadImage("image/bg1.png");
  boyy = loadImage("images/p1.gif");
  boyy2 = loadImage("images/p2.gif");
  boyy3 = loadImage("images/left.gif");
  bg = loadImage("images/bg.gif");
  
  plat = loadImage("images/platform1.gif");

 
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  ground1 = createSprite(300,300);
  ground1.addImage(bg);
  ground1.scale = 15;
 player = createSprite(200,400)
 player.addImage("b",boyy2)
 
 platform = createSprite(200,470);
 platform.addImage(plat);
 platform.scale = 0.49;
 
 
}

function draw() {
  //background(bg);
  // moving ground
 drawSprites();
 

 if (ground1.x < 0){
  ground1.x = ground1.width/2;
}



ground1.velocityX = -10;

 movingRight();
 movingLeft();
 jump();
 text(mouseX+","+mouseY,mouseX,mouseY)
}

function movingRight(){
  if(keyDown("right"))
  {player.x += 5
    player.addImage("b",boyy)
  }
  if(keyWentUp("right"))
  {
    player.addImage("b",boyy2)
  }
}

function movingLeft(){
  if(keyDown("left"))
 {player.x -= 5
   player.addImage("b",boyy3)
 }
 if(keyWentUp("left"))
 {
   player.addImage("b",boyy2)
 }
}

function jump(){
  if(keyDown("space")&& player.y<player.y +100 ){
    player.velocityY =- 10;
  }
  player.velocityY = player.velocityY + 0.8 

  player.collide(platform);
}