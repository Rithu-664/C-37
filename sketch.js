var database,gameState=0;
var game,player,form;
var playerCount=0;
var allPlayers;
var car1,car2,car3,car4,cars;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
 
  game = new Game();
  game.gameState();
  game.start();
  game.gameState();
 
}

function draw(){
  background("white");

  if(playerCount>=4){
    game.update(1);
   
  }

  if(gameState===1){
    clear();
    game.play();
   
  }
  
 
   
    drawSprites();
  
}
