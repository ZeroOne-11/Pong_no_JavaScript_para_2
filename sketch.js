//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;

//VelocidadeDaBolinha
let velocidadeXbolinha = 5;
let velocidadeYbolinha = 5;

//Variáveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let largura = 10;
let altura = 100;

//Variáveis da Raquete Oposta
let xRaqueteOposta = 585;
let yRaqueteOposta = 150;

//Pontuação
let meusPontos = 0;
let pontosOponente = 0;

//Sons
let trilha;
let ponto;
let raquetada;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  ApariçaoDaBolinha();
  MovimentoDaBolinha();
  Colisoes();
  ApariçaoDaRaquete();
  MovimentoDaRaquete();
  ApariçaoDaRaqueteOposta();
  MovimentoDaRaqueteOposta();
  Pontuaçao();
  ApariçaoDoPlacar();
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function ApariçaoDaBolinha(){
  fill(1000);
  circle(xBolinha, yBolinha, diametro);
}

function MovimentoDaBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function Colisoes(){
     if(xBolinha + raio > width || xBolinha - raio < 0){
     velocidadeXbolinha *= -1;
     ponto.play();
     }
     if(yBolinha + raio > height || yBolinha  - raio < 0){
     velocidadeYbolinha *= -1;
     }
     if(xBolinha - raio < xRaquete + largura && yRaquete + altura > yBolinha - raio && yRaquete < yBolinha - raio){
     velocidadeXbolinha *= -1;
     raquetada.play();
     }
     if(yRaquete < 0){
     yRaquete = 0;
     }
     if(yRaquete > height - altura){
     yRaquete = height - altura;
     }
     if(xBolinha + raio > xRaqueteOposta && yRaqueteOposta + altura > yBolinha + raio && yRaqueteOposta < yBolinha + raio){
     velocidadeXbolinha *= -1;
     raquetada.play();
     }
     if(yRaqueteOposta < 0){
     yRaqueteOposta = 0;
     }
     if(yRaqueteOposta > height - altura){
     yRaqueteOposta = height - altura;
     }
}

function ApariçaoDaRaquete(){
  fill(1000);
  rect(xRaquete, yRaquete, largura, altura);
}

function MovimentoDaRaquete(){
     if(keyIsDown(87)){
     yRaquete -= 7;
     }
     if(keyIsDown(83)){
     yRaquete += 7;
     }
}

function ApariçaoDaRaqueteOposta(){
  fill(1000)
  rect(xRaqueteOposta, yRaqueteOposta, largura, altura);
}

function MovimentoDaRaqueteOposta(){
    if(keyIsDown(UP_ARROW)){
    yRaqueteOposta -= 7;
    }
    if(keyIsDown(DOWN_ARROW)){
    yRaqueteOposta += 7;
    }
}

function Pontuaçao(){
     if(xBolinha - raio < 0){
     meusPontos += 1;
     }
     if(xBolinha + raio > width){
     pontosOponente += 1;
     }
}

function ApariçaoDoPlacar(){
     stroke(0);
     textSize(20);
     textAlign(CENTER);
     fill("#2196F3");
     rect(230, 5, 40, 26, 5);
     fill("#2196F3");
     rect(370, 5, -40, 26, 5);
     fill(0);
     text(meusPontos, 350, 25);
     fill(0);
     text(pontosOponente, 250, 25);
}