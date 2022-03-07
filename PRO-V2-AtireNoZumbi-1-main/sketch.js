var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
 
  

//criando o sprite do jogador


}

function draw() {
  background(0); 




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques



//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada


//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço

drawSprites();

}
