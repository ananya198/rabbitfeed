var garden,rabbit;
var gardenImg,rabbitImg;
var  invisibleGround;
var apple,orangeleaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  createCanvas(400,400);
// Moving background
garden=createSprite(815,400);
garden.addImage(gardenImg);
garden.x=garden.width/2;

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.mouseX;
if (keyDown("left")){
  rabbit.x=rabbit.x-6;
}

if (keyDown("right")){
rabbit.x=rabbit.x+6;
}
if (keyDown("up")){
  rabbit.y=rabbit.x-6;

  }
  if (keyDown("down")){
    rabbit.y=rabbit.x+6;
    }



  
  invisibleGround = createSprite(405,405,400,10);
  invisibleGround.visible = false;


}




function draw() {
  background(180);
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      createApples();
    } else  (select_balloon == 2)
      createLeaves();
    
  
  }

   
  
  garden.collide(invisibleGround);
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);



   createApples();
   createLeaves();

    drawSprites();
}
function createApples(){
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
      apple = createSprite(600,100,40,10);
      apple.y = Math.round(random(10,60));
      apple.addImage(apple.png);
      apple.scale = 0.5;
      apple.velocityX = -3;
      
       //assign lifetime to the variable
      apple.lifetime = 200;
      
      //adjust the depth
      apple.depth = rabbit.depth;
      apple.depth = rabbit.depth + 1;
    }
    
  }
function createLeaves(){
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
      orangeleaf = createSprite(600,100,40,10);
      orangeleaf.y = Math.round(random(10,60));
      orangeleaf.addImage(cloudImage);
      orangeleaf.scale = 0.5;
      orangeleaf.velocityX = -3;
      
       //assign lifetime to the variable
      orangeleaf.lifetime = 200;
      
      //adjust the depth
      orangeleaf.depth = rabbit.depth;
      orangeleaf.depth = rabbit.depth + 1;
    }
    
  }

