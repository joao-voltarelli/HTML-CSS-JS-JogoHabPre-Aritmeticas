var seleciona = 1;
var tocaMusica = 1;
var numerosTabela = 3;
var pontos = 0;
var caminhoImg="", caminhoImgFinal="";
var div = document.getElementById('tab');
var table = document.createElement('table');
var tbody = document.createElement('tbody');
var jogoFinalizado = document.getElementById("jogofinalizado");
var p = document.getElementById("fase1");
var p2 = document.getElementById("pontos1");
var pontuacao = document.getElementById("pontuacao");
var b1 = document.getElementById("botaoOpcao1")
var b2 = document.getElementById("botaoOpcao2")
var b3 = document.getElementById("botaoOpcao3")
var b4 = document.getElementById("botaoOpcao4")
var avanca = document.getElementById("botaoAvanca");
var reinicia = document.getElementById("botaoReinicia");
var imgFinal = document.getElementById("imgTelaFinal");

function startGame(mudar) {
    jogoFinalizado.style.marginTop = "0%";
    jogoFinalizado.innerHTML = "";
    p.innerHTML = "Fase " + seleciona;

    if (seleciona == 1 || seleciona == 2 || seleciona == 3 || seleciona == 4 || seleciona == 5)
    {
        b1.style.display = "inline";
        b2.style.display = "inline";
        b3.style.display = "inline";
        b4.style.display = "inline";
        criaTabela(numerosTabela, numerosTabela);
    }
    else if(seleciona == 6)
    {
        caminhoImgFinal = localStorage.getItem("caminhoImgFinal");
        p.parentElement.removeChild(p);
        b1.parentElement.removeChild(b1);
        b2.parentElement.removeChild(b2);
        b3.parentElement.removeChild(b3);
        b4.parentElement.removeChild(b4);
        imgFinal.style.display = "block";
        imgFinal.src = caminhoImgFinal;
        avanca.style.display = "block";
        reinicia.style.display = "block";
    }
}

function atualizaCaminho(idIMG)
{
    switch(idIMG)
    {
        case "batman":
            localStorage.setItem("caminhoImg", "imagens/fases/batman.png");
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/batman.jpg");
        break;

        case "mulherMaravilha":
            localStorage.setItem("caminhoImg", "imagens/fases/mulher-maravilha.jpg");
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/mulhermaravilha.jpg");
        break;

        case "homemAranha":
            localStorage.setItem("caminhoImg", "imagens/fases/spiderman.jpg");
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/spiderman.jpg");
        break;

        case "superHomem":
            localStorage.setItem("caminhoImg", "imagens/fases/super-homem.jpg");
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/superhomem.jpg");
        break;

        case "hulk":
            localStorage.setItem("caminhoImg", "imagens/fases/hulk.jpg");
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/hulk.jpg");
        break;

        case "viuvaNegra":
            localStorage.setItem("caminhoImg", "imagens/fases/viuva-negra.jpg");
            localStorage.setItem("caminhoImgFinal", "imagens/fases/tela-final/viuvanegra.png");
        break;
    }
}

