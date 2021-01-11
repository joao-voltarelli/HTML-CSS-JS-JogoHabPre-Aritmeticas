var img = document.getElementById("imgMenu");
var video = document.getElementById("video");
var button = document.getElementById("botaoVideo");
var controleCor = 0;
var fundo, cor, corBotao;

function playVideo()
{
    img.style.display = "none";
    video.style.display = "block";
    video.play();
}

function atualizaCor()
{
    controleCor = localStorage.getItem("controleCor");
    controleCor++;
    if(controleCor > 5)
    {
        controleCor = 0;
    }
    localStorage.setItem("controleCor", controleCor);
}

function personalizarMenu()
{
    var personalizacao = localStorage.getItem("controleCor");
    
    if(personalizacao == 1)
    {
        fundo = "url(css/fundo_blue.png)";
        cor = "darkblue";
        corBotao = "darkblue";
    }
    else if(personalizacao == 2)
    {
        fundo = "url(css/fundo_rosa.jpg)";
        cor = "darkorchid";
        corBotao = "darkorchid";
    }
    else if(personalizacao == 3)
    {
        fundo = "url(css/fundo_verde.jpg)";
        cor = "green";
        corBotao = "green";
    }
    else if(personalizacao == 4)
    {
        fundo = "url(css/fundo_amarelo.jpg)";
        cor = "darkgoldenrod";
        corBotao = "darkgoldenrod";
    }
    else if(personalizacao == 5)
    {
        fundo = "url(css/fundo_vermelho.png)";
        cor = "darkred";
        corBotao = "darkred";
    }
    else
    {
        fundo = "url(css/fundo_orange.jpg)";
        cor = "orange";
        corBotao = "#f07f29";
    }

    var elementos = document.getElementsByClassName('button');
    for(var i=0; i<elementos.length; i++){
        elementos[i].style.backgroundColor = corBotao;
    }

    document.body.style.backgroundImage = fundo;
    document.getElementsByTagName('h1')[0].style.color = cor;
    document.getElementsByTagName('h2')[0].style.color = cor;
    document.getElementsByTagName('p')[0].style.color = cor;
    document.getElementsByTagName('p')[1].style.color = cor;
}

function personalizarSelecionaHeroi()
{
    var personalizacao = localStorage.getItem("controleCor");
    
    if(personalizacao == 1)
    {
        fundo = "url(css/fundo_blue.png)"
        cor = "darkblue";
        corBotao = "darkblue";
    }
    else if(personalizacao == 2)
    {    
        fundo = "url(css/fundo_rosa.jpg)";
        cor = "darkorchid";
        corBotao = "darkorchid";
    }
    else if(personalizacao == 3)
    {
        fundo = "url(css/fundo_verde.jpg)";
        cor = "green";
        corBotao = "green";
    }
    else if(personalizacao == 4)
    {
        fundo = "url(css/fundo_amarelo.jpg)";
        cor = "darkgoldenrod";
        corBotao = "darkgoldenrod";
    }
    else if(personalizacao == 5)
    {
        fundo = "url(css/fundo_vermelho.png)";
        cor = "darkred";
        corBotao = "darkred";
    }
    else
    {
        fundo = "url(css/fundo_orange.jpg)";
        cor = "orange";
        corBotao = "#f07f29";
    }

    document.getElementsByTagName('h1')[0].style.color = cor;
    document.body.style.backgroundImage = fundo;
}

function personalizarFases()
{
    var personalizacao = localStorage.getItem("controleCor");
    
    if(personalizacao == 1)
    {
        fundo = "url(css/fundo_blue.png)"
        cor = "darkblue";
        corBotao = "darkblue";
    }
    else if(personalizacao == 2)
    {    
        fundo = "url(css/fundo_rosa.jpg)";
        cor = "darkorchid";
        corBotao = "darkorchid";
    }
    else if(personalizacao == 3)
    {
        fundo = "url(css/fundo_verde.jpg)";
        cor = "green";
        corBotao = "green";
    }
    else if(personalizacao == 4)
    {
        fundo = "url(css/fundo_amarelo.jpg)";
        cor = "darkgoldenrod";
        corBotao = "darkgoldenrod";
    }
    else if(personalizacao == 5)
    {
        fundo = "url(css/fundo_vermelho.png)";
        cor = "darkred";
        corBotao = "darkred";
    }
    else
    {
        fundo = "url(css/fundo_orange.jpg)";
        cor = "orange";
        corBotao = "#f07f29";
    }

    document.body.style.backgroundImage = fundo;
    document.getElementsByTagName('p')[0].style.color = cor;
    document.getElementsByTagName('p')[1].style.color = cor;
    document.getElementsByTagName('p')[2].style.color = cor;
    document.getElementsByTagName('p')[3].style.color = cor;

    var elementos = document.getElementsByTagName('input');
    for(var i=0; i<elementos.length; i++){
        elementos[i].style.backgroundColor = corBotao;
    }

    elementos = document.getElementsByTagName('button');
    for(var i=0; i<elementos.length; i++){
        elementos[i].style.backgroundColor = corBotao;
    }
}

function personalizarFasesFinais()
{
    var personalizacao = localStorage.getItem("controleCor");
    
    if(personalizacao == 1)
    {
        fundo = "url(css/fundo_blue.png)"
        cor = "darkblue";
        corBotao = "darkblue";
    }
    else if(personalizacao == 2)
    {    
        fundo = "url(css/fundo_rosa.jpg)";
        cor = "darkorchid";
        corBotao = "darkorchid";
    }
    else if(personalizacao == 3)
    {
        fundo = "url(css/fundo_verde.jpg)";
        cor = "green";
        corBotao = "green";
    }
    else if(personalizacao == 4)
    {
        fundo = "url(css/fundo_amarelo.jpg)";
        cor = "darkgoldenrod";
        corBotao = "darkgoldenrod";
    }
    else if(personalizacao == 5)
    {
        fundo = "url(css/fundo_vermelho.png)";
        cor = "darkred";
        corBotao = "darkred";
    }
    else
    {
        fundo = "url(css/fundo_orange.jpg)";
        cor = "orange";
        corBotao = "#f07f29";
    }

    document.body.style.backgroundImage = fundo;
    document.getElementsByTagName('p')[0].style.color = cor;
    document.getElementsByTagName('p')[1].style.color = cor;
    document.getElementsByTagName('p')[2].style.color = cor;
    document.getElementsByTagName('p')[3].style.color = cor;

    elementos = document.getElementsByTagName('button');
    for(var i=0; i<elementos.length; i++){
        elementos[i].style.backgroundColor = corBotao;
    }
}