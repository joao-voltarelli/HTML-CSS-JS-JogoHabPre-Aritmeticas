var imgQuadrado, imgTriangulo, imgCirculo, imgEstrela;
var p = document.getElementById("fase1");
var jogoFinalizado = document.getElementById("jogofinalizado");
var reinicia = document.getElementById("botaoReinicia");
var avanca = document.getElementById("botaoAvanca");
var imgFinal = document.getElementById("imgTelaFinal");
var p2 = document.getElementById("pontos1");
var pontuacao = document.getElementById("pontuacao");
var caminhoImgFinal="";
var vetorAux = [];
var fase=1;
var reiniciouFase = false;
var pontos = 0;

imgQuadrado = "imagens/figuras/quadrado_resposta.png";
imgTriangulo = "imagens/figuras/triangulo_resposta.png";
imgCirculo = "imagens/figuras/circulo_resposta.png";
imgEstrela = "imagens/figuras/estrela_resposta.png";

function iniciaFases(fase)
{
    jogoFinalizado.style.marginTop = "0%";
    jogoFinalizado.innerHTML = "";
    p.innerHTML = "Fase " + fase;

    if((fase>1 && fase < 5) || reiniciouFase == true)
    {
        document.getElementById("imgFase").style.display = "block";
        document.getElementById(vetorAux[0]).style.display = "block";
        document.getElementById(vetorAux[1]).style.display = "block";
        document.getElementById(vetorAux[2]).style.display = "block";
        document.getElementById(vetorAux[3]).style.display = "block";
    }

    var vetor = [];
    var rand;
    
    if(fase==1)
    {
        imgFase = document.getElementById("imgFase");
        imgFase.src = "imagens/figuras/quadrado_fase.png";
    }
    else if(fase==2)
    {
        imgFase = document.getElementById("imgFase");
        imgFase.src = "imagens/figuras/triangulo_fase.png";
    }
    else if(fase==3)
    {
        imgFase = document.getElementById("imgFase");
        imgFase.src = "imagens/figuras/circulo_fase.png";
    }
    else if(fase==4)
    {
        imgFase = document.getElementById("imgFase");
        imgFase.src = "imagens/figuras/estrela_fase.png";
    }
    else if(fase==5){
        caminhoImgFinal = localStorage.getItem("caminhoImgFinal");
        p.parentElement.removeChild(p);
        imgFinal.style.display = "block";
        imgFinal.src = caminhoImgFinal;
        avanca.style.display = "block";
        reinicia.style.display = "block";
    }

    for(i=0; i<4; i++)
        {
            rand = Math.floor((Math.random() * 4) + 1);
            if (vetor.includes(rand) == false) {
                vetor[i] = rand;
            } else {
                while (vetor.includes(rand) == true) {
                    rand = Math.floor((Math.random() * 4) + 1);
                }
                vetor[i] = rand;
            }
        }
    
    vetorAux = vetor;
    document.getElementById(vetor[0]).src = imgQuadrado;
    document.getElementById(vetor[0]).id = "quadrado"

    document.getElementById(vetor[1]).src = imgTriangulo;
    document.getElementById(vetor[1]).id = "triangulo";

    document.getElementById(vetor[2]).src = imgCirculo;
    document.getElementById(vetor[2]).id = "circulo";

    document.getElementById(vetor[3]).src = imgEstrela;
    document.getElementById(vetor[3]).id = "estrela";
}

function passaCaminho(idIMG)
{
    switch(idIMG)
    {
        case "batman":
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/batman.jpg");
        break;

        case "mulherMaravilha":
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/mulhermaravilha.jpg");
        break;

        case "homemAranha":
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/spiderman.jpg");
        break;

        case "superHomem":
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/superhomem.jpg");
        break;

        case "hulk":
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/hulk.jpg");
        break;

        case "viuvaNegra":
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/viuvanegra.png");
        break;
    }
}

idResposta;

function dragstart_handler(ev, idImg){
    var img = new Image();
    idResposta = idImg.id;

    if(idResposta == "quadrado")
        img.src = 'imagens/figuras/quadrado_resposta.png';
    else if(idResposta == "triangulo")
        img.src = 'imagens/figuras/triangulo_resposta.png';
    else if(idResposta == "circulo")
        img.src = 'imagens/figuras/circulo_resposta.png';
    else if(idResposta == "estrela")
        img.src = 'imagens/figuras/estrela_resposta.png';

    ev.dataTransfer.setDragImage(img, 10, 10);
}

function dragover_handler(ev) {
    ev.preventDefault();
    // Define o dropEffect para ser do tipo move
    ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
    ev.preventDefault();
    // Pega o id do alvo e adiciona o elemento que foi movido para o DOM do alvo
    var data = ev.dataTransfer.getData("text");
    atualizaFase();
    ev.target.appendChild(document.getElementById(data));
}

function atualizaFase(){
    if(fase==1 && idResposta=="quadrado"){
        fase++;
        pontos = pontos + 10;
        mostraBotao();
    }
    else if(fase==2 && idResposta=="triangulo"){
        fase++;
        pontos = pontos + 20;
        mostraBotao();
    }
    else if(fase==3 && idResposta=="circulo"){
        fase++;
        pontos = pontos + 30;
        mostraBotao();
    }
    else if(fase==4 && idResposta=="estrela"){
        fase++;
        pontos = pontos + 40;
        reiniciouFase = false;
        tocaMusicaAcerto();
        removeElementos();
        mudaFase();
    }
    else{
        if(pontos >= 5)
            pontos = pontos - 5;
        reiniciouFase = true;   
        mostraBotaoErro();
    }
}

function atualizaTela(){
    removeElementos();
    document.getElementById("quadrado").id = vetorAux[0];
    document.getElementById("triangulo").id = vetorAux[1];
    document.getElementById("circulo").id = vetorAux[2];
    document.getElementById("estrela").id = vetorAux[3];

    jogoFinalizado.style.marginTop = "40%";
}

function mostraBotao(){
    atualizaTela();
    tocaMusicaAcerto();
    jogoFinalizado.innerHTML = "Parabéns! Você acertou!";
    document.getElementById("botaofase2").style.display = "block";
}

function mostraBotaoErro() {
    atualizaTela();
    tocaMusicaErro();
    jogoFinalizado.innerHTML = "Que pena, você errou. Tente novamente!";
    document.getElementById("botaoTentaNovamente").style.display = "block";
}

function reiniciaFase() {
    document.getElementById("botaoTentaNovamente").style.display = "none";
    iniciaFases(fase);
}

function mudaFase(){
    document.getElementById("botaofase2").style.display = "none";
    iniciaFases(fase);
}

function removeElementos(){
    document.getElementById("imgFase").style.display = "none";
    document.getElementById("quadrado").style.display = "none";
    document.getElementById("triangulo").style.display = "none"
    document.getElementById("circulo").style.display = "none"
    document.getElementById("estrela").style.display = "none"
    pontuacao.innerHTML = pontos;
}

function tocaMusicaAcerto() {
    var audio = new Audio();
    audio.src = "sons/correct.mp3";
    audio.play();
}

function tocaMusicaErro() {
    var audio = new Audio();
    audio.src = "sons/wrong.m4a";
    audio.play();
}

function iniciaJogo() {
    window.location.assign("fases.html");
}

function reiniciaJogo() {
    window.location.assign("paginaInicial.html");
}