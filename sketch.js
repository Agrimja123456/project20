var car,wall,speed,weight

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
speed=random(55,90);
weight=random(400,1500);
car.velocityX=speed;

}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<car.width/2+wall.width/2){
  car.velocityX=0
  var d =0.5*weight*speed*speed/22509;
  if(d>180){
    car.shapeColor=color(225,0,0);

  }
  if(d<180 && d>100){
    car.shapeColor=color(230,230,0);

  }
  if(d<100){
    car.shapeColor=color*(0,255,0);

  }
  
  
  }
  
  
  drawSprites();
}