function criaTabela(linhas, colunas) {

    var j, i, w = 0;
    var id = 0;

    for (i = 0; i < colunas; i++) {
        var tr = document.createElement('tr');
        for (j = 0; j < linhas; j++) {
            if (i == colunas && j == linhas) {
                break;
            } else {
                var td = document.createElement('td');
                id = id + 1;
                td.setAttribute("id", id);
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    div.appendChild(table);
    populaTabela((numerosTabela*numerosTabela))
}

function populaTabela(tamanhoTabela) {
    var vetor = [];
    var rand;
    caminhoImg = localStorage.getItem("caminhoImg");

    if (seleciona == 1)
    {   
        for(i=0; i<3; i++)
        {
            rand = Math.floor((Math.random() * tamanhoTabela) + 1);
            if (vetor.includes(rand) == false) {
                vetor[i] = rand;
            } else {
                while (vetor.includes(rand) == true) {
                    rand = Math.floor((Math.random() * tamanhoTabela) + 1);
                }
                vetor[i] = rand;
            }
            document.getElementById(rand).style.background = "url("+caminhoImg+") no-repeat"
            document.getElementById(rand).style.backgroundSize = "contain";
        }
        document.getElementById("botaoOpcao1").value = 1;
        document.getElementById("botaoOpcao2").value = 2;
        document.getElementById("botaoOpcao3").value = 3;
        document.getElementById("botaoOpcao4").value = 4;
    }

    if (seleciona == 2)
    {   
        for(i=0; i<4; i++)
        {
            rand = Math.floor((Math.random() * tamanhoTabela) + 1);
            if (vetor.includes(rand) == false) {
                vetor[i] = rand;
            } else {
                while (vetor.includes(rand) == true) {
                    rand = Math.floor((Math.random() * tamanhoTabela) + 1);
                }
                vetor[i] = rand;
            }
            
            document.getElementById(rand).style.background = "url("+caminhoImg+") no-repeat"
            document.getElementById(rand).style.backgroundSize = "contain";
        }
        document.getElementById("botaoOpcao1").value = 4;
        document.getElementById("botaoOpcao2").value = 3;
        document.getElementById("botaoOpcao3").value = 2;
        document.getElementById("botaoOpcao4").value = 1;
    }

    if (seleciona == 3)
    {   
        for(i=0; i<5; i++)
        {
            rand = Math.floor((Math.random() * tamanhoTabela) + 1);
            if (vetor.includes(rand) == false) {
                vetor[i] = rand;
            } else {
                while (vetor.includes(rand) == true) {
                    rand = Math.floor((Math.random() * tamanhoTabela) + 1);
                }
                vetor[i] = rand;
            }
            
            document.getElementById(rand).style.background = "url("+caminhoImg+") no-repeat"
            document.getElementById(rand).style.backgroundSize = "contain";
        }
        document.getElementById("botaoOpcao1").value = 5;
        document.getElementById("botaoOpcao2").value = 4;
        document.getElementById("botaoOpcao3").value = 3;
        document.getElementById("botaoOpcao4").value = 2;
    }

    if (seleciona == 4)
    {   
        for(i=0; i<7; i++)
        {
            rand = Math.floor((Math.random() * tamanhoTabela) + 1);
            if (vetor.includes(rand) == false) {
                vetor[i] = rand;
            } else {
                while (vetor.includes(rand) == true) {
                    rand = Math.floor((Math.random() * tamanhoTabela) + 1);
                }
                vetor[i] = rand;
            }
            
            document.getElementById(rand).style.background = "url("+caminhoImg+") no-repeat"
            document.getElementById(rand).style.backgroundSize = "contain";
        }
        document.getElementById("botaoOpcao1").value = 4;
        document.getElementById("botaoOpcao2").value = 6;
        document.getElementById("botaoOpcao3").value = 7;
        document.getElementById("botaoOpcao4").value = 5;
    }

    if (seleciona == 5)
    {   
        for(i=1; i<10; i++)
        {
            document.getElementById(i).style.background = "url("+caminhoImg+") no-repeat"
            document.getElementById(i).style.backgroundSize = "contain";
        }
        document.getElementById("botaoOpcao1").value = 1;
        document.getElementById("botaoOpcao2").value = 7;
        document.getElementById("botaoOpcao3").value = 5;
        document.getElementById("botaoOpcao4").value = 9;
    }
}

function verificaResposta(id_botao)
{
    if(seleciona == 1)
    {
        if(document.getElementById(id_botao).value == "3"){
            pontos = pontos + 10;
            mostraBotao();
        }
        else{
            if(pontos >= 5)
            {
                pontos = pontos - 5;
            }
            mostraBotaoErro();
        }
    }

    else if(seleciona == 2)
    {
        if(document.getElementById(id_botao).value == "4"){
            pontos = pontos + 15;
            mostraBotao();
        }
        else{
            if(pontos >= 5)
            {
                pontos = pontos - 5;
            }
            mostraBotaoErro();
        }
    }

    else if(seleciona == 3)
    {
        if(document.getElementById(id_botao).value == "5"){
            pontos = pontos + 20;
            mostraBotao();
        }
        else{
            if(pontos >= 5)
            {
                pontos = pontos - 5;
            }
            mostraBotaoErro();
        }
    }

    else if(seleciona == 4)
    {
        if(document.getElementById(id_botao).value == "7"){
            pontos = pontos + 25;
            mostraBotao();
        }
        else{
            if(pontos >= 5)
            {
                pontos = pontos - 5;
            }
            mostraBotaoErro();
        }
    }

    else if(seleciona == 5)
    {
        if(document.getElementById(id_botao).value == "9")
        {
            pontos = pontos + 30;
            pontuacao.innerHTML = pontos;
            tocaMusicaAcerto();
            mudaFase();
        }
        else{
            if(pontos >= 5)
            {
                pontos = pontos - 5;
            }
            mostraBotaoErro();
        }
    }
}

function limpaTela(){
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
    b1.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.display = "none";

    jogoFinalizado.style.marginTop = "40%";
    pontuacao.innerHTML = pontos;
}

function mostraBotao() {
    limpaTela();
    tocaMusicaAcerto();
    jogoFinalizado.innerHTML = "Parabéns! Você acertou!";
    document.getElementById("botaofase2").style.display = "block";
}

function mostraBotaoErro() {
    limpaTela();
    tocaMusicaErro();
    jogoFinalizado.innerHTML = "Que pena, você errou. Tente novamente!";
    document.getElementById("botaoTentaNovamente").style.display = "block";
}

function reiniciaFase() {
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
    document.getElementById("botaoTentaNovamente").style.display = "none";
    startGame(seleciona);
}

function mudaFase() {
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
    document.getElementById("botaofase2").style.display = "none";
    startGame(seleciona++);
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
    window.location.assign("fasesFinais.html");
}

function reiniciaJogo() {
    window.location.assign("paginaInicial.html");
}