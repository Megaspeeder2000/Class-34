var ball,database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

position = database.ref("Car/Position")
position.on("value",readData)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Car/Position").set(
        {
            x:ball.x+x,
            y:ball.y+y
        }

    )
}
function readData(data){
    var pos = data.val();
    ball.x = pos.x
    ball.y = pos.y
}
