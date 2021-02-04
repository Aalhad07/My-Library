function touching(box1,box2) {
    if (box1.x - box2.x <= (box1.width/2 + box2.width/2)
    && box2.x - box1.x <= (box1.width/2 + box2.width/2)
    && box1.y - box2.y <= (box1.height/2 + box2.height/2)
    && box2.y - box1.y <= (box1.height/2 + box2.height/2)){
      return true
   }
   else{
      return false
   }
  }

function bouncing(box1,box2) {
    if (box1.x - box2.x <= (box1.width/2 + box2.width/2)
    && box2.x - box1.x <= (box1.width/2 + box2.width/2)){
        box1.velocityX = box1.velocityX * (-1);
        box2.velocityX = box2.velocityX * (-1);
    }
    if ( box1.y - box2.y <= (box1.height/2 + box2.height/2)
    && box2.y - box1.y <= (box1.height/2 + box2.height/2)) {
        box1.velocityY = box1.velocityY * (-1);
        box2.velocityY = box2.velocityY * (-1);
    }
}