var mouse,mouseFriendImg,mouseTeasing,mouseStanding;
var cat,catFriendImg,catWalking,catSitting;
var bgImg;



function preload() {
    
bgImg = loadImage("garden.png");
mouseFriendImg = loadImage("mouse4.png");
catFriendImg = loadImage("cat4.png");
catWalking = loadAnimation("cat2.png","cat3.png");
mouseTeasing = loadAnimation("mouse2.png","mouse3.png")
mouseStanding = loadImage("mouse1.png");
catSitting = loadImage("cat1.png");
}

function setup(){
    createCanvas(1000,800);

  mouse = createSprite(800,200);
  mouse.addImage(mouseStanding);

  cat = createSprite(200,800);
  cat.addImage(catSitting);

}

function draw() {

    background(255);
if(keyPressed){
  keyPressed
}

    if(cat.x-mouse.x < (cat.width/2 - mouse.width/2)){
      cat.addImage(catFriendImg);
      mouse.addImage(mouseFriendImg);
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation(mouseTeasing);
    cat.addAnimation(catWalking);
    mouseTeasing.frameDelay = 25;
  }


}
