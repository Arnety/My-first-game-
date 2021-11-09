var ball 


function setup() {
  createCanvas(500,500);
  ball = createSprite( 200,200,25,25)
  ball.shapeColor = ("green")
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    ball.position.x = ball.position.x +5;
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    ball.position.x = ball.position.x -5;
  }



  drawSprites()
   

}




