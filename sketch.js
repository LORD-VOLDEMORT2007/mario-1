var distance
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  
  distance = 0
  for (i = 0; i < 20; i += 1){

    platform1=new Platform(distance);


    distance = distance + platform1.rw 
  }


}

function draw() {
  background('skyblue'); 



 drawSprites();
}

