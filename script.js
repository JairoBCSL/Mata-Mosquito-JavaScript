var altura = window.innerHeight,
  largura = window.innerWidth, vidas = 3, tempo = 10, tempoClick = 2000;

var resizeWindow = function() {
  altura = window.innerHeight;
  largura = window.innerWidth;
};
resizeWindow();

var nivel = window.location.search;
nivel = nivel.replace("?nivel=", "");
switch(nivel){
  case 'normal':{
    tempoClick = 1500;
    break;
  }
  case 'dificil':{
    tempoClick = 1000;
    break;
  }
  case 'chuck-norris':{
    tempoClick = 500;
    break;
  }
  default:{
    tempoClick = 2000;
    break;
  }
}

var criarMosquitoFunc = function(){

  if(document.getElementById("mosquito")){
    document.getElementById("mosquito").remove();
    if(vidas > 0){
      if(document.getElementById("v"+vidas).src.includes("cheio")){
        document.getElementById("v"+vidas).src = "imagens/coracao_vazio.png";
        vidas--;
      }
      if(vidas == 0){
        //alert("Morreu de dengue");
        window.location.href = "fim_de_jogo.html";
      }
    }
    
  }

  var tamanho = 40 + 20 * Math.floor(Math.random() * 3);
  var posX = Math.floor(Math.random() * (largura - tamanho));
  var posY = Math.floor(Math.random() * (altura - tamanho));
  var lado = Math.floor(Math.random() * 2);
  var mos = document.createElement("img");
  mos.id = "mosquito"
  mos.src = "imagens/mosquito.png";
  mos.style.position = "absolute";
  mos.style.left = posX + "px";
  mos.style.top = posY + "px"
  mos.style.width = tamanho + "px";
  mos.style.height = tamanho + "px";
  mos.style.transform = lado?"scaleX(1)":"scaleX(-1)"
  mos.onclick = function(){
    this.remove();
  };
  document.body.appendChild(mos);
  
}

var cronometro = setInterval(function() {
  if(tempo > 0)
    tempo -= 1;
  else{
    clearInterval(cronometro);
    clearInterval(criaMosquitoTimeout)
    window.location.href = "vitoria.html"
  }
  document.getElementById("cronometro").innerHTML = tempo;
}, 1000)



criarMosquitoFunc();
document.getElementById("cronometro").innerHTML = tempo;
var criaMosquitoTimeout = setInterval(criarMosquitoFunc, tempoClick);