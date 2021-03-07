var  wall;
var thickness,bullet;
var speed,weight;
function setup()
 {
  createCanvas(1600, 400);
  speed = random(223,321);
  weight = random(30,52)
  thickness = random(22,83);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
}

function draw() 
{

  
  if(bullet.x-wall.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  }
  if(damage>10)
  {
    bullet.shapeColor("red");
  }
  else
  {
    bullet.shapeColor("green");
  }

  background(255,255,255);  
  drawSprites();
}