var s1;
var s2;

function setup() {
  createCanvas(800,400);
  s1=createSprite(230,190,60,80);
  s2=createSprite(400, 200, 50, 90);
  s1.shapeColor="red";
  s2.shapeColor="green";
}

function draw() {
  background("yellow");  
  s1.x=mouseX;
  s1.y=mouseY;
  console.log(s1.x);
  console.log(s1.y)
  if(s1.x-s2.x<s1.width/2+s2.width/2
    && s2.x-s1.x<s1.width/2+s2.width/2
    && s1.y-s2.y < s1.height/2+s2.height/2
    && s2.y-s1.y < s1.height/2+s2.height/2){
    s1.shapeColor="white";
  }
  else{
    s1.shapeColor="red";
  }
  drawSprites();
}