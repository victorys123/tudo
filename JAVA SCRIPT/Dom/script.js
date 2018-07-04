/*alert("Bem vindo a Página dos dois gatos");

let titulo = document.querySelector("#titulo");

titulo.classList.add("bemgrande");

console.log("Classe do HTML adicionada com sucesso"); */

let certo = document.querySelector("#certo");
let errado = document.querySelector("#errado");

function gatoErrado(){
    errado.src = "groselha"
    //alert("GATO ERRADO CLIQUE NO OUTRO GATO");
}
function gatoCerto(){
        certo.src = "http://placekitten.com/350/350";
        alert("Parabens clicou no gato certo mas ele foi embora rlx que veio outro");
}

//errado.onclick = gatoErrado;
errado.onmouseenter = gatoErrado;
certo,onclick = gatoCerto;



