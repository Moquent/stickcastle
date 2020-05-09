var wall1 , wall2, wall3, wall4, wall5, tri1, tri2, tri3, door;
function setup() {
  createCanvas(800,400);
  wall1 = createSprite(400, 300, 80, 300);
  wall2 = createSprite(328, 335, 60, 250);
  wall3 = createSprite(472, 335, 60, 250);
  wall4 = createSprite(261, 300, 70, 276);
  wall5 = createSprite(539, 300, 70, 276);
  
  fill("red");

  wall1.shapeColor = "brown";
  wall2.shapeColor = "brown";
  wall3.shapeColor = "brown";
  wall4.shapeColor = "brown";
  wall5.shapeColor = "brown";

  door = createSprite(400, 350, 70, 80);
  door.shapeColor = "yellow";

}

function draw() {
  background("black"); 

  tri1 = triangle(350, 150, 450, 150, 400, 40);
  tri2 = triangle(216, 162, 306, 162, 261, 50);
  tri3 = triangle(494, 162, 584, 162, 539, 50);
  
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();

  door.display();
  
  drawSprites();
}
