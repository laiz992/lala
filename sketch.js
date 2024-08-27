let posicaoXbolinha=300 // define a posicao x da bolinha
let posicaoYbolinha=300 // define a posicao y da bolinha
let diametro=20 //tamanho da bolinha
let cor //cor da bolinha
//bolinha2 
let posicaoXbolinha2=113
let posicaoYbolinha2=114
let diametro2=20
let cor2

function setup() {  
  createCanvas(600, 600);
  background(64,224,208);
  cor=color(random(0,255),random(0,255),random(0,255))
  cor2=color(random(0,255),random(0,255),random(0,255))
}
function draw() {
  fill(cor)
  circle(posicaoXbolinha,posicaoYbolinha,diametro)
  fill(cor2)
  circle(posicaoXbolinha2,posicaoYbolinha2,diametro2)
 // posicaoXbolinha=posicaoXbolinha+1
 // posicaoYbolinha=posicaoYbolinha+1
  diametro=diametro+1
  diametro2=diametro+1
  
if(mouseIsPressed){
     cor=color(random(0,255),random(0,255),random(0,255))
  cor2=color(random(0,255),random(0,255),random(0,255))
  }

}
function mousePressed(){
  background(64,224,208)
}