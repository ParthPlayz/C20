var a,b
function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 50, 80);
  b=createSprite(300,100,40,30)
  a.shapeColor="green"
  b.shapeColor="green"
}

function draw() {
  background(0,0,0);   
  a.x=World.mouseX;
  a.y=World.mouseY;
  if(a.x-b.x<45 && b.x-a.x<45 &&  a.y-b.y <45 &&b.y-a.y<45){

  
    a.shapeColor="red"
    b.shapeColor="red"
  }
  else{
    a.shapeColor="green"
    b.shapeColor="green"
  }
  drawSprites();

}