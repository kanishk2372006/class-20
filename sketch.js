var fixedrect,movingrect;





function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);

  movingrect=createSprite(100,100,50,50);
}

function draw() {
  background("black");  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2 && movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";

  }
  else{
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
  drawSprites();
}