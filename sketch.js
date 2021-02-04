var movingRect,fixedRect,object1

function setup() {
  createCanvas(800,400);
 object1 = createSprite(400,100,50,25);
 object1.shapeColor = "yellow"
 fixedRect = createSprite(400, 200, 50, 50);
 fixedRect.shapeColor = "blue"
 movingRect = createSprite(300,200,50,30);
 movingRect.shapeColor = "green"
 object1.velocityY = 5;
 fixedRect.velocityY = -5;
}

function draw() {
  background(0); 
  
  //movingRect.x = mouseX
  //movingRect.y = mouseY
 
  
 if( touching(movingRect,object1) || touching(movingRect,fixedRect)){
  if( touching(movingRect,object1)){
    object1.shapeColor ="red";
    movingRect.shapeColor = "red";
  }
  if( touching(movingRect,fixedRect)){
    fixedRect.shapeColor ="red";
    movingRect.shapeColor = "red";
   }
 }
 else{
  object1.shapeColor ="yellow";
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "blue";
 }

bouncing(object1,fixedRect)

  drawSprites();
}

