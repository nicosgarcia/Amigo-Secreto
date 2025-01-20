//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarNomeLista(ulId, amigo) {
    let ul = document.getElementById(ulId);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(amigo));
    ul.appendChild(li);
}


function adicionarAmigo() {

    //Quando clicar no botão adicionar, o campo de input deve ser limpo e adicionar o nome a lista ul id "listaAmigos"

    let valorCampoTexto = document.getElementById("amigo").value;

    if (valorCampoTexto == "") {
        alert("Você deve escrever algo no campo para adicionar a lista.");
        return false;
    }

    listaAmigos.push(valorCampoTexto);
    console.log(listaAmigos)
    document.getElementById("amigo").value = "";

    return adicionarNomeLista("listaAmigos", valorCampoTexto);
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (listaAmigos.length));
}

function sortearAmigo() {
    //Eu quero sortear um amigo entre os que o usuário escreveu, limpar todos os li's e adicionar o nome do escolhiddo na tela com uma cor diferente.
    let numeroAleatorio = gerarNumeroAleatorio();

    console.log(listaAmigos[numeroAleatorio]);

    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    adicionarNomeLista("resultado", "O Amigo sorteado foi " + listaAmigos[numeroAleatorio] + "!");

}
