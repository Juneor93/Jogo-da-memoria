const deck = [
    {
        "id" : 1,
        "name" : "1.png",
        "src" : "./images/deck/city.png"
    },
    {
        "id" : 2,
        "name" : "2.png",
        "src" : "./images/deck/realmadrid.png"
    },
    {
        "id" : 3,
        "name" : "3.png",
        "src" : "./images/deck/barcelona.png"
    },
    {
        "id" : 4,
        "name" : "1.png",
        "src" : "./images/deck/liverpool.png"
    },
    {
        "id" : 5,
        "name" : "2.png",
        "src" : "./images/deck/realmadrid.png"
    },
    {
        "id" : 6,
        "name" : "3.png",
        "src" : "./images/deck/united.png"
    },
    {
        "id" : 7,
        "name" : "1.png",
        "src" : "./images/deck/juventus.png"
    },
    {
        "id" : 8,
        "name" : "2.png",
        "src" : "./images/deck/liverpool.png"
    },
    {
        "id" : 9,
        "name" : "3.png",
        "src" : "./images/deck/juventus.png"
    },
    {
        "id" : 10,
        "name" : "1.png",
        "src" : "./images/deck/barcelona.png"
    },
    {
        "id" : 11,
        "name" : "2.png",
        "src" : "./images/deck/united.png"
    },
    {
        "id" : 12,
        "name" : "3.png",
        "src" : "./images/deck/city.png"
    }
]

var jogo = document.getElementById("jogo-da-memoria")
var divCard = null
var img = null

deck.forEach( carta => {
    divCard = document.createElement("div")
    divCard.setAttribute("class","card")
    divCard.setAttribute("id", carta.id)
    divCard.setAttribute("onclick", "minha_funcao()")

    //Frente da carta
    tagImg = document.createElement("img")
    tagImg.setAttribute("src",carta.src)
    tagImg.setAttribute("alt",carta.name)
    tagImg.style.display = "none"
    divCard.appendChild(tagImg)

    //Verso da carta
    tagImg = document.createElement("img")
    tagImg.setAttribute("src","./images/deck/back.png")
    tagImg.setAttribute("alt","verso")
    tagImg.style.display = "block"
    divCard.appendChild(tagImg)

    jogo.appendChild(divCard)
})


function minha_funcao() {
    var card = document.getElementById(event.currentTarget.id)
    

    //i = 0 , 1, 2 ,3, ...
    for(var i = 0; i < card.children.length; i++){
        if(card.children[i].style.display == "none"){
            card.children[i].style.display = "block"
            continue
        }
        if(card.children[i].style.display == "block"){
            card.children[i].style.display = "none"
            continue
        }
    }

    pontuar(++pontuacao)
}


localStorage.setItem("record", 0);
var record = localStorage.getItem("record");

var pontuacao = 0
function pontuar(pontos){
    var spanPontuacao = document.getElementById("pontuacao")
    spanPontuacao.innerHTML = pontos
    
    //Se meu último registro for melhor que o Record, atualize-o.
    if( pontos > record){
        record = pontos
        localStorage.setItem("record", record);
    }

    var spanRecord = document.getElementById("record")
    spanRecord.innerHTML = record
}
pontuar(pontuacao)   //Pontuação Inicial do Game


function reset() {
    //Para cada carta
    for(var i = 0; i < jogo.children.length; i++){
        var carta = jogo.children[i]

        //Para cada imagem da carta, Frente e Verso
        for( var j = 0; j < carta.children.length; j++){
            if(carta.children[j].getAttribute("alt") == "verso"){
                carta.children[j].style.display = "block"
            }else{
                carta.children[j].style.display = "none"
            }
        }
    }

    pontuacao = 0 
    pontuar(pontuacao) }

