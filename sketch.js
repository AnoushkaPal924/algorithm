var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.velocityX = -4;

  fixedRect = createSprite(300,200,50,100);
  fixedRect.shapeColor= "green";
  fixedRect.velocityX = 4

  movingRect.debug = true;
  fixedRect.debug = true;

}

function draw() {
  background(0);  

  /* movingRect.x = mouseX;
   movingRect.y = mouseY;*/

  // if(movingRect.x- fixedRect.x < movingRect.width/2+fixedRect.width/2 
  //   &&  fixedRect.x-movingRect.x <movingRect.width/2+fixedRect.width/2
  //   && movingRect.y- fixedRect.y < movingRect.height/2+fixedRect.height/2 
  //   &&  fixedRect.y-movingRect.y <movingRect.height/2+fixedRect.height/2)
  // {
  //   movingRect.shapeColor = "yellow";
  //   fixedRect.shapeColor = "yellow";
  // }
  // else{
  //   movingRect.shapeColor = "green";
  //   fixedRect.shapeColor = "green";
  // }

  if(movingRect.x- fixedRect.x < movingRect.width/2+fixedRect.width/2 
      &&  fixedRect.x-movingRect.x <movingRect.width/2+fixedRect.width/2){
        movingRect.velocityX = movingRect.velocityX*(-1);
        fixedRect.velocityX = fixedRect.velocityX*(-1);
      }

  drawSprites();
}