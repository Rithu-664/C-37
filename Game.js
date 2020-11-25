class Game{
    constructor(){
     
    }
    gameState(){
        var state = database.ref("gameState");
        state.on("value",function(data){gameState=data.val()})
    }

    start(){
        console.log(gameState)
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display(); 
            console.log(gameState) 
        }else if(gameState===1){
            car1 = createSprite(100,450);
            car2 = createSprite(200,450);
            car3 = createSprite(300,450);
            car4 = createSprite(400,450);
            cars = [car1,car2,car3,car4];
        }
    }
    update(state){
     database.ref('/').update({
         gameState:state
     }) 
    }

    play(){

    }
     
}

