
  

var car,wall;
var weight,speed;
var deformation;



function setup() {
  weight=random(400,1500);
speed=random(55,90);
  createCanvas(1600,400);
 // createSprite(400,200,20,20);
  wall=createSprite(1500,200,50,height/2);
  car=createSprite(50,200,20,20);
  car.velocityX = speed;
  car.shapeColor=color(255);
  wall.shapeColor=color(80,80,80);
} 
function draw()
{
  background(0,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 *weight * speed * speed/22509;

    if(deformation>180){
      car.shapeColor=shapeColor(255,0,0);
    }

    if(deformation>180 &&deformation>100){
      car.shapeColor=color(230,230,0);
    }

   if(deformation<100){
     car.shapeColor=color(0,255,0);
   }


   }



  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}