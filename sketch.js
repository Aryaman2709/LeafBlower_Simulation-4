//Create variables here
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var edges;
var leaf, leaf1, leaf2, leaf3, leaf4, leaf5;
var gameState = "play"
var leaves
var fruit;

var score = 0


function preload()
{
  //load images here
  backgroundImage = loadImage("garden.jpg");
  leafBlowerImage = loadImage("leafblower.png");
  leafImage = loadImage("leaf.png")

}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  leafBlower = createSprite(175,150,50,50)
  leafBlower.addImage(leafBlowerImage);
  leafBlower.scale = 0.35

 // invisible = createSprite(leafBlower.x, leafBlower.y, 175,150)
  //invisible.visible = false

  //invisible = new Invisible(leafBlower.x + 50, leafBlower.y, 175,150)

  leaves = new Group();
  leaves1 = new Group();



  
}


function draw() {
  background(backgroundImage);
  Engine.update(engine);

  if(gameState==="play"){
  if(keyDown(DOWN_ARROW)){
    leafBlower.y = leafBlower.y + 5;

  }

  if(keyDown(UP_ARROW)){
    leafBlower.y = leafBlower.y - 5;
    
  }

  if(keyDown(RIGHT_ARROW)){
    leafBlower.x = leafBlower.x + 5;
    
  }

  if(keyDown(LEFT_ARROW)){

    leafBlower.x = leafBlower.x - 5;
    
  }
 
  //leafBlower.debug = true;
  //leafBlower.setCollider(20,20);


 
  drawSprites();
  //add styles here

  fill("black")
  textSize(25)
  text("Score:"+ score, 500, 100);

  edges =  createEdgeSprites();
  leafBlower.collide(edges[0]);
  leafBlower.collide(edges[1]);
  leafBlower.collide(edges[2]);
  leafBlower.collide(edges[3]);

 

  if (frameCount%20===0){
    leaf = createSprite(random(100,700), random(100,700), 50,50);
    leaf.addImage(leafImage);


    leaves.add(leaf)

   if( leaves.isTouching(leafBlower)){
      leaves.setVelocityXEach(random(1,10));
      leaves.setVelocityYEach(random(1,10));
      score++
      }
  }
  }

if(frameCount%20===0){
  leaf1 = createSprite(random(100,700), random(100,700), 50,50);
  leaf1.addImage(leafImage);

  leaves1.add(leaf1)

  if(leaves1.isTouching(leafBlower)){
    leaves1.setVelocityXEach(random(1,10));
    leaves1.setVelocityYEach(random(1,10));
    score++;
  }


  
}
}

