  var actions = { preload: preload, create: create,update: update };
  var game = new Phaser.Game(790, 400, Phaser.AUTO, "game", actions);

 var score = 0;

 var labelScore;

 var player;

 var pipes = [];

 var pipeInterval = 1.75;

 function preload() {
  game.load.image("playerImg","../assets/donkey.png");
  game.load.audio("score", "../assets/point.ogg");
  game.load.image("pipeBlock","../assets/pipe2-body.png");
 }


 function create() {
  game.stage.setBackgroundColor("#F3D3A3");
  game.add.text(20, 20, "Welcome to Flappy Donkey.",
  {font: "30px Arial", fill: "#FFFFFF"});
  labelScore = game.add.text(20, 60, "0",
  {font: "30px Arial", fill: "#FFFFFF"});
  player = game.add.sprite(80, 200, "playerImg");
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.enable(player);
  player.body.gravity.y = 200;

  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(playerJump);
  game.time.events.loop(pipeInterval * Phaser.Timer.SECOND, generatePipe);
 }


 function update() {
  game.physics.arcade.overlap(player, pipes, gameOver);
 }


 function addPipeBlock(x, y) {
  var block = game.add.sprite(x,y,"pipeBlock");
  pipes.push(block);
  game.physics.arcade.enable(block);
  block.body.velocity.x = -200;
 }



 function generatePipe() {
  var gapStart = game.rnd.integerInRange(1, 5);
  for (var count = 0; count < 8; count++) {
  if(count != gapStart && count != gapStart+1){
  addPipeBlock(750, count * 50);
  }
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

function gameOver() {

location.reload();
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
