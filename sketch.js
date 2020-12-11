const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var polygon;
var slingShot;
var polygonImage ; 
var score=0;
var bg = bg;
fill("WHITE")

function preload(){
  getBackgroundImage();
  
}
function setup() {
  createCanvas(1200,400);
  stroke(255)

  platform = new Ground(300,230 ,70 ,100);
  //level one 
  b1 = new Box(330,235,30,40) ; 
  b1.score();
  b2 = new Box(360,235,30,40);
  b2.score();
  b3 = new Box(390,235,30,40);
  b3.score();
  b4 = new Box(420,235,30,40);
  b4.score();
  b5 = new Box(450,235,30,40);
  b5.score();
  //level two  
  b6 = new Box(360,195,30,40);
  b6.score();
  b7 = new Box(390,195,30,40);
  b7.score();
  b8 = new Box(420,195,30,40);
  b8.score();


  //level three 
  b9 = new Box(390,15530,40);
  b9.score();


  polygon = Bodies.circle(50,200,20); 
  this.polygonImage = loadImage("polygon.png") ; 
  World.add(world,polygon) ; 

  slingShot = new Slingshot(this.polygon,{x:100,y:200});
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  a=a-1;
 
 text("SCORE" , score , 750 , 40 );
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 
 drawSprites();
}

function mouseDragged(){
  
  Matter.Body.setPosition(bird.body,{x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();   
}




function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
  
  if(keyCode === 32){
    slingshot.attach(this.polygon);
}
} 

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
  bg = fill("LIGHT BLUE"); 
  } else {
   bg =  fill("PURPLE");
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
