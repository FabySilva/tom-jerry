
function preload() {
    //carregue as imagens aqui
    bg = loadImage('images/garden.png')
    cat1 = loadImage('images/cat1.png')
    cat2 = loadImage('images/cat2.png','images/cat3.png')
    cat3 = loadImage('images/cat4.png')
    m1 = loadImage('images/mouse1.png')
    m2 = loadImage('images/mouse2.png','images/mouse3.png')
    m3 = loadImage('images/mouse4.png')

}   

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    tom = createSprite(800,600)
    tom.addAnimation('p',cat1)
    tom.scale = 0.2

    jerry = createSprite(100,600)
    jerry.addAnimation('r',m1)
    jerry.scale = 0.2
}

function draw() {

    background(bg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0
        tom.addAnimation("a",cat3)
        tom.x = 300
        tom.scale = 0.2
        tom.changeAnimation("a")
        jerry.addAnimation("b",m3)
        jerry.scale = 0.2
        jerry.changeAnimation("b")
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if(keyCode === LEFT_ARROW){
    jerry.addAnimation('d',m2)
    jerry.changeAnimation('d')
    jerry.frameDelay = 25;

    tom.velocityX = -5
    tom.addAnimation("v",cat2)
    tom.changeAnimation("v")
  }

}
