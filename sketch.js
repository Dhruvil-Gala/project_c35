var ball,balli;
var bkg;
var dbref,database,position;

function preload(){
balli=loadImage("Hot Air Ballon-02.png");
bkg=loadImage("Hot Air Ballon-01.png")

database=firebase.database();
dbref=database.ref("balloon/position")
dbref.on("value",readPosition);
}
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.addImage(balli);
    ball.scale=0.3;
    ball.shapeColor = "red";
}

function draw(){
    background(bkg);
    if(position!=undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
}
    drawSprites();
}

function changePosition(x,y){
    dbref.set({x:position.x+x,y:position.y+y});
}
function readPosition(data){
    position=data.val();
    ball.x=position.x
    ball.y=position.y

}