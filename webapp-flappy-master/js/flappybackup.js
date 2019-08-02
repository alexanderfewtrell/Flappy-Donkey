var actions = { preload: preload, create: create,update: update };

var width = 790

var height = 400;
var game = new Phaser.Game(width, height, Phaser.AUTO, "game", actions);

var score = 0;

var gapSize = 135;

var blockHeight = 50;

var gapMargin = 30;

var labelScore;

var player;

var pipes = [];

var pipeInterval = 1.75;

var splashDisplay

function preload() {
game.load.image("playerImg","../assets/donkey.png");
game.load.audio("score", "../assets/point.ogg");
game.load.image("pipeBlock","../assets/pipe2-body.png");
}


function create() {

game.stage.setBackgroundColor("#F3D3A3");

labelScore = game.add.text(20, 20, "0",
{font: "30px Arial", fill: "#FFFFFF"});
player = game.add.sprite(80, 200, "playerImg");
player.kill();
game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.arcade.enable(player);

var pipeInterval = 1.75;
game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(playerJump);
game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.add(start);
splashDisplay = game.add.text(200,200, "Press ENTER to start")

//  player.anchor.setTo(0.5, 0.5);
}


function update() {
game.physics.arcade.overlap(player, pipes, gameOver);

if (player.body.position.y>400){
  player.body.position.y=0;
}
if(player.body.position.y<0){
  player.body.position.y=400;
  //player.rotation += 1;
  //player.rotation = Math.atan(player.body.velocity.y / 200);

}
}

function start() {
 player.revive();
 player.body.gravity.y = 200;
game.time.events.loop(pipeInterval * Phaser.Timer.SECOND, generatePipe);
 splashDisplay.destroy();
}

function addPipeBlock(x, y) {
var block = game.add.sprite(x,y,"pipeBlock");
pipes.push(block);
game.physics.arcade.enable(block);
if (score > 40) {
  splashDisplay = game.add.text(200,200, "You're a God at Flappy Donkey!")
} else {
  if (score > 30) {
    block.body.velocity.x = 125;
  } else {
    if (score > 20) {
      block.body.velocity.x = 150;
    } else {
      if (score > 10) {
        block.body.velocity.x = 175;
      } else {
          block.body.velocity.x = 200;
        }
      }
    }
  }
}



//function generatePipe() {
//  var gapStart = game.rnd.integerInRange(1, 5);
//  for (var count = 0; count < 8; count++) {
//  if(count != gapStart && count != gapStart+1){
//  addPipeBlock(750, count * 50);
//}
function generatePipe() {
  var gapStart = game.rnd.integerInRange(gapMargin, height - gapSize - gapMargin);

  for(var y = gapStart; y > 0; y-= blockHeight){
    addPipeBlock(width, y - blockHeight);
  }
  for(var y = gapStart + gapSize; y < height; y += blockHeight) {
    addPipeBlock(width, y);
  }
  changeScore();
}

function playerJump() {
player.body.velocity.y = -200;
game.sound.play("score");
}

function changeScore() {
score++;
labelScore.setText(score.toString());
}

// function gameOver() {
//    registerScore(score);
// location.reload();
// }
function gameOver(){

 registerScore(score);
 game.state.restart();

// game.state.restart();
score = 0;
}

// the Game object used by the phaser.io library


// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)

//var player;
//var player2;
//var score = 0;
//var labelScore;

//game.add.image(150,0,"bg");

//  game.add.sprite(10, 200, "playerImg2");
//  game.input.onDown.add(clickHandler);
//labelScore = game.add.text(10, 10, "0");
//  player2 = game.add.sprite(100,100,"playerImg3");



//  game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
                  // .onDown.add(moveRight);
//game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
              //  .onDown.add(moveLeft);
//game.input.keyboard.addKey(Phaser.Keyboard.UP)
                //.onDown.add(moveUp);
//game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
              //  .onDown.add(moveDown);
              //  game.input.keyboard.addKey(Phaser.Keyboard.D)
                                   //.onDown.add(moveRight2);
            //  game.input.keyboard.addKey(Phaser.Keyboard.A)
                              //  .onDown.add(moveLeft2);
            //  game.input.keyboard.addKey(Phaser.Keyboard.W)
                              //  .onDown.add(moveUp2);
            //  game.input.keyboard.addKey(Phaser.Keyboard.S)
                                //.onDown.add(moveDown2);
//game.input
//  .keyboard.addKey(Phaser.Keyboard.SPACEBAR)
//  .onDown.add(spaceHandler);




/*
* This function updates the scene. It is called for every new frame.
*/




//function clickHandler(event) {
//  game.add.sprite(event.x, event.y, "playerImg4", "../assets/rflash.png");
//  changeScore();
//}
//function spaceHandler() {
//  game.sound.play("score");
//}
//function changeScore() {
//score+=1;
//labelScore.setText(score.toString());
//}
//function moveRight() {
//    player.x = player.x + 5;
//}
//function moveLeft() {
//    player.x = player.x - 5;
//}
//function moveDown() {
//    player.y = player.y + 5;
//}
//function moveUp() {
//    player.y = player.y - 5;
//}
//function moveRight2() {
//    player2.x = player2.x + 5;
//}
//function moveLeft2() {
//    player2.x = player2.x - 5;
//}
//function moveDown2() {
//    player2.y = player2.y + 5;
//}
//function moveUp2() {
//    player2.y = player2.y - 5;
//}
