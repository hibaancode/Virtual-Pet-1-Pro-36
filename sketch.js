 //Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dog1 = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500,500);
dog = createSprite(250,300,150,150);
dog.addImage(dog1)

dog.scale = 0.2
database = firebase.database();
foodStock = database.ref('food')
foodStock.on("value",readStock)  
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  textSize(13);
  fill("white")
  stroke(0.5)
text("Note: Press Up arrow key to feed Choco",115,30)

  textSize(15);
  fill("white")
  stroke(0.5)
  text(" Food Remaining : " + foodS,180,180);

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0
  }else{
      x= x-1
    }
  }
