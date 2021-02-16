var cat, caatani, catfrnd , catimg
var mouse, mouseani, mousefrnd, catimg
var ground  , groundimg
function preload() {
    //load the images here

    catimg = loadImage("cat1.png");
    catani = loadAnimation("cat2.png", "cat3.png")
    catfrnd = loadImage("cat4.png");


    mouseimg = loadImage("mouse1.png");
    mouseani = loadAnimation("mouse2.png", "mouse3.png");

    mousefrnd = loadImage("mouse3.png");

    groundimg  = loadImage("garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(300,300)
    garden.addImage("groundimgage", groundimg);

    cat = createSprite(900,600,20,20)
    cat.addImage("catimage", catimg);

    mouse = createSprite(100,600,20,20);
    mouse.addImage("mouseimage", mouseimg)


}

function draw() {

    //background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
