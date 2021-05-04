
var trex ,trex_running, trex_collided;
var ground, ground_img;
var invisibleGround

function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  
  trex_collided= loadAnimation("trex_collided.png")
    
  ground_img= loadImage("ground2.png")
                               

}

function setup(){
  createCanvas(600,200)
  
  trex= createSprite(50,180,50,50)
  trex.addAnimation( "running", trex_running); 
  trex.scale = .5;
  
  //create a trex sprite
  ground = createSprite(300,190,600,20 );
  ground.addImage(ground_img);
  ground.velocityX= -4
  
  invisibleGround= createSprite(300,200,600,20)
  invisibleGround.visible=false
}

function draw(){
  background("white")
  
  if(ground.x<0){
    ground.x=300
  }
  if(keyDown("space")&&trex.y>=166){
    trex.velocityY=-10
    
  }
  trex.velocityY=trex.velocityY+0.8
//console.log(trex.y)
// console.log(frameCount) 
  
  
  
  
  
  giveMeClouds()
  
  trex.collide(invisibleGround)
  drawSprites();

}


function giveMeClouds(){
  if(frameCount%60===0){
  var cloud= createSprite(601,60,20,20)
  cloud.velocityX= -4
  console.log(frameCount)
  }
  
}








